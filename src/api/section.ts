'use server';

import { createApi } from "@/api/_client";

export type SectionPoint = {
  id: number;  
  content: string;
};

export type SectionType = {
  id: string;
  title: string;
  slug: string;
  points: SectionPoint[];
};

const sectionApi = createApi<SectionType>('section');

export async function getSections(): Promise<SectionType[]> {
  return sectionApi.get();
}
