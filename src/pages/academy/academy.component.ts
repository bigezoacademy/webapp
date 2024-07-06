import { Component } from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";

@Component({
    selector: 'app-academy',
    standalone: true,
    templateUrl: './academy.component.html',
    styleUrl: './academy.component.css',
    imports: [CoursesComponent]
})
export class AcademyComponent {

}
