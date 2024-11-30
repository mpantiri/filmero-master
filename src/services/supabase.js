import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nyrbchbhngqiorsgmoyv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cmJjaGJobmdxaW9yc2dtb3l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5OTYxNTksImV4cCI6MjA0ODU3MjE1OX0.BQ9VvlVBBL38jNAT6uZrAz8iph-QIbZdSP8erDL5H30";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };

export default supabase;
