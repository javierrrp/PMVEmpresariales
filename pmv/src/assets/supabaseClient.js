
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kxhhdmtdcusmkaqzbpuk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4aGhkbXRkY3VzbWthcXpicHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNDgwMDUsImV4cCI6MjA2MTgyNDAwNX0.E0qBdt9doa1PUV1bU60x0q2jNMO1DIOCkXMbJN5CtCg'

export const supabase = createClient(supabaseUrl, supabaseKey)
