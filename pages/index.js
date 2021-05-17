import Section from "@/components/section";
import SocialLinks from "@/components/social-links";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import PageTransition from "../components/page-transitions";

const Home = () => (
  <Box>
    <PageTransition>
      <VStack spacing={12}>
        <Section>
          <VStack spacing={4} align="start" fontSize="2xl">
            <Heading size="xl">Hey, I'm Eloy 👋</Heading>
            <VStack>
              <Text>
                I'm an almost-successful entrepreneur. Passionate of new
                technologies and software engineering. Learning about stoicism,
                minimalism, finance, data science and more...
              </Text>
            </VStack>
            <SocialLinks />
          </VStack>
        </Section>
      </VStack>
    </PageTransition>
  </Box>
);

export function getStaticProps() {
  const projects = [];

  return {
    props: {
      projects
    },
    revalidate: 600
  };
}

export default Home;
