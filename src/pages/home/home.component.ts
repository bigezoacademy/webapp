import { Component} from '@angular/core';
import { CoursesComponent } from "../../components/courses/courses.component";
import { NavigationService } from '../../app/navigation.service';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CoursesComponent]
})
export class HomeComponent {
constructor(private navigationService:NavigationService){

}
navigateToAcademy(){
   this.navigationService.navigateToAcademy(); 
}
navigateToSms(){
    this.navigationService.navigateToSms(); 
 }
}
