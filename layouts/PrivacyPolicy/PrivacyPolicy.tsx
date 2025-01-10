import { ComponentProps } from "react";
import { Container } from "@/lib/ui";
import { 
  Heading, 
  Box, 
  MDXRenderer 
} from "@/lib/ui";

type Props = {
  markdown: ComponentProps<typeof MDXRenderer>["markdown"];
};

export function PrivacyPolicyLayout({ markdown }: Props) {
  return (
    <>
      <Box
        as="article"
        pt={{
          base: 8,
          md: 24,
        }}
        pb={{
          base: "100px",
          md: "200px",
        }}
        mx="auto"
        w="100%"
      >
        <Container
          maxW="container.sm"
          px={{
            base: 3,
            md: 0,
          }}
        >
          <Heading as="h1" size="2xl" my="8" fontWeight="medium">
            Kebijakan Privasi
          </Heading>
          <Box mb={16}>
            <MDXRenderer markdown={markdown} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
