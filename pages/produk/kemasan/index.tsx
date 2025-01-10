import { NextSeo } from "next-seo";
import Image from "next/image";
import { 
  Box, 
  AspectRatio 
} from "@/lib/ui";

import { Kemasan } from "@/components/Produk/Kemasan";

export default function DivisiKemasan() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Produk | Divisi Kemasan"
        description="Layanan kemasan Sleep Walker menyediakan solusi profesional untuk pengemasan produk Anda dengan desain inovatif dan kualitas terbaik. Hubungi kami untuk kebutuhan kemasan produk bisnis Anda."
        openGraph={{
          url: "https://sleepwalkerofficial.com/produk/kemasan",
          title: "Sleep Walker Produk | Divisi Kemasan",
          description:
            "Solusi kemasan yang responsif dan kreatif dari Sleep Walker untuk meningkatkan nilai produk Anda dengan kualitas terbaik.",
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
            src="/images/hero/tilubelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <Kemasan />
    </>
  );
}
