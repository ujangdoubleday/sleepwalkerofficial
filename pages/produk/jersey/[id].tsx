import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { Box, Container, Button } from "@chakra-ui/react";
import { JERSEY } from "@/data/produk/jersey";
import type { Product } from "@/data/produk/types";
import ProductDetail from "@/components/features/produk/ProductDetail";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface ProductPageProps {
  product: Product;
}

export default function JerseyDetailPage({ product }: ProductPageProps) {
  return (
    <>
      <NextSeo
        title={`${product.name} | Sleep Walker`}
        description={product.description}
      />
      <Box pt={{ base: 8, md: 10 }} pb={{ base: 6, md: 8 }}>
        <Container maxW="container.xl" px={{ base: 5, lg: 10 }}>
          <Link href="/produk/jersey" passHref legacyBehavior>
            <Button
              as="a"
              leftIcon={<ArrowBackIcon />}
              variant="outline"
              borderColor="black"
              color="black"
              _hover={{ bg: "gray.100" }}
              mb={4}
            >
              Kembali ke Jersey
            </Button>
          </Link>
          <ProductDetail product={product} />
        </Container>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = JERSEY.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = JERSEY.find((p) => p.id === params?.id);

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
