import React from 'react';
import Sidebar from './_components/Sidebar';

// This layout wraps the main application pages (chat interface, etc.)
export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <Sidebar />
      {/* Main content area takes remaining space and handles its own scrolling */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {children} {/* Page content will be rendered here */}
      </main>
    </div>
  );
} 