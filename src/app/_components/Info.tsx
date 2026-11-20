import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Text
} from "@radix-ui/themes";

import { getInfo } from "@/api/info";
import InfoContacts from "@/app/_components/Info/Contacts";
import InfoAvatar from "@/app/_components/Info/InfoAvatar";

export default async function Info() {
  'use cache';  
  const info = await getInfo();

  return (
    <Box id="about">
      <Card size="3">
        <Flex
          direction={{ initial: "column", sm: "row" }}
          align={{ initial: "start", sm: "center" }}
          gap="5"
        >
          <InfoAvatar info={info} />
          <Flex direction="column" gap="2" flexGrow="1">
            <Heading size="7">
              {info.fullName}
            </Heading>
            <Heading
              size="4"
              weight="medium"
              color="gray"
            >
              {info.title}
            </Heading>
            <Text color="gray" size="2">
              {info.location}
            </Text>
            <Flex align="center" gap="2">
              <Badge color="teal" variant="soft">
                {info.extra}
              </Badge>
            </Flex>
            <Separator size="4" my="2" />
            <Flex gap="3" wrap="wrap">
              <InfoContacts contacts={info.contacts} />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
}