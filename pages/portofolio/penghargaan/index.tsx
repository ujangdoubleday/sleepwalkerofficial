import { NextSeo } from "next-seo";
import Image from "next/image";
import { 
  Box, 
  AspectRatio 
} from "@/lib/ui";

import { Building } from "@/components/Building/Building";

export default function Penghargaan() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Portofolio | Penghargaan"
        description="Lihat berbagai penghargaan yang telah diraih oleh Sleep Walker atas kontribusi luar biasa dalam pengembangan produk dan layanan berkualitas tinggi. Kami bangga dengan setiap pencapaian yang telah kami raih bersama klien kami."
        openGraph={{
          url: "https://sleepwalkerofficial.com/portofolio/penghargaan",
          title: "Sleep Walker Portofolio | Penghargaan",
          description:
            "Penghargaan Sleep Walker untuk kontribusi luar biasa dalam pengembangan produk dan layanan berkualitas tinggi.",
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
            src="/images/hero/dalapan.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <Building />
    </>
  );
}
