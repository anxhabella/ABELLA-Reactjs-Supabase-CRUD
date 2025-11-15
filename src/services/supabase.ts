import { createClient } from '@supabase/supabase-js'


const supabase_url = 'https://nevzonsydsenztonsdqx.supabase.co';
const supabase_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldnpvbnN5ZHNlbnp0b25zZHF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2NDk1MDAsImV4cCI6MjA3NTIyNTUwMH0.7R8_2bDtusP8nPwuCipctakBa-NAkm7EtZZm1-9XO_4';

export const supabase = createClient(supabase_url, supabase_anon_key);