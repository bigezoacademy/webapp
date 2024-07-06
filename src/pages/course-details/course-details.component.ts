import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  showCourse: boolean = true;
  showForm:boolean=false;
  private jsonUrl = '/courses.json';
  showSuccessMessage: boolean=false;

  constructor(private http: HttpClient,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showCourse=true;
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      this.course = res.courses.find((course: any) => course.CourseId === courseId);
    });
  }
  goBack(){
    window.location.href='/academy';
  }
  getTitleClass(courseId: number): string {
    switch (courseId) {
      case 1:
        return 'title-purple';
      case 2:
        return 'title-blue';
      case 3:
        return 'title-green';
        case 4:
          return 'title-red';
        case 5:
          return 'title-yellow';
        case 6:
          return 'title-orange';
      default:
        return 'title-purple';
    }
  }

  register():void{
    this.showCourse=false;
    this.showForm=true;
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      this.course = res.courses.find((course: any) => course.CourseId === courseId);
    });
  
  }

  submitForm(){
    this.showCourse=false;
    this.showForm=false;
    this.showSuccessMessage=true;
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      this.course = res.courses.find((course: any) => course.CourseId === courseId);
    });
  }
}
