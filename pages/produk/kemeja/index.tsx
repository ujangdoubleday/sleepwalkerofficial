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
} from "@/components/ui";
import { KEMEJA, KEMEJA_TYPES } from "@/data/produk/kemeja";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import { useIsClient } from "usehooks-ts";
import { useFilter } from "@/hooks/useFilter";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/features/produk/ProductCard";
import ProductModal from "@/components/features/produk/ProductModal";

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions: FilterOption[] = [
  { label: "Semua", value: "all" },
  ...KEMEJA_TYPES.map((type) => ({ label: type, value: kebabCase(type) })),
];

function Cards() {
  const { defaultOption, filteredItems, handleFilterChange } = useFilter(
    filterOptions,
    KEMEJA
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Filter
        options={filterOptions}
        selectedOption={defaultOption || filterOptions[0]}
        onChange={handleFilterChange}
        mb={{ base: 6, md: 8 }}
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

export default function KemejaPage() {
  const router = useRouter();
  const isClient = useIsClient();

  return (
    <>
      <NextSeo
        title="Sleep Walker Produk | Kemeja"
        description="Temukan koleksi kemeja Sleep Walker dengan berbagai pilihan."
      />
      <Box as="section" pt={{ base: 8, md: 10 }} pb={{ base: 6, md: 8 }}>
        <Container maxW="container.2xl" px={{ base: 5, lg: 10, xl: 16 }}>
          <Box mb={{ base: 6, md: 8 }}>
            <Text textStyle="h3" mb={2} textAlign="center">
              Kemeja
            </Text>
          </Box>

          <Suspense fallback={<ProductCardSkeleton />}>
            {isClient && router.isReady && <Cards />}
          </Suspense>
        </Container>
      </Box>
    </>
  );
}
