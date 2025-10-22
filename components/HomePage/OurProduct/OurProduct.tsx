import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { defineMessages, useIntl } from "react-intl";
import Image, { StaticImageData } from "next/image";
import {
  Box,
  Text,
  Container,
  FancyArrowRight,
  Flex,
  HStack,
  ShadowBox,
  Grid,
  GridItem,
  ShadowBoxProps
} from "@/lib/ui";

import jersey from "@/assets/Homepage/OurProduct/jersey.jpg";
import clothing from "@/assets/Homepage/OurProduct/clothing.jpg";

const messages = defineMessages({
  title: {
    id: "OurProduct.title",
    defaultMessage: "Produk Kami",
  },
  subTitle: {
    id: "OurProduct.subTitle",
    defaultMessage:
      "Sleep Walker menyediakan produk clothing berkualitas tinggi dengan berbagai pilihan. Dari jersey olahraga hingga fashion casual, semua dirancang dengan fokus pada kualitas, kenyamanan, dan gaya yang modern.",
  },

  jerseyTitle: {
    id: "OurProduct.jerseyTitle",
    defaultMessage: "Jersey",
  },
  jerseyDescription: {
    id: "OurProduct.jerseyDescription",
    defaultMessage:
      "Jersey futsal dan racing berkualitas tinggi dengan desain custom dan ready stock.",
  },
  jerseyLink: {
    id: "OurProduct.jerseyLink",
    defaultMessage: "Selengkapnya",
  },

  tshirtTitle: {
    id: "OurProduct.tshirtTitle",
    defaultMessage: "T-Shirt",
  },
  tshirtDescription: {
    id: "OurProduct.tshirtDescription",
    defaultMessage:
      "T-shirt polos dan custom dengan bahan berkualitas dan nyaman dipakai.",
  },
  tshirtLink: {
    id: "OurProduct.tshirtLink",
    defaultMessage: "Selengkapnya",
  },

  hoodieTitle: {
    id: "OurProduct.hoodieTitle",
    defaultMessage: "Hoodie",
  },
  hoodieDescription: {
    id: "OurProduct.hoodieDescription",
    defaultMessage:
      "Hoodie polos dan custom dengan bahan premium dan desain trendy.",
  },
  hoodieLink: {
    id: "OurProduct.hoodieLink",
    defaultMessage: "Selengkapnya",
  },

  kemejaTitle: {
    id: "OurProduct.kemejaTitle",
    defaultMessage: "Kemeja",
  },
  kemejaDescription: {
    id: "OurProduct.kemejaDescription",
    defaultMessage:
      "Kemeja formal dan casual dengan berbagai pilihan model dan warna.",
  },
  kemejaLink: {
    id: "OurProduct.kemejaLink",
    defaultMessage: "Selengkapnya",
  },

  jaketTitle: {
    id: "OurProduct.jaketTitle",
    defaultMessage: "Jaket",
  },
  jaketDescription: {
    id: "OurProduct.jaketDescription",
    defaultMessage:
      "Jaket casual dan motor dengan material berkualitas untuk berbagai aktivitas.",
  },
  jaketLink: {
    id: "OurProduct.jaketLink",
    defaultMessage: "Selengkapnya",
  },
});

export function OurProduct() {
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="black"
      py={{
        base: 24,
        lg: 32,
        xl: "150px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container maxW="1000px" textAlign="justify" p={0}>
        <Text as="h2" textStyle="h3" textAlign="center" color="white" mb={8}>
          {formatMessage(messages.title)}
        </Text>
        <Text
          color="#CCC"
          textStyle="lg"
          maxW="40ch"
          margin="0 auto 2rem"
          mb={16}
        >
          {formatMessage(messages.subTitle)}
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
          }}
          gap={{
            base: 6,
            lg: 8,
          }}
          mb="128px"
        >
          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.jerseyTitle)}
              description={formatMessage(messages.jerseyDescription)}
              href="/produk/jersey"
              ctaText={formatMessage(messages.jerseyLink)}
              imageSrc={jersey}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.tshirtTitle)}
              description={formatMessage(messages.tshirtDescription)}
              href="/produk/t-shirt"
              ctaText={formatMessage(messages.tshirtLink)}
              imageSrc={clothing}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.hoodieTitle)}
              description={formatMessage(messages.hoodieDescription)}
              href="/produk/hoodie"
              ctaText={formatMessage(messages.hoodieLink)}
              imageSrc={clothing}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.kemejaTitle)}
              description={formatMessage(messages.kemejaDescription)}
              href="/produk/kemeja"
              ctaText={formatMessage(messages.kemejaLink)}
              imageSrc={clothing}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.jaketTitle)}
              description={formatMessage(messages.jaketDescription)}
              href="/produk/jaket"
              ctaText={formatMessage(messages.jaketLink)}
              imageSrc={clothing}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

function FancyLink({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  return (
    <Flex
      data-as="link"
      display="flex"
      alignItems="center"
      gap={2}
      pb={2}
      mb={6}
      position="relative"
      color={color}
    >
      <Text textStyle="sm">{children}</Text>
      <Box transform="scale(0.7)">
        <FancyArrowRight />
      </Box>
      <Box
        w="0%"
        h="2px"
        bg="currentColor"
        position="absolute"
        bottom="0"
        left="0"
        transition="width 0.15s ease-in-out"
      />
    </Flex>
  );
}

type ItemCardProps = {
  name: string;
  description: string;
  href?: string;
  ctaText: string;
  imageSrc: StaticImageData;
  imageContainerProps?: ComponentProps<typeof HStack>;
} & Omit<ShadowBoxProps, "children">;

function ItemCard({
  name,
  description,
  href,
  ctaText,
  imageSrc,
  imageContainerProps,
  ...rest
}: ItemCardProps) {
  const isLink = !!href;
  const linkProps = isLink
    ? {
        as: Link,
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noreferrer" : undefined,
      }
    : null;

  return (
    <ShadowBox
      {...linkProps}
      bg="#242424"
      borderColor="#3B3B3B"
      shadowColor="#242424"
      borderRadius="10px"
      pt={16}
      px={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      containerProps={{
        maxWidth: {
          base: "480px",
          lg: "100%",
        },
        margin: "0 auto",
        _hover: {
          "& > *": {
            borderColor: "white",
            transition: "border 0.15s ease-in-out",
          },
          "[data-as=link] > div:last-child": {
            w: "100%",
          },
        },
      }}
      {...rest}
    >
      <Text mb={8} as="h3" textStyle="h4" color="white">
        {name}
      </Text>
      <Text color="white" textStyle="md" mb={8}>
        {description}
      </Text>
      {isLink ? (
        <FancyLink color="pink.400">{ctaText}</FancyLink>
      ) : (
        <Box mb={8} bg="#2F3A1F" borderRadius="4px">
          <Text px={6} py={2} color="#C7F182">
            {ctaText}
          </Text>
        </Box>
      )}

      <HStack flexGrow={1} alignItems="flex-end" {...imageContainerProps}>
        <Image src={imageSrc} alt={name} />
      </HStack>
    </ShadowBox>
  );
}
