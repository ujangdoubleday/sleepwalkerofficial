import { Suspense } from "react";
import { NextSeo } from "next-seo";
import { Box, Container, Text, Grid, GridItem, Filter } from "@/components/ui";
import { HOODIE, HOODIE_TYPES } from "@/data/produk/hoodie";
import type { Product } from "@/data/produk/types";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import { useIsClient } from "usehooks-ts";
import { useFilter } from "@/hooks/useFilter";
import ProductCard, {
  ProductCardSkeleton,
} from "@/components/features/produk/ProductCard";

interface FilterOption {
  label: string;
  value: string;
}

const filterOptions: FilterOption[] = [
  { label: "Semua", value: "all" },
  ...HOODIE_TYPES.map((type) => ({ label: type, value: kebabCase(type) })),
];

function Cards() {
  const { defaultOption, filteredItems, handleFilterChange } = useFilter(
    filterOptions,
    HOODIE
  );

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
          <GridItem key={item.id} w="100%">
            <ProductCard product={item} category="hoodie" />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

export default function HoodiePage() {
  const router = useRouter();
  const isClient = useIsClient();

  return (
    <>
      <NextSeo
        title="Sleep Walker Produk | Hoodie"
        description="Temukan koleksi hoodie Sleep Walker dengan berbagai pilihan."
      />
      <Box as="section" pt={{ base: 8, md: 10 }} pb={{ base: 6, md: 8 }}>
        <Container maxW="container.2xl" px={{ base: 5, lg: 10, xl: 16 }}>
          <Box mb={{ base: 6, md: 8 }}>
            <Text textStyle="h3" mb={2} textAlign="center">
              Hoodie
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
