'use server';

import { createApi } from "./_client";

export type SectionPoint = {
  id: number;
  content: string;
};

export type SectionType = {
  id: string;
  title: string;
  points: SectionPoint[];
};

const sectionApi = createApi<SectionType>('section');

export async function getSections(): Promise<SectionType[]> {
  return sectionApi.get();
}
