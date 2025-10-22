import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Product } from "@/data/produk/types";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <Box as="section">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={{ base: 8, lg: 12 }}
      >
        {/* left side - image gallery */}
        <GridItem>
          <VStack spacing={4} align="stretch">
            {/* main image */}
            <Box
              position="relative"
              width="100%"
              height={{ base: "400px", md: "500px", lg: "600px" }}
              borderRadius="md"
              overflow="hidden"
              borderWidth="1px"
              borderColor="black"
              bg="white"
            >
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>

            {/* thumbnail gallery */}
            <HStack spacing={3} justify="flex-start" flexWrap="wrap">
              {product.images.map((image, index) => (
                <Box
                  key={index}
                  position="relative"
                  width={{ base: "80px", md: "100px" }}
                  height={{ base: "80px", md: "100px" }}
                  borderRadius="md"
                  overflow="hidden"
                  borderWidth="2px"
                  borderColor={selectedImage === image ? "black" : "gray.300"}
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{
                    borderColor: "black",
                    transform: "scale(1.05)",
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </HStack>
          </VStack>
        </GridItem>

        {/* right side - product info */}
        <GridItem>
          <VStack align="stretch" spacing={6} height="100%">
            {/* product name and description */}
            <Box>
              <Text
                textStyle={{ base: "h4", md: "h3" }}
                mb={2}
                fontWeight="bold"
              >
                {product.name}
              </Text>
              <Text
                textStyle={{ base: "xs", md: "sm" }}
                color="gray.600"
                mb={4}
              >
                {product.type}
              </Text>
              <Text
                textStyle={{ base: "sm", md: "base" }}
                color="black"
                lineHeight="tall"
              >
                {product.description}
              </Text>
            </Box>

            {/* marketplace buttons */}
            <Box mt="auto">
              <Text textStyle="sm" mb={4} fontWeight="semibold" color="black">
                Beli di:
              </Text>
              <VStack spacing={3} align="stretch">
                <Button
                  as="a"
                  href={product.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  width="100%"
                  bg="#EE4D2D"
                  color="white"
                  _hover={{ bg: "#D73211" }}
                  leftIcon={
                    <Box as="span" fontSize="xl">
                      🛒
                    </Box>
                  }
                >
                  Shopee
                </Button>
                <Button
                  as="a"
                  href={product.tokopediaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  width="100%"
                  bg="#42B549"
                  color="white"
                  _hover={{ bg: "#2E7D32" }}
                  leftIcon={
                    <Box as="span" fontSize="xl">
                      🛍️
                    </Box>
                  }
                >
                  Tokopedia
                </Button>
                <Button
                  as="a"
                  href={product.lazadaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  width="100%"
                  bgGradient="linear(to-r, #0F146D, #D41C5B)"
                  color="white"
                  _hover={{ bgGradient: "linear(to-r, #0A0E4D, #A0143D)" }}
                  leftIcon={
                    <Box as="span" fontSize="xl">
                      🏪
                    </Box>
                  }
                >
                  Lazada
                </Button>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
