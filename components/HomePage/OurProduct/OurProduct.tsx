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
import Packaging from "@/assets/Homepage/OurProduct/packaging.jpg";
import Maklon from "@/assets/Homepage/OurProduct/maklon.jpg";

const messages = defineMessages({
  title: {
    id: "OurProduct.title",
    defaultMessage: "Produk Kami",
  },
  subTitle: {
    id: "OurProduct.subTitle",
    defaultMessage:
      "Sleep Walker menyediakan produk berkualitas tinggi dalam divisi Jersey, Kemasan, Clothing, dan Maklon Kosmetik. Produk-produk kami dirancang dengan fokus pada kualitas, kenyamanan, dan fungsionalitas, memastikan solusi yang sesuai untuk berbagai kebutuhan Anda.",
  },

  jerseyTitle: {
    id: "OurProduct.title",
    defaultMessage: "Divisi Jersey dan Clothing",
  },
  jerseyDescription: {
    id: "OurProduct.description",
    defaultMessage:
      "Create your own unique design with our high-quality custom jerseys, tailored to your style and needs.",
  },
  jerseyLink: {
    id: "OurProduct.jerseyLink",
    defaultMessage: "Selengkapnya",
  },

  kemasanTitle: {
    id: "OurProduct.kemasanTitle",
    defaultMessage: "Divisi Kemasan",
  },
  kemasanDescription: {
    id: "OurProduct.kemasanDescription",
    defaultMessage:
      "Choose from our ready-stock jerseys, featuring stylish designs and available for immediate purchase.",
  },
  kemasanLink: {
    id: "OurProduct.kemasanLink",
    defaultMessage: "Selengkapnya",
  },

  clothingTitle: {
    id: "OurProduct.clothingTitle",
    defaultMessage: "Divisi Clothing",
  },
  clothingDescription: {
    id: "OurProduct.clothingDescription",
    defaultMessage:
      "Choose from our ready-stock jerseys, featuring stylish designs and available for immediate purchase.",
  },
  clothingLink: {
    id: "OurProduct.clothingLink",
    defaultMessage: "Selengkapnya",
  },

  maklonTitle: {
    id: "OurProduct.maklonTitle",
    defaultMessage: "Maklon Kosmetik",
  },
  maklonDescription: {
    id: "OurProduct.maklonDescription",
    defaultMessage:
      "Choose from our ready-stock jerseys, featuring stylish designs and available for immediate purchase.",
  },
  maklonLink: {
    id: "OurProduct.maklonLink",
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
            lg: "1fr 1fr",
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
              href="/produk/jersey-clothing"
              ctaText={formatMessage(messages.jerseyLink)}
              imageSrc={jersey}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.kemasanTitle)}
              description={formatMessage(messages.kemasanDescription)}
              href="/produk/kemasan"
              ctaText={formatMessage(messages.kemasanLink)}
              imageSrc={Packaging}
            />
          </GridItem>

          <GridItem display="flex" alignItems="stretch">
            <ItemCard
              name={formatMessage(messages.maklonTitle)}
              description={formatMessage(messages.maklonDescription)}
              href="/produk/maklon-kosmetik"
              ctaText={formatMessage(messages.maklonLink)}
              imageSrc={Maklon}
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
