import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing in env variables');
}

console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)


export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client for admin operations
export const createServerClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// Database types
export interface Waitlist {
  id: string
  first_name: string
  last_name: string
  email: string
  company: string
  job_title?: string
  team_size?: string
  current_tool?: string
  pain_points?: string[]
  interests?: string[]
  created_at: string
  updated_at: string
}
