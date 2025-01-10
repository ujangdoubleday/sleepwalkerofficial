import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import { useMemo, useState } from "react";
import { useIsClient } from "usehooks-ts";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  ShadowBox,
  ArrowButton,
  Filter,
  useFilterOptions,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio
} from "@/lib/ui";

import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { BAJU, BAJU_TYPES } from "@/content/produk/jersey-and-clothing";

const filterOptions = [
  {
    label: "Semua",
    value: "all",
  },
].concat(
  BAJU_TYPES.map((type) => ({
    label: type,
    value: kebabCase(type),
  }))
);

function Cards() {
  const { query, replace } = useRouter();
  const defaultOption = useMemo(() => {
    if (query.category && typeof query.category === "string") {
      return filterOptions.find((option) => option.value === query.category);
    }
  }, [query]);

  const { options, selectedOption, handleFilterChange } = useFilterOptions(
    filterOptions,
    defaultOption
  );

  const filteredOptions = BAJU.filter((item) =>
    selectedOption.value === "all"
      ? true
      : kebabCase(item.type) === selectedOption.value
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <Filter
        options={options}
        selectedOption={selectedOption}
        onChange={(option) => {
          handleFilterChange(option);
          replace(
            {
              query: {
                ...query,
                category: option.value,
              },
            },
            undefined,
            {
              shallow: true,
            }
          );
        }}
        mb={16}
      />
      <Grid
        templateColumns={{
          base: "100%",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {filteredOptions.map((item) => (
          <GridItem key={item.name} display="flex">
            <ShadowBox
              shadowColor="white"
              borderWidth="2px"
              borderRadius="4px"
              w="100%"
            >
              <ImageSlider
                images={item.images}
                alt={item.name}
                onImageClick={handleImageClick}
              />
              <Box p={4} pb={6}>
                <Text textStyle="sm" mb={1}>
                  {item.type}
                </Text>
                <HStack gap={2}>
                  <ArrowButton
                    as="a"
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    size="sm"
                    colorScheme="white"
                    arrowStyle="tilted"
                  >
                    Pesan Sekarang
                  </ArrowButton>
                </HStack>
              </Box>
            </ShadowBox>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent bg="blackAlpha.900">
          <ModalCloseButton
            position="absolute"
            top={10}
            right={5}
            color="white"
            zIndex={10}
          />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            {selectedImage && (
              <Box
                position="relative"
                w="100%"
                h="100vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={selectedImage}
                  alt="Enlarged Product"
                  style={{ objectFit: "contain" }}
                  fill
                />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default function JerseyDanClothing() {
  const router = useRouter();
  const isClient = useIsClient();

  return (
    <>
      <NextSeo
        title="Sleep Walker Produk | Divisi Jersey dan Clothing"
        description="Temukan koleksi produk Sleep Walker di divisi jersey dan clothing. Produk berkualitas tinggi untuk kenyamanan dan gaya Anda sehari-hari."
        openGraph={{
          url: "https://sleepwalkerofficial.com/produk/jersey-clothing",
          title: "Sleep Walker Produk | Divisi Jersey dan Clothing",
          description:
            "Koleksi jersey dan clothing Sleep Walker untuk gaya dan kenyamanan Anda.",
          images: [
            {
              url: "https://sleepwalkerofficial.com/images/logo_og.png",
              width: 800,
              height: 800,
              alt: "Sleep Walker Official",
            },
          ],
        }}
      />
      <Box>
        <AspectRatio position="relative" ratio={1570 / 524}>
          <Image
            priority
            src="/images/hero/duabelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <Container
        w="100%"
        maxW="container.2xl"
        px={{
          base: 5,
          lg: 10,
          xl: 16,
        }}
      >
        <Text
          textStyle="h5"
          my={{
            base: "5px",
          }}
          textAlign="center"
        >
          Kategori
        </Text>
        {isClient && router.isReady && <Cards />}
      </Container>
      <br />
    </>
  );
}
