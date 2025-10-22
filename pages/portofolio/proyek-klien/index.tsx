import { NextSeo } from "next-seo";
import Image from "next/image";
import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";
import { 
  Box, 
  AspectRatio 
} from "@/lib/ui";

import { HubungiKami } from "@/components/Portofolio/ProyekKlien/HubungiKami";

export default function ProyekKlien() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Portofolio | Proyek Klien"
        description="Temukan berbagai proyek klien Sleep Walker yang telah kami kerjakan dengan profesionalisme tinggi. Jelajahi portofolio kami yang mencakup berbagai solusi kreatif dan inovatif untuk kebutuhan bisnis Anda."
        openGraph={{
          url: "https://sleepwalkerofficial.com/portofolio/proyek-klien",
          title: "Sleep Walker Portofolio | Proyek Klien",
          description:
            "Portofolio Sleep Walker dengan berbagai proyek klien yang sukses, mencakup berbagai solusi kreatif dan inovatif.",
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
            src="/images/hero/lima.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
        <br />
        <FancyLinkSection
          heading="Welcomedrink"
          description="Welcomedrink merupakan minuman kesehatan yang diproduksi oleh Pt. Nutrisius Sari Persada yang saat ini sedang dalam proses pengembangan pemasaran produk melalui Digital Marketing."
          ctaLink=""
          imageUrl="/images/proyek/welcome-drink.png"
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
      <FancyLinkSection
        heading="210 Club"
        description="210 Club adalah proyek klien kami dibidang apparel yang bertujuan menciptakan merek pakaian premium dengan desain modern dan berkualitas tinggi. Proyek ini sedang dalam tahap pengembangan pemasaran produk, dimana kami fokus merancang strategi yang efektif untuk membangun brand awareness, menjangkau target pasar, dan menciptakan pengalaman pelanggan yang berkesan. Dengan pendekatan yang terintegrasi, mulai dari konsep visual, produksi berkualitas, hingga strategi pemasaran digital, 210 Club diharapkan menjadi salah satu brand apparel yang menonjol di industrinya. Proyek ini merupakan langkah kami untuk mendukung pertumbuhan bisnis fashion dengan inovasi dan kreativitas."
        ctaLink=""
        imageUrl="/images/proyek/dua-sepuluh-club.png"
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
