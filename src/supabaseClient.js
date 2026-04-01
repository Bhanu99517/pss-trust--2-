import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://uuzrlznbgkngqkxrkvrv.supabase.co"
const SUPABASE_ANON_KEY = "sb_publishable_Dn53m4yquPILT_hNGmPDCw_5M9JsG8k"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)