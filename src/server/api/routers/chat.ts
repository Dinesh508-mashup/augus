import { z } from "zod";

import {
  createTRPCRouter,
  // protectedProcedure, // Temporarily revert to public
  publicProcedure,
} from "~/server/api/trpc";

// Define input schema for sending a message
const sendMessageInput = z.object({
  message: z.string().min(1),
  // Add other relevant inputs like chatId, category, etc. later
});

export const chatRouter = createTRPCRouter({
  sendMessage: publicProcedure // Reverted to publicProcedure temporarily
    .input(sendMessageInput)
    .mutation(async ({ ctx, input }) => {
      // Authentication check is currently handled by middleware.
      // We can add checks here later if needed, e.g., using ctx.user if context is fixed.
      // if (!ctx.user) { throw new TRPCError({ code: "UNAUTHORIZED" }); }

      console.log(`Received message: ${input.message}`);

      // **** AI Integration Placeholder ****
      // Replace this with actual call to your AI service (e.g., OpenAI, Anthropic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      const aiResponseContent = `AI response to: "${input.message}"`;
      // **** End Placeholder ****

      // TODO: Store user message and AI response in the database (e.g., using Drizzle)

      return {
        aiResponse: aiResponseContent,
      };
    }),

    // TODO: Add procedures for fetching chat history, categories, etc.
}); 