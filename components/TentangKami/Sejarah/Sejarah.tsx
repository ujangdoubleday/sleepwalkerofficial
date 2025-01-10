import { ReactNode } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  StickySideBySideView,
  ShadowBox
} from "@/lib/ui";

import Hiji from "@/assets/TentangKami/Sejarah/hiji.jpg";
import Dua from "@/assets/TentangKami/Sejarah/dua.jpg";
import Tilu from "@/assets/TentangKami/Sejarah/tilu.jpg";
import Opat from "@/assets/TentangKami/Sejarah/opat.jpg";
import Lima from "@/assets/TentangKami/Sejarah/lima.jpg";
import Genep from "@/assets/TentangKami/Sejarah/genep.jpg";

const sections = [
  {
    figure: (
      <Box>
        <Image src={Hiji} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    figure: (
      <Box>
        <Image src={Dua} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    figure: (
      <Box>
        <Image src={Tilu} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    figure: (
      <Box>
        <Image src={Opat} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    figure: (
      <Box>
        <Image src={Lima} alt="Logo Margins" />
      </Box>
    ),
  },
  {
    figure: (
      <Box>
        <Image src={Genep} alt="Logo Margins" />
      </Box>
    ),
  },
];

export function Sejarah() {
  return (
    <Box bg="darkBrown.400" borderY="2px solid black">
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
        pr={{
          base: 3,
          md: 8,
        }}
        pl={{
          lg: "40px",
          xl: "64px",
          "2xl": "128px",
        }}
      >
        <StickySideBySideView>
          <StickySideBySideView.Item>
            <Text textStyle="h3" mb={8} color="#3E2723">
              History Project
            </Text>
            <Text textStyle="lg" color="#3E2723" textAlign="justify">
              Berdiri sejak November 2024, berawal dari ide sederhana yang kini
              berkembang menjadi pemimpin di Marketing dan Sales, dengan inovasi
              dan layanan yang terus memberi dampak positif.{" "}
            </Text>
          </StickySideBySideView.Item>
          <StickySideBySideView.Item>
            {sections.map((section, i) => (
              <Section key={i} figure={section.figure} />
            ))}
          </StickySideBySideView.Item>
        </StickySideBySideView>
      </Container>
    </Box>
  );
}

type SectionProps = {
  figure?: ReactNode;
};

function Section({ figure }: SectionProps) {
  return (
    <Box mb={1}>
      <ShadowBox p={0} shadowColor="darkBrown.900" width="100%">
        {figure}
      </ShadowBox>
    </Box>
  );
}
