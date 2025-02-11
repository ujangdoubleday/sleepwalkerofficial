import { Box, Text, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { ShadowBox, ArrowButton } from "@/lib/ui";

interface Product {
  name: string;
  type: string;
  images: string[];
  link: string;
}

interface ProductCardProps {
  product: Product;
  onImageClick: (image: string) => void;
}

export const ProductCard = ({ product, onImageClick }: ProductCardProps) => {
  return (
    <ShadowBox
      shadowColor="white"
      borderWidth="2px"
      borderRadius="4px"
      w="100%"
    >
      <ImageSlider
        images={product.images}
        alt={product.name}
        onImageClick={onImageClick}
      />
      <Box p={4} pb={6}>
        <Text textStyle="sm" mb={1}>
          {product.type}
        </Text>
        <HStack gap={2}>
          <ArrowButton
            as="a"
            target="_blank"
            rel="noreferrer"
            href={product.link}
            size="sm"
            colorScheme="white"
            arrowStyle="tilted"
          >
            Pesan Sekarang
          </ArrowButton>
        </HStack>
      </Box>
    </ShadowBox>
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
