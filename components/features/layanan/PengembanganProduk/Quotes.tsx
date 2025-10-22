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
} from "@/components/ui";

const QUOTES = [
  {
    quote:
      "Kerja sama dengan tim ini telah membawa produk kami ke level berikutnya. Solusi inovatif dan pendekatan profesional mereka benar-benar membantu kami menciptakan produk yang diminati pasar.",
    author: "IRWAN HELMI",
    title: "CEO WelcomeDrink",
  },
  {
    quote:
      "Kami sangat terkesan dengan kualitas layanan pengembangan produk yang diberikan. Prosesnya efisien, komunikatif, dan hasil akhirnya melampaui ekspektasi kami. Produk kosmetik kami kini jadi primadona di pasar.",
    author: "EHSIHARUN",
    title: "CEO Goodness Green Farm",
  },
  {
    quote: `Tim ini memahami visi kami dengan sangat baik dan mengubahnya menjadi produk yang tidak hanya fungsional, tetapi juga memiliki daya tarik estetika. 210 Club berhasil menonjol di industri berkat inovasi ini.`,
    author: "ZENI DAHLAN",
    title: "CEO 210 Club",
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
