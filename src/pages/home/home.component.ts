import { Component} from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CoursesComponent]
})
export class HomeComponent {

}
