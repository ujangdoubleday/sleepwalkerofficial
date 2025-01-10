import { NextSeo } from "next-seo";
import Image from "next/image";
import { 
  Box, 
  AspectRatio 
} from "@/lib/ui";

import { Maklon } from "@/components/Produk/Maklon";

export default function MaklonKosmetik() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Produk | Divisi Maklon Kosmetik"
        description="Divisi Maklon Kosmetik dari Sleep Walker menawarkan solusi lengkap untuk produksi kosmetik dengan kualitas premium. Dapatkan layanan profesional dan konsultasi ahli untuk kebutuhan maklon kosmetik Anda."
        openGraph={{
          url: "https://sleepwalkerofficial.com/produk/maklon-kosmetik",
          title: "Sleep Walker Produk | Divisi Maklon Kosmetik",
          description:
            "Layanan maklon kosmetik profesional dari Sleep Walker dengan fokus pada kualitas, inovasi, dan kepuasan pelanggan.",
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
            src="/images/hero/opatbelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <br />

      <Maklon />
    </>
  );
}
