import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  FancyArrowRight,
  useBreakpointValue,
  Text,
  HStack,
  Flex,
} from "@/lib/ui";

const QUOTES = [
  {
    quote:
      "Kami akhirnya bisa mewujudkan produk berkualitas tinggi berkat tim yang memahami kebutuhan kami.",
    author: "IRWAN HELMI",
    title: "CEO WelcomeDrink",
  },
  {
    quote:
      "Strategi digital yang dirancang membuat kami menjangkau lebih banyak pelanggan dengan cara yang kreatif dan efektif.",
    author: "EHSIHARUN",
    title: "CEO Goodness Green Farm",
  },
  {
    quote:
      "Pengembangan produk menjadi lebih efisien dan tepat sasaran dengan dukungan profesional yang diberikan.",
    author: "ZENI DAHLAN",
    title: "CEO 210 Club",
  },
  {
    quote:
      "Dengan pendekatan pemasaran yang terukur, brand kami tumbuh lebih cepat dari yang kami bayangkan.",
    author: "ANONYMOUS",
    title: "Owner GREES Collection",
  },
  {
    quote:
      "Inovasi dan kualitas adalah prioritas mereka—hasilnya produk kami menjadi unggulan di pasar.",
    author: "ANONYMOUS",
    title: "Owner B.N.G.K",
  },
  {
    quote:
      "Taktik pemasaran digital yang ditawarkan sangat membantu meningkatkan brand awareness sekaligus penjualan.",
    author: "ANONYMOUS",
    title: "Owner Madu Hidayah",
  },
  {
    quote:
      "Kolaborasi yang kami bangun tidak hanya menghasilkan produk, tetapi juga strategi yang memikat pasar.",
    author: "ANONYMOUS",
    title: "Owner Dust Street",
  },
  {
    quote:
      "Pendekatan berbasis data memastikan kampanye kami selalu relevan dengan target pasar.",
    author: "ANONYMOUS",
    title: "Owner Salls",
  },
  {
    quote:
      "Setiap tahap pengembangan terasa terarah, membuat kami lebih percaya diri meluncurkan produk baru.",
    author: "ANONYMOUS",
    title: "CEO Cipta Sarana Kenayu Lestari",
  },
  {
    quote:
      "Pemasaran digital kami kini lebih strategis dan menghasilkan hasil yang nyata, dari eksposur hingga konversi.",
    author: "ANONYMOUS",
    title: "CEO CV. Madu Apiari Mutiara",
  },
];

export function Quotes() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const buttonSize = useBreakpointValue({ base: "48px", md: "67px" });

  const onNextClick = useCallback(() => {
    setQuoteIndex((index) => (index + 1) % QUOTES.length);
  }, []);

  const onBackClick = useCallback(() => {
    setQuoteIndex((index) => (index - 1 + QUOTES.length) % QUOTES.length);
  }, []);

  return (
    <Box bg="black" borderY="1.5px solid black" color="white">
      <Container
        maxW="container.2xl"
        py={{
          base: "4rem",
          md: "8rem",
          lg: "9rem",
        }}
      >
        <Box>
          <Text textStyle="h5" mb={8}>
            &ldquo;{QUOTES[quoteIndex].quote}&rdquo;
          </Text>
          <Text textStyle="lg">{QUOTES[quoteIndex].author}</Text>
          <Text textStyle="md">{QUOTES[quoteIndex].title}</Text>
        </Box>
        <Flex mt={16} justifyContent="center">
          <Button
            bg="white"
            height={buttonSize}
            width={buttonSize}
            minWidth={buttonSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            p={0}
            onClick={onBackClick}
          >
            <Box position="absolute" transform="rotate(180deg)">
              <FancyArrowRight />
            </Box>
          </Button>
          <HStack
            mx={{
              base: 6,
              md: 10,
            }}
            gap={2}
          >
            {Array.from({ length: QUOTES.length }).map((_, index) => (
              <Indicator key={index} active={index === quoteIndex} />
            ))}
          </HStack>
          <Button
            bg="white"
            height={buttonSize}
            width={buttonSize}
            minWidth={buttonSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            p={0}
            onClick={onNextClick}
          >
            <Box position="absolute">
              <FancyArrowRight />
            </Box>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

function Indicator({ active }: { active?: boolean }) {
  return (
    <Box
      border="1.5px solid black"
      borderRadius="full"
      height="24px"
      width="24px"
      bg={active ? "white" : "grey"}
    />
  );
}
