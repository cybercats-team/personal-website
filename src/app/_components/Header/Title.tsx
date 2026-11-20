import { getInfo } from '@/api/info';
import { Text } from '@radix-ui/themes';

export default async function Title() {
  'use cache';
  const { fullName } = await getInfo();

  return (
    <Text weight="bold" size="3">
      {fullName}
    </Text>
  )
}
