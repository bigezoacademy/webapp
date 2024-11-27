import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { LayoutComponent } from '../pages/layout/layout.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { TutorComponent } from '../pages/tutor/tutor.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { CourseDetailsComponent } from '../pages/course-details/course-details.component';
import { SmsComponent } from '../pages/sms/sms.component';
import { CardgeneratorComponent } from '../pages/cardgenerator/cardgenerator.component';
import { ReceiptmakerComponent } from '../pages/receiptmaker/receiptmaker.component';
import { ImageCreatorComponent } from '../pages/image-creator/image-creator.component';
import { ImageTextEditorComponent } from '../pages/image-text-editor/image-text-editor.component';
import { FigmaEditor } from '../pages/figma-editor/figma-editor.component';
import { DrillsComponent } from '../pages/drills/drills.component';
import { TestimoniesComponent } from '../pages/testimonies/testimonies.component';
import { BooksComponent } from './books/books.component';


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
    {path:'books',component:BooksComponent},
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'drills',
        component:DrillsComponent
    },
    {
        path:'testimonies',
        component:TestimoniesComponent
    },
    {
        path:'tutor',
        component:TutorComponent
    },
  
    {
        path:'create',
        component: FigmaEditor
    },
    {
      path:'',
      component:LayoutComponent,
      children:[
       { path:'',
        component:HomeComponent
       }
      ]  
    }
];

