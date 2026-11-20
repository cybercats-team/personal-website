'use server';

import { createApi } from "@/api/_client";

export enum ContactType {
  kUnspecified = "",
  kEmail       = "email",
  kPhone       = "phone",
  kLinkedIn    = "linkedin",
  kUpWork      = "upwork",
  kGitHub      = "github",
  kTelegram    = "telegram",
  kViber       = "viber",
  kGravatar    = "gravatar",
  kGoogleMeet  = "calendly"
}

export type InfoContact = {
  id: number;
  type: ContactType;
  account: string;
  url: string;
  internalId: string;
};

export type Info = {
  id: number;
  fullName: string;
  title: string;
  location: string;
  extra: string;
  contacts: InfoContact[];
}

const infoApi = createApi<Info>('info');

export async function getInfo(): Promise<Info> {
  return infoApi.get('/');
}
