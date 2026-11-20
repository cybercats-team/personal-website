'use server';

import type { Metadata } from "next";
import { createApi } from "@/api/_client";

export type Seo = Pick<Metadata, 'title' | 'description' | 'keywords'>;

const seoApi = createApi<Seo>('seo');

export async function getSeoTags(): Promise<Metadata> {
  const seo = await seoApi.get('/');

  return seo as Metadata;
}
