import { NextSeo } from "next-seo";
import Image from "next/image";
import { Box, AspectRatio } from "@/components/ui";

import { PNW } from "@/components/features/layanan/PelatihanDanWorkshop/PNW";
import { HubungiKami } from "@/components/features/layanan/PelatihanDanWorkshop/HubungiKami";

export default function PelatihanDanWorkshop() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Layanan | Pelatihan dan Workshop"
        description="Pelatihan dan workshop dari Sleep Walker membantu tim Anda meningkatkan keterampilan dan pengetahuan dalam pengembangan produk serta layanan profesional. Dapatkan pengalaman belajar yang mendalam dan praktis."
        openGraph={{
          url: "https://sleepwalkerofficial.com/layanan/pelatihan-dan-workshop",
          title: "Sleep Walker Layanan | Pelatihan dan Workshop",
          description:
            "Pelatihan dan workshop Sleep Walker untuk meningkatkan keterampilan dan profesionalisme tim Anda dalam berbagai aspek bisnis dan pengembangan produk.",
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
            src="/images/hero/sabelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <PNW />
      <HubungiKami />
    </>
  );
}
