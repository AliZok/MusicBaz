// composables/useSupabase.js

import { createClient } from '@supabase/supabase-js'

// These variables should be stored securely, for example in an `.env` file
const SUPABASE_URL = 'https://fdveybzxmfvhbznemfpr.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdmV5Ynp4bWZ2aGJ6bmVtZnByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNDMzNTAsImV4cCI6MjA1MDgxOTM1MH0.7_RT9A9CeU42u_96c73ADg1KkpQFmGWkQPP1i48V2x4'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export function useSupabase() {
  return { supabase }
}