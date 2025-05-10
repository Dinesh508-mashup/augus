import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

// Utility function to create Supabase client FOR Server Components/Actions/Routes
export function createSupabaseServerClient(cookieStore: ReadonlyRequestCookies) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
           // In Server Components, this will throw an error.
           // In Route Handlers and Server Actions, it should work.
           cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
           // In Server Components, this will throw an error.
           // In Route Handlers and Server Actions, it should work.
           cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
} 