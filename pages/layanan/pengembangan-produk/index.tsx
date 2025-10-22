import { NextSeo } from "next-seo";
import Image from "next/image";
import { FancyLinkSection } from "@/components/common/FancyLinkSection/FancyLinkSection";
import { Box, AspectRatio, Container, Text } from "@/components/ui";

import { Keunggulan } from "@/components/features/layanan/PengembanganProduk/Keunggulan";
import { ProsesPengembangan } from "@/components/features/layanan/PengembanganProduk/ProsesPengembangan";
import { ToolsYangDigunakan } from "@/components/features/layanan/PengembanganProduk/ToolsYangDigunakan";
import { Quotes } from "@/components/features/layanan/PengembanganProduk/Quotes";
import { HubungiKami } from "@/components/features/layanan/PengembanganProduk/HubungiKami";

export default function PengembanganProduk() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Layanan | Pengembangan Produk"
        description="Layanan pengembangan produk dari Sleep Walker yang membantu Anda mengembangkan produk inovatif dan berkualitas tinggi sesuai kebutuhan bisnis Anda. Temukan solusi terbaik untuk setiap tantangan pengembangan produk Anda."
        openGraph={{
          url: "https://sleepwalkerofficial.com/layanan/pengembangan-produk",
          title: "Sleep Walker Layanan | Pengembangan Produk",
          description:
            "Pengembangan produk berkualitas tinggi oleh Sleep Walker untuk mendukung inovasi dan pertumbuhan bisnis Anda.",
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
            src="/images/hero/salapan.png"
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
          base: 6,
          lg: 10,
          xl: 16,
        }}
      >
        <Text
          textStyle="h5"
          my={{
            base: "10px",
            md: "50px",
            lg: "75px",
          }}
          textAlign="center"
          maxW="container.md"
          mx="auto"
        >
          Inovasi Produk yang Meningkatkan Nilai Bisnis Anda
          <Text textStyle="h4">
            <i>
              Dari Konsep hingga Realisasi: Kami Hadir untuk Mendukung Inovasi
              Anda
            </i>
          </Text>
        </Text>
      </Container>
      <Box bg="black" py="150px">
        <FancyLinkSection
          reverse
          heading="Deskripsi Layanan"
          description="Kami menyediakan layanan pengembangan produk yang dirancang untuk membantu Anda menciptakan solusi inovatif, baik itu produk digital, fisik, atau berbasis teknologi. Dengan pendekatan berbasis data dan pengalaman, kami memastikan setiap langkah proses menghasilkan produk yang relevan dan berkualitas tinggi."
          imageUrl="/images/layanan/deskripsi-layanan.png"
          ctaColor="green.400"
          containerProps={{
            maxW: {
              base: "704px",
              lg: "1600px",
            },
            w: "100%",
            pr: {
              lg: "40px",
              xl: "64px",
              "2xl": "128px",
            },
            sx: {
              color: "white",
              p: {
                color: "#CCC",
              },
            },
          }}
        />
      </Box>

      <Keunggulan />
      <ProsesPengembangan />
      <ToolsYangDigunakan />
      <Quotes />
      <br />
      <HubungiKami />
    </>
  );
}
