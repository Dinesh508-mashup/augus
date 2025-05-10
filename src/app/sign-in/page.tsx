'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { createClient } from '~/lib/supabase/client';

// Re-use or import shared components if available
// Placeholder for the Augus logo (replace with actual path/component)
const AugusLogo = () => (
  <svg // Example SVG placeholder
    className="h-8 w-auto text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a8 8 0 11-14.856 0M12 21a9 9 0 100-18 9 9 0 000 18z" // Example path
    />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="white">LOGO</text>
  </svg>
);

// Placeholder for Google Icon
const GoogleIcon = () => (
     <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244.8 512 112.8 512 0 398.5 0 256S112.8 0 244.8 0c69.8 0 130.5 28.9 173.4 74.9l-74.5 64.5C308.6 95.6 278.3 80 244.8 80c-82.6 0-150.4 67.8-150.4 151.9s67.8 151.9 150.4 151.9c92.5 0 131.3-74.4 135.2-112.4H244.8v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
)

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    setMessage('');
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    setLoading(false);
    if (error) {
      console.error('Error signing in with Google:', error);
      setError(`Google Sign-In failed: ${error.message}`);
    }
    // Redirect handled by Supabase/middleware
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    const supabase = createClient();
    // Use signInWithOtp for magic link login (no need to create user)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        // emailRedirectTo: `${location.origin}/auth/callback`, // Optional
        shouldCreateUser: false, // Don't create user on login page
      },
    });
    setLoading(false);
    if (error) {
      console.error('Error signing in with email:', error);
      setError(`Email Sign-In failed: ${error.message}`);
    } else {
      setMessage('Check your email for the magic link!');
      setEmail('');
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Column: Image Background (Same as Sign Up) */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden rounded-r-3xl lg:flex">
        <Image
          src="/placeholder-image.jpg" // Use the same placeholder or final image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        <div className="relative z-20 p-8">
          <AugusLogo />
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-6 text-white">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Log In
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Welcome back! Sign in to your account.
            </p>
          </div>

          {/* Google Sign-In Button */}
          <Button
             variant="outline"
             className="w-full text-black bg-white hover:bg-gray-200 disabled:opacity-70"
             onClick={handleGoogleSignIn}
             disabled={loading}
           >
             <GoogleIcon />
             Continue with Google
          </Button>

          {/* Or Separator */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-black px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Email Sign-In Form */}
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70"
              disabled={loading || !email}
            >
              {loading ? 'Sending...' : 'Continue with Email'}
            </Button>
          </form>
          
          {/* Feedback Messages */} 
          {message && <p className="text-center text-sm text-green-400">{message}</p>}
          {error && <p className="text-center text-sm text-red-400">{error}</p>}

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="font-medium text-indigo-400 hover:text-indigo-300">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 