import {
  Container,
  Flex,
  Link,
  Text
} from "@radix-ui/themes";

import { getInfo } from "@/api/info";
import FooterContacts from "@/app/_components/Footer/Contacts";
import ScrollToTop from "@/app/_components/Footer/ScrollToTop";

const currentYear = (new Date()).getFullYear();

export default async function Footer() {
  'use cache';
  const info = await getInfo();

  return (
    <Container size="3">
      <Flex
        py="4"
        gap="3"
        align="center"
        justify="between"
        wrap="wrap"
      >
        <Text size="1" color="gray">
          © {currentYear} {info.fullName}.
          &nbsp;
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            size="1"
            color="gray"
          >
            Powered by Vercel
          </Link>
        </Text>
        <Flex align="center" gap="3" wrap="wrap">
          
          <FooterContacts contacts={info.contacts} />
          <ScrollToTop />
        </Flex>
      </Flex>
    </Container>
  )
}