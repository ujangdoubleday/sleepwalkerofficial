import { Suspense, useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  Grid,
  GridItem,
  Filter,
  useDisclosure,
  AspectRatio,
} from "@/lib/ui";
import { BAJU, BAJU_TYPES } from "@/content/produk/jersey-and-clothing";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import { useIsClient } from "usehooks-ts";
import { useFilter } from "@/hooks/useFilter";
import { ProductCard, ProductCardSkeleton } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions: FilterOption[] = [
  { label: "Semua", value: "all" },
  ...BAJU_TYPES.map((type) => ({ label: type, value: kebabCase(type) })),
];

function Cards() {
  const { defaultOption, filteredItems, handleFilterChange } = useFilter(
    filterOptions,
    BAJU
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Filter
        options={filterOptions}
        selectedOption={defaultOption || filterOptions[0]} // Pastikan tidak undefined
        onChange={handleFilterChange}
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
        {filteredItems.map((item) => (
          <GridItem key={item.name} display="flex">
            <ProductCard
              product={item}
              onImageClick={(image) => {
                setSelectedImage(image);
                onOpen();
              }}
            />
          </GridItem>
        ))}
      </Grid>
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        selectedImage={selectedImage}
      />
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
        description="Temukan koleksi produk Sleep Walker di divisi jersey dan clothing."
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
      <Container w="100%" maxW="container.2xl" px={{ base: 5, lg: 10, xl: 16 }}>
        <Text textStyle="h5" my={{ base: "5px" }} textAlign="center">
          Kategori
        </Text>
        <Suspense fallback={<ProductCardSkeleton />}>
          {isClient && router.isReady && <Cards />}
        </Suspense>
      </Container>
      <br />
    </>
  );
}
