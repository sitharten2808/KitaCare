import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pclcntxryrkhxmhdufad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbGNudHhyeXJraHhtaGR1ZmFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDMxMzQsImV4cCI6MjA2MDkxOTEzNH0.3cQFGmOYq58c14zVBueyODcOgTR1K8m0hBcP_AiPNUc';

export const supabase = createClient(supabaseUrl, supabaseKey); 