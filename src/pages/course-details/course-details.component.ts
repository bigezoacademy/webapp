import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, SweetAlert2Module], // Include HttpClientModule and FormsModule here
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;
  showCourse: boolean = true;
  showSuccess: boolean = false;
  showForm: boolean = false;
  private jsonUrl = '/courses.json';
  showSuccessMessage: boolean = false;
  isSubmitting: boolean = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showCourse = true;
    this.showForm = false;
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      this.course = res.courses.find((course: any) => course.CourseId === courseId);
      if (this.course) {
        this.formData.title = this.course.Title;
        this.formData.price = this.course.Price;
      }
    });
    this.formData.date = this.getFormattedDate();
    this.formData.year = this.getYear();
    this.formData.time = this.getFormattedTime();
  }

  getFormattedDate(): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date();
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  getFormattedTime(): string {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    return `${hours}:${minutesStr} ${ampm}`;
  }

  getYear(): string {
    const date = new Date();
    return date.getFullYear().toString();
  }

  goBack() {
    window.location.href = '/';
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

  register(): void {
    this.showCourse = false;
    this.showForm = true;
    const courseId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(this.jsonUrl).subscribe((res: any) => {
      this.course = res.courses.find((course: any) => course.CourseId === courseId);
    });
  }

  sheetDbUrl = 'https://sheetdb.io/api/v1/0t53whxj2mumd'; // Replace with your actual SheetDB URL

  formData = {
    year: '',
    course_month: '',
    title: '',
    name: '',
    phone: '',
    email: '',
    price: '',
    country: '',
    date: '',
    time: ''
  };

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.isSubmitting = true;
      Swal.fire({
        title: 'Sending your application...',
        html: 'Please wait while we process your request.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      this.http.post(this.sheetDbUrl, this.formData).subscribe(
        response => {
          Swal.close();
          this.isSubmitting = false;
          this.showSuccessAlert();
          this.showSuccess = true;
          this.showCourse = true;
          this.showForm = false;
          this.showSuccessMessage = true;
        },
        error => {
          Swal.close();
          this.isSubmitting = false;
          this.showErrorSendAlert();
        }
      );
    } else {
      this.showErrorAlert();
    }
  }

  showSuccessAlert(): void {
    Swal.fire({
      title: "Done!",
      text: "Successfully Registered",
      icon: "success"
    });
  }

  showErrorAlert(): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill in all fields",
      footer: '<a href="#">Also select a month?</a>'
    });
  }

  showErrorSendAlert(): void {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Check your internet connection",
      footer: '<a href="#">Make sure all fields are filled</a>'
    });
  }
}
