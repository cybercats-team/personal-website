'use client';

import {
  Box,
  Container,
  Flex,
  Separator
} from "@radix-ui/themes";

import Career from "@/app/_components/Career";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Info from "@/app/_components/Info";
import Sections from "@/app/_components/Sections";

export default function Home() {
  return (    
      <Box minHeight="100vh">
        <Header />        
        <Container size="3">
          <Flex direction="column" gap="4" py="5">
            <Info />
            <Sections />
            <Career/>
          </Flex>
        </Container>
        <Separator size="4" />
        <Footer />
      </Box>    
  );
}