import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://etpdipjoofbfegvrkepx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0cGRpcGpvb2ZiZmVndnJrZXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMzA3NDIsImV4cCI6MjA0ODgwNjc0Mn0.fO09nvSbvJxMKquO6ObIryi9LKeQbp9R5-AciFJZJvo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})