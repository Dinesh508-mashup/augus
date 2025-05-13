import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          async get(name: string) {
            const cookieStore = await cookies()
            const cookie = cookieStore.get(name)
            return cookie?.value
          },
          async set(name: string, value: string, options) {
            try {
              const cookieStore = await cookies()
              cookieStore.set({ name, value, ...options })
            } catch (error) {
              // Handle cookie setting error
              console.error('Error setting cookie:', error)
            }
          },
          async remove(name: string, options) {
            try {
              const cookieStore = await cookies()
              cookieStore.set({ name, value: '', ...options })
            } catch (error) {
              // Handle cookie removal error
              console.error('Error removing cookie:', error)
            }
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