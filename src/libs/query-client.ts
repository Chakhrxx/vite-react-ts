// src/libs/query-client.ts
import { QueryClient } from "react-query"; // necessary QueryClient from react-query

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Number of times to retry a failed query
      refetchOnWindowFocus: false, // Disable refetching when the window gains focus
    },
  },
});
