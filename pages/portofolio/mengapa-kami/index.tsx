import { NextSeo } from "next-seo";
import Image from "next/image";
import { 
  Box, 
  AspectRatio 
} from "@/lib/ui";

import { MengapaKamiYa } from "@/components/Portofolio/MengapaKami/MengapaKami";
import { HubungiKami } from "@/components/Portofolio/MengapaKami/HubungiKami";

export default function MengapaKami() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Portofolio | Mengapa Kami?"
        description="Pelajari mengapa Sleep Walker menjadi pilihan utama untuk portofolio berkualitas tinggi. Temukan alasan di balik keunggulan kami dalam mengembangkan produk dan layanan terbaik."
        openGraph={{
          url: "https://sleepwalkerofficial.com/portofolio/mengapa-kami",
          title: "Sleep Walker Portofolio | Mengapa Kami?",
          description:
            "Keunggulan Sleep Walker dalam mengembangkan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan secara optimal.",
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
            src="/images/hero/genep.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <MengapaKamiYa />
      <HubungiKami />
    </>
  );
}
