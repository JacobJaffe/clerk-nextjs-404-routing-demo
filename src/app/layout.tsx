import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="w-screen h-screen flex flex-1 flex-col">
          <nav className="border-b border-black w-full max-w-5xl mx-auto p-4">
            <Link href="/" className="underline">
              Link to `/`
            </Link>
          </nav>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
