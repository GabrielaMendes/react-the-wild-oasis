import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jaqyrqiahudnhthnzrei.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphcXlycWlhaHVkbmh0aG56cmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NzcyMzEsImV4cCI6MjAxNDM1MzIzMX0.pUChopaNl0Y4nF58KLjUh4kixCRH4F2sHWlc7bq0afk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
