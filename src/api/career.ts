'use server';
import { createApi } from "@/api/_client";

export type ProjectTask = {
  id: number;
  content: string;
}

export type CompanyProject = {
  id: number;
  summary: string;
  role: string;
  stack: string;
  tasks: ProjectTask[];
}

export type Company = {
  id: number;
  title: string;
  timeline: string;
  projects: CompanyProject[];
}

const careerApi = createApi<Company>('career');

export async function getCareer(): Promise<Company[]> {
  return careerApi.get();
}
