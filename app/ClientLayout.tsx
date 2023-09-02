"use client";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import NavBar from "./components/NavBar/NavBar";

const endpoint = "https://ssc-dao.genesysgo.net";

const WalletConnectionProvider = dynamic(
  () => import("./provider/ClientWalletProvider"),
  {
    ssr: false,
  }
);
// Create a client
const queryClient = new QueryClient();
// This layout component can be used with React state, context and more as it is a client component.
export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <ConnectionProvider endpoint={endpoint}>
        <WalletConnectionProvider>
          <QueryClientProvider client={queryClient}>
            <div className={"container"}>
              <NavBar />
              {children}
            </div>
          </QueryClientProvider>
        </WalletConnectionProvider>
      </ConnectionProvider>
    </div>
  );
};
