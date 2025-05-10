'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"; // Import DropdownMenu components
import {
    PlusIcon, MagnifyingGlassIcon, UserCircleIcon, Cog6ToothIcon, ArrowLeftStartOnRectangleIcon,
    Bars3Icon, EllipsisHorizontalIcon, BuildingStorefrontIcon, BriefcaseIcon, BellIcon, QuestionMarkCircleIcon,
    UsersIcon, IdentificationIcon, WrenchScrewdriverIcon, DocumentTextIcon // Added more icons for dropdown
} from '@heroicons/react/24/outline';
import { createClient } from '~/lib/supabase/client'; // Import Supabase browser client

// Placeholder Augus Logo Component (replace with actual implementation)
const AugusWavyLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 7.5c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9 .375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm-4.875-3.75a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v4.5a.375.375 0 0 1-.375.375h-4.5a.375.375 0 0 1-.375-.375v-4.5Z" />
    </svg>
);

// Mock data (replace with actual data later)
const categories = [
  { name: 'General', active: true },
  { name: 'Sales', active: false },
  { name: 'Negotiation', active: false },
  { name: 'Marketing', active: false },
];

const recentChats = [
  { title: 'How can I increase the monthly recurring revenue?' },
  { title: "What's the best approach to handle objections?" },
  { title: "What's the best approach to handle objections?" }, // Example duplicate
];

export default function Sidebar() {
  const router = useRouter();
  // TODO: Fetch real user data
  const user = {
      name: "Demo User",
      avatarUrl: "/user-avatar-placeholder.png"
  }

  const handleSignOut = async () => {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      } else {
        // Refresh the page or navigate to ensure session state is cleared
        router.push('/sign-up'); // Redirect to sign-up after sign-out
        router.refresh();
      }
  }

  return (
    <aside className="flex h-full w-72 flex-col bg-gradient-to-b from-gray-900 to-black p-4 text-gray-300">
      {/* Top Section: Logo & Expander */}
      <div className="mb-6 flex items-center justify-between">
        <AugusWavyLogo />
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <Bars3Icon className="h-5 w-5" /> {/* Placeholder for expand/collapse */}
        </Button>
      </div>

      {/* New Chat Button */}
      <Button className="mb-6 w-full justify-between bg-gray-700 hover:bg-gray-600">
        Begin a New Chat
        <PlusIcon className="h-4 w-4" />
      </Button>

      {/* Search Input */}
      <div className="relative mb-4">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full rounded-md border-gray-700 bg-gray-800 pl-9 text-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Category</h3>
        <nav className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.active ? "secondary" : "ghost"}
              className={`w-full justify-between text-sm font-normal ${category.active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'}`}
            >
              {category.name}
              <EllipsisHorizontalIcon className="h-4 w-4 text-gray-500" />
            </Button>
          ))}
        </nav>
      </div>

      {/* Recent Chats */}
      <div className="mb-4 flex-1 overflow-hidden">
         <h3 className="mb-2 text-xs font-semibold uppercase text-gray-500">Recent Chats</h3>
         <ScrollArea className="h-[calc(100%-2rem)] pr-3"> {/* Adjust height based on title height */}
             <div className="space-y-1">
                {recentChats.map((chat, index) => (
                    <Button
                        key={index} // Use a better key if available
                        variant="ghost"
                        className="w-full justify-between text-left text-sm font-normal text-gray-400 hover:bg-gray-700/50 hover:text-white"
                    >
                        <span className="truncate pr-2">{chat.title}</span>
                        <EllipsisHorizontalIcon className="h-4 w-4 flex-shrink-0 text-gray-500" />
                    </Button>
                ))}
             </div>
        </ScrollArea>
      </div>

      {/* User Profile Section with Dropdown */}
      <div className="mt-auto border-t border-gray-700 pt-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex w-full items-center justify-start space-x-3 text-left hover:bg-gray-700/50">
              <Avatar className="h-8 w-8">
                 <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name?.[0]?.toUpperCase() ?? 'U'}</AvatarFallback>
              </Avatar>
              <span className="flex-1 text-sm font-medium text-white">{user.name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 border-gray-700 bg-gray-800 text-gray-200" side="top" align="start">
            {/* Replicate menu items from Image 5 */}
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <UserCircleIcon className="mr-2 h-4 w-4" />
               <span>Your Details</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <Cog6ToothIcon className="mr-2 h-4 w-4" />
               <span>Account settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700"/>
             <DropdownMenuLabel className="px-2 py-1.5 text-xs text-gray-500">Intercom</DropdownMenuLabel> 
             <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <BriefcaseIcon className="mr-2 h-4 w-4" />
               <span>Job listings</span>
            </DropdownMenuItem>
             <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <IdentificationIcon className="mr-2 h-4 w-4" />
               <span>Company profile</span>
            </DropdownMenuItem>
             <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <UsersIcon className="mr-2 h-4 w-4" />
               <span>Team management</span>
            </DropdownMenuItem>
             <DropdownMenuItem className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:text-white">
               <WrenchScrewdriverIcon className="mr-2 h-4 w-4" />
               <span>Admin settings</span>
            </DropdownMenuItem>
             <DropdownMenuSeparator className="bg-gray-700"/>
            <DropdownMenuItem 
                className="cursor-pointer text-red-400 hover:bg-red-900/50 focus:bg-red-900/50 focus:text-red-300"
                onClick={handleSignOut}
            >
               <ArrowLeftStartOnRectangleIcon className="mr-2 h-4 w-4" />
               <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
} 