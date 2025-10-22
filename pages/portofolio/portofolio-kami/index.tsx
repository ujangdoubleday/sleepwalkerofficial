import { NextSeo } from "next-seo";
import Image from "next/image";
import { FancyLinkSection } from "@/components/common/FancyLinkSection/FancyLinkSection";
import { Box, Container, Text, AspectRatio } from "@/components/ui";

import { HubungiKami } from "@/components/features/portofolio/LatarBelakang/HubungiKami";

export default function PortofolioKami() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Portofolio | Portofolio Kami"
        description="Temukan berbagai karya dan proyek terbaik Sleep Walker di dalam portofolio kami. Jelajahi produk dan layanan berkualitas tinggi yang telah kami kembangkan untuk berbagai kebutuhan pelanggan."
        openGraph={{
          url: "https://sleepwalkerofficial.com/portofolio/portofolio-kami",
          title: "Sleep Walker Portofolio | Portofolio Kami",
          description:
            "Portofolio Sleep Walker dengan berbagai proyek dan produk berkualitas tinggi untuk memenuhi kebutuhan pelanggan kami.",
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
            src="/images/hero/opat.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
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
            Proyek yang Membuktikan Komitmen Kami.
          </Text>
        </Container>
        <FancyLinkSection
          heading="Alfarisi"
          description="Alfarisi Percetakan offset sablon digital telah berjalan selama 16 Tahun dan telah memproduksi lebih dari ribuan produk packaging offset sablon digital sehingga terbukti mendapatkan kepercayaan dari berbagai industri."
          ctaLink="/community/grants"
          imageUrl="/images/portofolio/alfarisi.png"
          containerProps={{
            maxW: {
              base: "704px",
              lg: "1600px",
            },
            w: "100%",
            mb: {
              base: 24,
              md: 32,
              xl: "150px",
            },
            pl: {
              lg: "40px",
              xl: "64px",
              "2xl": "128px",
            },
          }}
        />
      </Box>
      <Box bg="black" py="150px">
        <FancyLinkSection
          reverse
          heading="B.N.G.K"
          description="B.N.G.K merupakan produsen minyak rambut (Pomade) yang berdiri sejak Tahun 2016 dan sudah mensupport banyak barbershop di Indonesia."
          imageUrl="/images/portofolio/bngk.png"
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
      <br />
      <FancyLinkSection
        heading="Madu Hidayah"
        description="Madu hidayah adalah sebuah produk dari anak perusahaan Madu Mutiara yang bergerak pada industri madu murni dan turunannya. Telah resmi bekerja sama sebagai supplier packaging sejak 2015 menjadikan Madu Hidayah sebagai produk unggulan."
        ctaLink="/community/grants"
        imageUrl="/images/portofolio/madu-hidayah.png"
        containerProps={{
          maxW: {
            base: "704px",
            lg: "1600px",
          },
          w: "100%",
          mb: {
            base: 24,
            md: 32,
            xl: "150px",
          },
          pl: {
            lg: "40px",
            xl: "64px",
            "2xl": "128px",
          },
        }}
      />

      <HubungiKami />
    </>
  );
}
