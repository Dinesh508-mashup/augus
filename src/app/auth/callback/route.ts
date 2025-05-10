import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr' // Import only createServerClient

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = cookies()
    // Create client without explicit cookie handlers for route handler
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: { // Still need basic get/set/remove for exchangeCodeForSession to work
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Clear the URL code parameter and redirect
      const redirectUrl = new URL(next, origin);
      redirectUrl.searchParams.delete('code'); // Clean up URL
      return NextResponse.redirect(redirectUrl)
    }

    console.error("Error exchanging code for session:", error);
    // Redirect to an error page on failure
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  // Redirect to an error page if code is missing
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
} 