import { useMemo } from "react";

import { ContactType, Info } from "@/api/info";
import { getAvatarUrl } from "@/api/_client";

export type UseAvatarHook = [string | undefined, string];

export default function useAvatar(info: Info): UseAvatarHook {
  return useMemo(() => {
    const { fullName, contacts } = info;
    const initials = fullName.split(' ').map(name => name.at(0)?.toUpperCase()).join(' ');
    const gravatar = contacts.find(({ type }) => ContactType.kGravatar == type);

    return gravatar 
      ? [getAvatarUrl(gravatar.internalId, 256), initials]
      : [undefined, initials];
  }, [info]);
}