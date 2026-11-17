import { createApi } from "@/api/_client";

export type Seo = {
  title: string;
  description: string;
  keywords: string;
}

export const seoApi = createApi<Seo>('seo');