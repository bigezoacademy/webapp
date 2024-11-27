import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  bookslist: Books[] =[];
  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.getBooksList();
  }
  getBooksList() {
try {
  this.bookService.getBooksList().subscribe(data=>{
    this.bookslist=data;
  })
} catch (error) {
  console.log(error);
}
  }

}
