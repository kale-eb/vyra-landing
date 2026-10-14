// Public read access to Vyra's Supabase project: the publishable key only reads
// what row-level security exposes (the user count and published blog posts).
// The env overrides let a local build read the staging project instead.
export const SUPABASE_URL = process.env.VYRA_SUPABASE_URL || "https://uskviqibopshckqsmyvk.supabase.co";
export const SUPABASE_PUBLISHABLE_KEY =
  process.env.VYRA_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_aAeaDWrJlNNTiJbdh6nGKA_yUVUT_6P";
