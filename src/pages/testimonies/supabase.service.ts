import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient;
  private VISITOR_TABLE = 'academy_counter';

  constructor() {
    // Initialize Supabase client
    this.supabase = createClient(
      'https://dbqzjclxrcuawfvnzlod.supabase.co',  // Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicXpqY2x4cmN1YXdmdm56bG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMDkyMzUsImV4cCI6MjA0Mjg4NTIzNX0.BOYOPU0qwB0A_oCo6I8WLK-ONt7v_OxXL6OzyKvTZJs'                   // Replace with your public anon key
    );
  }

  // Fetch the current visitor count
  async getVisitorCount() {
    const { data, error } = await this.supabase
      .from(this.VISITOR_TABLE)
      .select('count')
      .single(); // Since we only have one row with the visitor count

    if (error) {
      console.error('Error fetching visitor count:', error);
      return null;
    }

    return data?.count;
  }

  // Increment the visitor count
  async incrementVisitorCount() {
    const { data, error } = await this.supabase
      .rpc('increment_academy_counter'); // Calling a stored procedure to increment the count

    if (error) {
      console.error('Error incrementing visitor count:', error);
      return null;
    }

    return data;
  }
}
