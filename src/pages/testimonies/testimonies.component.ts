import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from './supabase.service';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.css']
})
export class TestimoniesComponent implements OnInit {
  academyVisitorCount: number = 0;
  title = '';
  newcount:number=0;
  students: any[] = [];
  private url = '/testimonies.json';

  constructor(private http: HttpClient, private router: Router, private supabaseService: SupabaseService) {}

  ngOnInit(): void {
    // Fetch testimonies data
    this.fetchTestimonies();
    // Fetch academy visitor count
    this.fetchAcademyVisitorCount();
    // Increment Visitor count
    this.incrementVisitorCount();
  }

  // Fetch the testimonies data from the JSON file
  fetchTestimonies(): void {
    this.http.get(this.url).subscribe({
      next: (res: any) => {
        this.students = res.students;
        console.log('Testimonies fetched:', res.students);
      },
      error: (err) => {
        console.error('Failed to fetch testimonies data:', err);
      }
    });
  }

  // Fetch the academy visitor count
  async fetchAcademyVisitorCount(): Promise<void> {
    try {
      this.academyVisitorCount = await this.supabaseService.getVisitorCount();
      console.log('Academy visitor count:', this.academyVisitorCount);
    } catch (error) {
      console.error('Failed to fetch academy visitor count from Supabase:', error);
    }
  }

  // Increment the academy visitor count
  async incrementVisitorCount(): Promise<void> {
    try {
      await this.supabaseService.incrementVisitorCount();
      // Refresh the academy visitor count after incrementing
      this.academyVisitorCount = await this.supabaseService.getVisitorCount();
      this.newcount=this.academyVisitorCount;
      console.log(this.newcount);
      console.log('---------------------------------success incrememnting---------');
    } catch (error) {
      console.error('Failed to increment academy visitor count:', error);
    }
  }
}
