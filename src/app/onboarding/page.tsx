'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils'; // For conditional classes

// Placeholder for the Augus logo (use the same as in sign-up or a consistent one)
const AugusLogo = () => (
  <svg // Example SVG placeholder
    className="h-8 w-auto text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {/* Replace with actual Augus logo path/data */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.428 15.428a8 8 0 11-14.856 0M12 21a9 9 0 100-18 9 9 0 000 18z" // Example path
    />
     <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="white">LOGO</text>
  </svg>
);

const roles = [
  { id: 1, name: 'Startup Founder' },
  { id: 2, name: 'Doctor' },
  { id: 3, name: 'Lawyer' },
  { id: 4, name: 'Freelancer' },
  { id: 5, name: 'Human Resource' },
  { id: 6, name: 'Developer' },
  { id: 7, name: 'Product Manager' },
  { id: 8, name: 'Other' },
];

export default function OnboardingPage() {
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(1); // Default to Startup Founder

  const handleRoleSelect = (roleId: number) => {
    setSelectedRoleId(roleId);
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic with the selected role
    console.log('Signing up with role ID:', selectedRoleId);
    // Likely navigate to the main app page or dashboard after this
    // router.push('/'); // Example navigation
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Column: Image Background (Same as Sign Up) */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden rounded-r-3xl lg:flex">
        <Image
          src="/placeholder-image.jpg" // Replace with actual image path
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

      {/* Right Column: Role Selection */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-lg space-y-8 text-white">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Get Started with Us
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Complete these easy steps to register your account.
            </p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className={cn(
                  'relative flex flex-col items-start justify-between rounded-lg border p-4 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
                  selectedRoleId === role.id
                    ? 'border-transparent bg-white text-black ring-2 ring-white' // Selected state
                    : 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50' // Default state
                )}
              >
                <span
                  className={cn(
                    'mb-4 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold',
                    selectedRoleId === role.id
                      ? 'bg-black text-white' // Selected number circle
                      : 'bg-gray-600 text-gray-200' // Default number circle
                  )}
                >
                  {role.id}
                </span>
                <span className="text-sm font-medium">{role.name}</span>
              </button>
            ))}
          </div>

          {/* Sign Up Button */}
          <Button
            onClick={handleSignUp}
            className="w-full bg-white text-black hover:bg-gray-200"
            disabled={!selectedRoleId} // Disable if no role is selected
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
} 