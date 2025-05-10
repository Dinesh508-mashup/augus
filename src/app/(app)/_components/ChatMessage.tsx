'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Or choose another theme
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from '~/components/ui/button';
import { ClipboardDocumentIcon, ArrowPathIcon, PencilIcon, HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline';
import { cn } from '~/lib/utils';

// Define and export message type here
export type Message = {
  id: string;
  sender: 'user' | 'ai';
  content: string | { code: string; language: string };
  timestamp: Date;
};

interface ChatMessageProps {
    message: Message;
    // Add any necessary handlers for actions (copy, regenerate, etc.)
}

// Placeholder Augus AI Logo Component
const AugusAiLogo = () => (
    // Replace with your actual AI logo SVG or Image component
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-full w-full text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75H19.5M8.25 6.75H19.5M8.25 9.75H19.5M8.25 12.75H19.5M8.25 15.75H19.5M8.25 18.75H19.5M3.75 16.5h.008v.008H3.75V16.5Zm0-3h.008v.008H3.75v-.008Zm0-3h.008v.008H3.75V10.5Zm0-3h.008V7.508H3.75V7.5Zm-.75 4.5h3v3h-3v-3Zm0 3h3v3h-3v-3Zm0 3h3v3h-3v-3Zm0 3h3v3h-3v-3Z" />
    </svg>
);

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    const alignment = isUser ? 'items-end' : 'items-start';
    // Use slightly different background for AI code blocks for better contrast
    const bubbleColor = isUser 
        ? 'bg-indigo-600 text-white' 
        : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100';
    const codeBgColor = 'bg-gray-900 dark:bg-gray-950'; // Specific background for code

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).catch(err => console.error('Failed to copy text: ', err));
        // TODO: Add user feedback (e.g., tooltip or temporary message)
    };

    // TODO: Implement regenerate, edit, feedback handlers

    return (
        <div className={`flex w-full max-w-3xl flex-col gap-1.5 ${alignment}`}>
             {/* Avatar and Message Bubble Row */}
             <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <Avatar className="h-8 w-8 flex-shrink-0 border border-gray-300 dark:border-gray-600">
                    {isUser ? (
                        <AvatarImage src="/user-avatar-placeholder.png" alt="User" /> // Replace with actual user avatar path/logic
                    ) : (
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-black p-1">
                            <AugusAiLogo />
                        </div>
                    )}
                   <AvatarFallback className={cn("uppercase", isUser ? "bg-indigo-100 text-indigo-700" : "bg-gray-600 text-white")}>{isUser ? 'U' : 'A'}</AvatarFallback>
                </Avatar>

                {/* Message Bubble */}
                 <div className={`min-w-0 rounded-lg px-4 py-2.5 ${bubbleColor} ${typeof message.content !== 'string' ? 'p-0' : ''}`}>
                    {typeof message.content === 'string' ? (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    ) : (
                        <div className={`rounded-lg ${codeBgColor} overflow-hidden`}>
                            <div className="flex items-center justify-between bg-gray-700 px-4 py-1.5 text-xs text-gray-300">
                                <span>{message.content.language}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 text-gray-400 hover:bg-gray-600 hover:text-white"
                                    onClick={() => typeof message.content === 'object' && handleCopy(message.content.code)}
                                    disabled={typeof message.content !== 'object'}
                                >
                                    <ClipboardDocumentIcon className="h-4 w-4" />
                                </Button>
                            </div>
                            {
                            typeof message.content === 'object' && (
                                <SyntaxHighlighter
                                    language={message.content.language}
                                    style={atomDark} // Or your preferred theme
                                    customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem' }} // text-sm equivalent padding
                                    codeTagProps={{ style: { fontFamily: 'inherit' } }} // Use default font
                                >
                                    {message.content.code}
                                </SyntaxHighlighter>
                            )
                            }
                        </div>
                    )}
                 </div>
             </div>

             {/* Action Buttons Row (Only for AI messages) */}
             {!isUser && (
                <div className="flex items-center gap-1 pl-11"> {/* Align with bubble start */} 
                    {/* <span className="text-xs text-gray-500">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</span> */}
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" 
                        // Only enable copy for string content here, code block has its own copy button
                        onClick={() => typeof message.content === 'string' && handleCopy(message.content)}
                        disabled={typeof message.content !== 'string'} 
                        title="Copy text"
                    >
                        <ClipboardDocumentIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" title="Regenerate">
                        <ArrowPathIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" title="Edit">
                        <PencilIcon className="h-4 w-4" />
                    </Button>
                    <div className="ml-2 border-l border-gray-300 pl-2 dark:border-gray-600">
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-green-500 dark:text-gray-500 dark:hover:text-green-400" title="Good response">
                            <HandThumbUpIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400" title="Bad response">
                            <HandThumbDownIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
             )}
        </div>
    );
}; 