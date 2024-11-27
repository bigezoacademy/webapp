import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl="http://localhost:8080/api/";
  constructor(private http:HttpClient){
  
  }
  getBooksList():Observable<Books[]>{
    return this.http.get<Books[]>(`${this.baseUrl}`);
  }
  
  }