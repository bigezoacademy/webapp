import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  private apiUrl = '/courses.json';
  private  jsonUrl= 'http://localhost:8081/courses/all';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe((res: any) => {
      this.courses = res.courses; // Adjusted to match the JSON structure
    });
  }

  viewDetails(courseId: number): void {
    this.router.navigate(['/course-detail', courseId]);
  }
}
