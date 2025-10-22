import Image from "next/image";
import { defineMessages, useIntl } from "react-intl";
import {
  Heading,
  Grid,
  Box,
  Text,
  GridItem,
  Container,
  AspectRatio,
  Flex,
} from "@/components/ui";

const messages = defineMessages({
  heading: {
    id: "Hero.heading",
    defaultMessage: "Sleep Walker",
  },
  description: {
    id: "Hero.description",
    defaultMessage:
      "Tidur mengembalikan jiwa, menggerakkan mimpi, dan memberi energi untuk masa depan yang lebih cerah.",
  },
  getStarted: {
    id: "Hero.getStarted",
    defaultMessage: "Get Started",
  },
});

export function Hero() {
  const { formatMessage } = useIntl();

  return (
    <Container
      maxW={{
        base: "704px",
        lg: "1600px",
      }}
      w="100%"
      p={{
        base: "64px 24px",
        lg: "64px",
        "2xl": "96px",
      }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "auto minmax(50%, 1fr)",
        }}
        w="100%"
        gap={{
          base: "4rem",
          lg: "2rem",
          xl: "70px",
        }}
      >
        <GridItem display="flex" alignItems="center">
          <Box
            maxWidth={{
              xl: "500px",
              "2xl": "100%",
            }}
          >
            <Heading
              as="h1"
              fontSize={{
                base: "3.5rem",
                "2xl": "4.375rem",
              }}
              mb={6}
            >
              {formatMessage(messages.heading)}
            </Heading>
            <Text
              textAlign={"justify"}
              textStyle="lg"
              mb={8}
              maxWidth={{
                base: "40ch",
                lg: "100%",
              }}
            >
              {formatMessage(messages.description)}
            </Text>
            <Flex
              gap={4}
              flexDirection={{
                base: "column",
                md: "row",
              }}
              alignItems={{
                base: "stretch",
                lg: "center",
              }}
            ></Flex>
          </Box>
        </GridItem>
        <GridItem
          position="relative"
          display="flex"
          alignItems={{
            base: "center",
            lg: "flex-start",
            xl: "center",
          }}
        >
          <Box width="100%">
            <AspectRatio position="relative" ratio={657 / 424}>
              <Image
                priority
                src="/images/home/hero.jpg"
                alt=""
                style={{ objectFit: "contain" }}
                fill
              />
            </AspectRatio>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
