import { Avatar } from "@radix-ui/themes";

import { Info } from "@/api/info"
import useAvatar from "@/hooks/useAvatar";

export type InfoAvatarProps = {
  info: Info;
}

export default function InfoAvatar({ info }: InfoAvatarProps) {
  const [avatar, fallback] = useAvatar(info);

  return (
    <Avatar
      src={avatar}
      fallback={fallback}
      size="8"
      radius="full"
    />
  )
}