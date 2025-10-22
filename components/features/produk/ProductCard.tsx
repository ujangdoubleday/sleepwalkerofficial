import { Box, Text, Skeleton, SkeletonText, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ShadowBox } from "@/components/ui";
import type { Product } from "@/data/produk/types";

interface ProductCardProps {
  product: Product;
  category: string;
}

const ProductCard = ({ product, category }: ProductCardProps) => {
  const mainImage = product.images[0];

  return (
    <Link href={`/produk/${category}/${product.id}`} passHref legacyBehavior>
      <Box
        as="a"
        display="block"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: "translateY(-4px)" }}
      >
        <ShadowBox
          shadowColor="white"
          borderWidth="2px"
          borderRadius="4px"
          w="100%"
        >
          <Box
            position="relative"
            width="100%"
            height={{ base: "350px", md: "400px", lg: "450px" }}
            overflow="hidden"
            bg="gray.50"
          >
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box p={4} pb={6}>
            <Text textStyle="base" fontWeight="semibold" mb={1}>
              {product.name}
            </Text>
          </Box>
        </ShadowBox>
      </Box>
    </Link>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <ShadowBox
      shadowColor="white"
      borderWidth="2px"
      borderRadius="4px"
      w="100%"
    >
      <Skeleton height="200px" />
      <Box p={4} pb={6}>
        <SkeletonText mt="4" noOfLines={1} spacing="4" />
        <HStack gap={2} mt={4}>
          <Skeleton height="40px" width="100%" />
        </HStack>
      </Box>
    </ShadowBox>
  );
};

export default ProductCard;
