"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming a button component exists

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Left Section - Background Image */}
      <div 
        className="relative hidden md:block w-1/2 bg-cover bg-center rounded-r-2xl overflow-hidden"
        style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }} // **Replace with your actual image path**
      >
        {/* Optional: Add overlay or content on the image */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-8 left-8 text-white text-2xl font-bold z-10">OnlyPipe</div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Sign Up Account</h1>
            <p className="text-neutral-400 text-sm">Enter your personal data to create your account.</p>
          </div>

          {/* Google Sign-in Button */}
          <Button 
            variant="outline" 
            className="w-full border-neutral-700 text-white hover:bg-neutral-800 hover:text-white"
          >
            <Image 
              src="/google-icon.svg" // **Replace with path to your Google icon SVG**
              alt="Google Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </Button>

          {/* Or Separator */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-neutral-700"></div>
            <span className="flex-shrink mx-4 text-neutral-500">Or</span>
            <div className="flex-grow border-t border-neutral-700"></div>
          </div>

          {/* Login Link */}
          <div className="text-center text-sm text-neutral-400">
            Already have an account?{' '}
            <a href="/auth/login" className="text-blue-500 hover:underline">Log in</a> {/* **Update login path if needed** */}
          </div>
        </div>
      </div>
    </div>
  );
} 