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
      'https://csyzrvomlgfkaokhopzd.supabase.co',  // Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzeXpydm9tbGdma2Fva2hvcHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyODA1NjAsImV4cCI6MjA0Mjg1NjU2MH0.QEaLVvuBfYIXR46P8ivevCkYCQefxFs1phjuMJQkC6o'                   // Replace with your public anon key
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
