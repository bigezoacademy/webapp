import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './testimonies.component.html',
  styleUrl: './testimonies.component.css'
})
export class TestimoniesComponent implements OnInit{

  students:any[]=[];
  private url='/testimonies.json';
  constructor(private http:HttpClient, private router:Router){

  }
  ngOnInit():void{

 try {
  this.http.get(this.url).subscribe((res:any)=>{
    this.students=res.students;
    console.log(res.students);});
  
 } catch (error) {
  console.log('failed to fetch testimonies data -------------**************************');
 }




  }
}
