import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HeadingComponent } from "../components/heading/heading.component";
import { SubtitleComponent } from "../components/subtitle/subtitle.component";
import { TutorComponent } from "../pages/tutor/tutor.component";
import { HomeComponent } from "../pages/home/home.component";
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from '../components/courses/courses.component';
import { CourseDetailsComponent } from '../pages/course-details/course-details.component';
import { FooterComponent } from "../components/footer/footer.component";
import { ImageCreatorComponent } from '../pages/image-creator/image-creator.component';
import { BooksComponent } from './books/books.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HeadingComponent, SubtitleComponent, TutorComponent, HomeComponent, LoginComponent, SignupComponent,
        RouterModule, CommonModule, CoursesComponent, CourseDetailsComponent, FooterComponent,ImageCreatorComponent,BooksComponent]
})
export class AppComponent {
  title = 'bigezo-web-app';
  
}
