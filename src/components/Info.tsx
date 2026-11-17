import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Text
} from "@radix-ui/themes";

import { getInfo } from "@/api/info";
import InfoContacts from "@/components/Info/Contacts";

export default function Info() {
  const info = getInfo();

  return (
    <Box id="about">
      <Card size="3">
        <Flex
          direction={{ initial: "column", sm: "row" }}
          align={{ initial: "start", sm: "center" }}
          gap="5"
        >
          <Avatar
            src={undefined}
            fallback="OS"
            size="8"
            radius="full"
          />
          <Flex direction="column" gap="2" flexGrow="1">
            <Heading size="7">
              Oleksii Serdiukov
            </Heading>
            <Heading
              size="4"
              weight="medium"
              color="gray"
            >
              Senior Software Developer, Team lead, Architect
            </Heading>
            <Text color="gray" size="2">
              Ukraine, Kyiv region, Boiarka
            </Text>
            <Flex align="center" gap="2">
              <Badge color="teal" variant="soft">
                English: Upper-Intermediate
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