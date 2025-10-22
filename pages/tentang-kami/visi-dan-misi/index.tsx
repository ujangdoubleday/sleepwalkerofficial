import { NextSeo } from "next-seo";
import { defineMessages, useIntl } from "react-intl";
import Image from "next/image";
import { FancyLinkSection } from "@/components/common/FancyLinkSection/FancyLinkSection";
import { Box, AspectRatio } from "@/components/ui";

import { Misi } from "@/components/features/tentang-kami/VisiMisi/Misi";

const messages = defineMessages({
  visi: {
    id: "tentang-kami.visi",
    defaultMessage: "Visi",
  },
  isiVisi: {
    id: "tentang-kami.isiVisi",
    defaultMessage:
      "Menjadi tim kreatif yang terus terjaga di tengah mimpi, berkomitmen untuk menciptakan inovasi dan memberikan dampak positif yang berkelanjutan dalam berbagai industri.",
  },
});

export default function VisiDanMisi() {
  const { formatMessage } = useIntl();
  return (
    <>
      <NextSeo
        title="Sleep Walker Tentang Kami | Visi dan Misi"
        description="Pelajari tentang visi dan misi Sleep Walker yang menjadi panduan kami dalam menghadirkan produk dan layanan terbaik. Komitmen kami terhadap inovasi dan kepuasan pelanggan."
        openGraph={{
          url: "https://sleepwalkerofficial.com/tentang-kami/visi-dan-misi",
          title: "Sleep Walker Tentang Kami | Visi dan Misi",
          description:
            "Visi dan Misi Sleep Walker untuk memberikan solusi terbaik dalam produk dan layanan inovatif.",
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
            src="/images/hero/tilu.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>

      <br />
      <Box bg="black" py="150px">
        <FancyLinkSection
          reverse
          heading={formatMessage(messages.visi)}
          description={formatMessage(messages.isiVisi)}
          imageUrl="/images/tentang-kami/visi.jpg"
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

      <Misi />
    </>
  );
}
