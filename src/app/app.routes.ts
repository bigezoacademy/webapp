import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AcademyComponent } from '../pages/academy/academy.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { CourseDetailsComponent } from '../pages/course-details/course-details.component';
import { SmsComponent } from '../pages/sms/sms.component';
import { CardgeneratorComponent } from '../pages/cardgenerator/cardgenerator.component';
import { ReceiptmakerComponent } from '../pages/receiptmaker/receiptmaker.component';


export const routes: Routes = [
  
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },
  
    { path: 'course-detail/:id', component: CourseDetailsComponent },
    {
        path:'',
        component:HomeComponent
    },
    {path:'sms',component:SmsComponent},
    {path: 'receiptmaker',component:ReceiptmakerComponent},
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'cardgenerator',
        component:CardgeneratorComponent
    },
    {
        path:'academy',
        component:AcademyComponent
    },
    {
      path:'',
      component:LayoutComponent,
      children:[
       { path:'',
        component:DashboardComponent
       }
      ]  
    }
];

