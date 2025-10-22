import { NextSeo } from "next-seo";
import Image from "next/image";
import { Box, AspectRatio } from "@/components/ui";

import { Sejarah } from "@/components/features/tentang-kami/Sejarah/Sejarah";

export default function SejarahKami() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Tentang Kami | Sejarah Kami"
        description="Pelajari lebih lanjut tentang sejarah dan perjalanan Sleep Walker. Temukan bagaimana tim kami berkembang dan mengembangkan produk unggulan di berbagai divisi."
        openGraph={{
          url: "https://sleepwalkerofficial.com/tentang-kami/sejarah-kami",
          title: "Sleep Walker Tentang Kami | Sejarah Kami",
          description:
            "Sejarah Sleep Walker yang menginspirasi, berisi perjalanan tim dan produk berkualitas tinggi di berbagai divisi.",
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
            src="/images/hero/hiji.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
        <br />

        <Sejarah />
      </Box>
    </>
  );
}
