'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
import { ScrollArea } from "~/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { cn } from '~/lib/utils';
import {
    PaperAirplaneIcon, PaperClipIcon, MicrophoneIcon, SparklesIcon,
    ArrowUpCircleIcon, ClipboardDocumentIcon, ArrowPathIcon, PencilIcon,
    HandThumbUpIcon, HandThumbDownIcon
} from '@heroicons/react/24/outline';
import { ChatMessage, type Message } from './ChatMessage';
import { api } from "~/trpc/react";

const AugusWavyLogo = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("h-10 w-10 text-gray-700 dark:text-gray-300", className)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5Zm0 7.5c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm9 .375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Zm-4.875-3.75a.375.375 0 0 1 .375-.375h4.5a.375.375 0 0 1 .375.375v4.5a.375.375 0 0 1-.375.375h-4.5a.375.375 0 0 1-.375-.375v-4.5Z" />
    </svg>
);

const categories = ['General', 'Sales', 'Negotiation', 'Marketing'];

const suggestionCards = [
  {
    title: 'Sales Strategies',
    description: 'Get advice on situs or increasing prospects, handle objections effectively.',
    icon: SparklesIcon // Example icon
  },
  {
    title: 'Negotiation Tactics',
    description: 'Learn expert negotiation tips to close deals confidently.',
    icon: SparklesIcon
  },
  {
    title: 'Marketing Insights',
    description: 'Discover the best marketing strategies to promote your proposition.',
    icon: SparklesIcon
  },
  {
    title: 'General Support',
    description: 'Have something else you? Ask away, and well guide you.',
    icon: SparklesIcon
  },
];

// Mock messages based on Image 4
const initialMessages: Message[] = [
  // ... mock message data ...
   {
    id: '1',
    sender: 'user',
    content: 'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
    timestamp: new Date(Date.now() - 60000 * 5), // 5 minutes ago
  },
  {
    id: '2',
    sender: 'ai',
    content: {
      code: `let cancelButton = document.getElementById("cancel-button");\nlet sendButton = document.getElementById("send-button");\n\ncancelButton.addEventListener("click", function() {\n  console.log("Cancel button clicked");\n});\n\nsendButton.addEventListener("click", function() {\n  // Handle form submission\n});`,
      language: 'javascript'
    },
    timestamp: new Date(Date.now() - 60000 * 4), // 4 minutes ago
  },
   {
    id: '3',
    sender: 'ai',
    content: 'Note: This is just an example of a simple HTML form. In a real-world scenario, you would also want to include proper validation and handling of the form data on the server side.',
    timestamp: new Date(Date.now() - 60000 * 3), // 3 minutes ago
  },
];


export default function ChatArea() {
  // ... state definitions ...
  const [activeCategory, setActiveCategory] = useState('General');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const scrollAreaRef = useRef<HTMLDivElement>(null);


   // tRPC mutation hook
  const sendMessageMutation = api.chat.sendMessage.useMutation({
    onSuccess: (data) => {
      // Add AI response to messages state
      const aiResponse: Message = {
        id: crypto.randomUUID(),
        sender: 'ai',
        content: data.aiResponse, // Assuming aiResponse is string
        timestamp: new Date(),
      };
      // Ensure type safety when updating state
      setMessages((prevMessages: Message[]): Message[] => [...prevMessages, aiResponse]);
    },
    onError: (error) => {
      console.error("Error sending message:", error);
      const errorResponse: Message = {
        id: crypto.randomUUID(),
        sender: 'ai',
        content: `Error: ${error.message}`,
        timestamp: new Date(),
      };
      // Ensure type safety when updating state
      setMessages((prevMessages: Message[]): Message[] => [...prevMessages, errorResponse]);
    }
  });

  // ... (useEffect remains the same) ...
  useEffect(() => {
    // TODO: Implement smooth scrolling or better scroll logic if needed
    if (scrollAreaRef.current) {
        const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if(scrollViewport) {
            scrollViewport.scrollTop = scrollViewport.scrollHeight;
        }
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    const newUserMessage: Message = {
        id: crypto.randomUUID(),
        sender: 'user',
        content: trimmedMessage,
        timestamp: new Date(),
    };

    // Ensure type safety when updating state
    setMessages((prevMessages: Message[]): Message[] => [...prevMessages, newUserMessage]);
    setMessage('');

    sendMessageMutation.mutate({ message: trimmedMessage });
  };

  // ... (Return statement with JSX remains the same) ...
  return (
    <div className="flex h-full flex-1 flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-950">
      {/* ... (Top Bar remains the same) ... */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3 dark:border-gray-700">
        <div className="flex items-center space-x-1 rounded-full bg-gray-200 p-1 dark:bg-gray-800">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-4 py-1 text-sm font-medium transition-colors duration-150 hover:bg-gray-300/70 dark:hover:bg-gray-700/70',
                activeCategory === category
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-gray-600 dark:text-gray-400'
              )}
            >
              {category}
            </Button>
          ))}
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
           <SparklesIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* ... (Main Content Area remains the same, mapping messages) ... */}
       <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
         <div className="mx-auto max-w-3xl space-y-6">
          {messages.length === 0 ? (
            // Welcome State - unchanged
             <div className="text-center pt-8">
                <AugusWavyLogo className="mx-auto mb-4" />
                <h1 className="mb-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">Augus</h1>
                <h2 className="mb-3 text-2xl font-medium text-gray-800 dark:text-gray-200">How can we <span className="text-indigo-500">assist</span> you today?</h2>
                <p className="mb-8 max-w-lg text-sm text-gray-600 dark:text-gray-400 mx-auto">Get expert guidance powered by AI agents specializing in Sales, Marketing, and Negotiation. Choose the agent that suits your needs and start your conversation with ease.</p>
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {suggestionCards.map((card, index) => (
                        <Card key={index} className="cursor-pointer border-gray-200 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:bg-gray-700/70">
                            <CardHeader>
                                <div className="mb-3 flex justify-end">
                                    <card.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                </div>
                                <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100">{card.title}</CardTitle>
                                <CardDescription className="text-xs text-gray-600 dark:text-gray-400">{card.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
             </div>
          ) : (
            // Chat History State
            messages.map((msg: Message) => (
               // Use imported ChatMessage with explicit type
               <ChatMessage key={msg.id} message={msg} />
            ))
          )}
          </div>
      </ScrollArea>

      {/* ... (Bottom Input Bar remains the same) ... */}
       <div className="border-t border-gray-200 bg-white/50 p-4 backdrop-blur-sm dark:border-gray-700 dark:bg-black/50">
        <form onSubmit={handleSendMessage} className="relative mx-auto max-w-3xl">
           <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-white disabled:opacity-50" disabled={sendMessageMutation.isPending}>
             <PaperClipIcon className="h-5 w-5" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type your prompt here"
            className="w-full rounded-full border-gray-300 bg-gray-100 py-6 pl-10 pr-28 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 disabled:opacity-70"
            disabled={sendMessageMutation.isPending}
          />
          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 space-x-1">
             <Button variant="ghost" size="icon" className="text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-white disabled:opacity-50" disabled={sendMessageMutation.isPending}>
                 <MicrophoneIcon className="h-5 w-5" />
             </Button>
             <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="text-indigo-500 transition-colors hover:text-indigo-700 disabled:opacity-50 disabled:hover:text-indigo-500"
                disabled={!message.trim() || sendMessageMutation.isPending}
              >
                {sendMessageMutation.isPending ? (
                    <svg className="h-6 w-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <ArrowUpCircleIcon className="h-6 w-6" />
                )}
             </Button>
          </div>
        </form>
      </div>
    </div>
  );

}
