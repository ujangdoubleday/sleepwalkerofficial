import { NextSeo } from "next-seo";
import Image from "next/image";
import { Box, AspectRatio } from "@/components/ui";

import { HubungiKami } from "@/components/features/portofolio/Testimoni/HubungiKami";
import { Quotes } from "@/components/features/portofolio/Testimoni/Quotes";

export default function Testimoni() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Portofolio | Testimoni"
        description="Baca testimoni dari klien Sleep Walker yang puas dengan layanan dan hasil portofolio kami. Temukan bagaimana Sleep Walker membantu klien mencapai tujuan bisnis mereka."
        openGraph={{
          url: "https://sleepwalkerofficial.com/portofolio/testimoni",
          title: "Sleep Walker Portofolio | Testimoni",
          description:
            "Testimoni klien Sleep Walker yang menggambarkan kepuasan atas layanan dan hasil portofolio berkualitas tinggi kami.",
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
            src="/images/hero/tujuh.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <Quotes />
      <HubungiKami />
    </>
  );
}
