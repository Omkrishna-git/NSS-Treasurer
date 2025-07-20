import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "PICT NSS Treasurer", // Unique app ID
  name: "PICT NSS Treasurer",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
