import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Box, Container, Button } from "@chakra-ui/react";
import { HOODIE } from "@/data/produk/hoodie";
import type { Product } from "@/data/produk/types";
import ProductDetail from "@/components/features/produk/ProductDetail";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface ProductPageProps {
  product: Product;
}

export default function HoodieDetailPage({ product }: ProductPageProps) {
  return (
    <>
      <NextSeo
        title={`${product.name} | Sleep Walker`}
        description={product.description}
      />
      <Box pt={{ base: 8, md: 10 }} pb={{ base: 6, md: 8 }}>
        <Container maxW="container.xl" px={{ base: 5, lg: 10 }}>
          <Link href="/produk/hoodie" passHref legacyBehavior>
            <Button
              as="a"
              leftIcon={<ArrowBackIcon />}
              variant="outline"
              borderColor="black"
              color="black"
              _hover={{ bg: "gray.100" }}
              mb={4}
            >
              Kembali ke Hoodie
            </Button>
          </Link>
          <ProductDetail product={product} />
        </Container>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = HOODIE.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = HOODIE.find((p) => p.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
