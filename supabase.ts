
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ctauwjzuloechejqjkzc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_67muw2yWkFUT8BYlosPt-w_5HjV_NuK';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
