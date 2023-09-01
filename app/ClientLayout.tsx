"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
// This layout component can be used with React state, context and more as it is a client component.
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};
