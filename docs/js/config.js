const SUPABASE_URL = "https://zalgkylsjbzzaqeejuyf.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_7LdmEeEkkmR5lGK7jwZWUg_v-acH1NL";

const db = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);