import "@radix-ui/themes/styles.css";
import type { Metadata, ResolvingMetadata } from "next";
import AppearanceProvider from "@/app/_providers/appearance";
import { seoApi } from "@/api/seo";

export async function generateMetadata(_: unknown, __: ResolvingMetadata): Promise<Metadata> {
  const seo = await seoApi.get();

  return seo as Metadata;
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
