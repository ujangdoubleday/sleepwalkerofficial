import { ReactNode } from "react";
import Link from "next/link";
import {
  Box,
  Grid,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox,
  Flex,
  FancyArrowRight
} from "@/lib/ui";

import { Decentralized } from "@/assets/Homepage/WhySleepWalker/Decentralized";
import { Handshake } from "@/assets/Homepage/WhySleepWalker/Handdhake";
import { Lock } from "@/assets/Homepage/WhySleepWalker/Lock";

const sections = [
  {
    heading: "Jaminan Kualitas",
    description:
      "Kami mengutamakan bahan terbaik dan pengerjaan yang unggul dalam setiap produk.",
    image: <Lock />,
  },
  {
    heading: "Pilihan Kustomisasi",
    description:
      "Solusi yang dirancang khusus untuk memenuhi kebutuhan dan preferensi unik Anda..",
    image: <Decentralized />,
  },
  {
    heading: "Layanan Andal",
    description: (
      <Grid gap={4}>
        <Text>
          Dukungan penuh untuk memastikan pengalaman yang lancar dari awal
          hingga akhir.
        </Text>
        <Flex
          w="fit-content"
          as={Link}
          href="/portofolio/mengapa-kami"
          display="flex"
          alignItems="center"
          gap={2}
          pb={2}
          position="relative"
          color="#c54ade"
          _hover={{
            '[data-name="link-underline"]': {
              width: "100%",
            },
          }}
        >
          <Text>Selengkapnya.</Text>
          <Box transform="scale(0.7)">
            <FancyArrowRight />
          </Box>
          <Box
            data-name="link-underline"
            w="0%"
            h="2px"
            bg="currentColor"
            position="absolute"
            bottom="0"
            left="0"
            transition="width 0.15s ease-in-out"
          />
        </Flex>
      </Grid>
    ),
    image: <Handshake />,
  },
];

export function WhySleepWalker() {
  return (
    <Box
      pl={{
        base: 0,
        md: 8,
        lg: 3,
        xl: 20,
      }}
    >
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
      >
        <StickySideBySideView>
          <StickySideBySideView.Item>
            <Text textStyle="h3">Mengapa Memilih Kami?</Text>
          </StickySideBySideView.Item>
          <StickySideBySideView.Item>
            {sections.map((section, i, arr) => {
              return (
                <Section
                  key={i}
                  heading={section.heading}
                  description={section.description}
                  image={section.image}
                  number={i + 1}
                  totalItems={arr.length}
                />
              );
            })}
          </StickySideBySideView.Item>
        </StickySideBySideView>
      </Container>
    </Box>
  );
}

type SectionProps = {
  heading: string;
  description: string | ReactNode;
  image: ReactNode;
  number: number;
  totalItems: number;
};

function Section({
  heading,
  description,
  image,
  number,
  totalItems,
}: SectionProps) {
  return (
    <Box mb={8}>
      <Box
        maxW={{
          base: "100%",
          md: "450px",
        }}
      >
        <ShadowBox p={12}>
          <Box
            borderRadius="full"
            bg="purple.500"
            display="inline-block"
            px={3}
            py={1}
            mb={32}
          >
            <Text fontSize="xs" color="black">
              {number} / {totalItems}
            </Text>
          </Box>
          <Box mb={10}>{image}</Box>
          <Text textStyle="h4" mb={5}>
            {heading}
          </Text>
          {typeof description === "string" ? (
            <Text>{description}</Text>
          ) : (
            description
          )}
        </ShadowBox>
      </Box>
    </Box>
  );
}
