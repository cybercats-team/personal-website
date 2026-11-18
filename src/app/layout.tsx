import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import AppearanceProvider from "@/app/_providers/AppearanceProvider";
import { getSeoTags } from "@/api/seo";

export async function generateMetadata(): Promise<Metadata> {
  'use cache'
  
  return getSeoTags();
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <AppearanceProvider>{children}</AppearanceProvider>          
      </body>
    </html>
  );
}
