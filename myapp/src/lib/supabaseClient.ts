import { createClient } from '@supabase/supabase-js'
import { SECRET_SUPABASE_URL, SECRET_SUPABASE_ANON_KEY } from "$env/static/private";
// Create a single supabase client for interacting with your database
export const supabase = createClient(SECRET_SUPABASE_URL, SECRET_SUPABASE_ANON_KEY);

