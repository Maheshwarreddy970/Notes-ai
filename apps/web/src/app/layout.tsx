import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import Provider from "../components/Provider";


export const metadata: Metadata = {
  title: "noets-ai",
  description: "create notes with ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <Provider>
          <body>{children}</body>
        </Provider>
      </html>
    </ClerkProvider>
  );
}
