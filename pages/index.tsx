import { NextSeo } from "next-seo";

import { Hero } from "@/components/HomePage/Hero/Hero";
import { About } from "@/components/HomePage/About/About";
import { WhySleepWalker } from "@/components/HomePage/WhySleepWalker/WhySleepWalker";
import { Backers } from "@/components/HomePage/Backers/Backers";
import { OurProduct } from "@/components/HomePage/OurProduct/OurProduct";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Sleep Walker Official"
        description="Official Website Sleep Walker"
        openGraph={{
          url: "https://sleepwalkerofficial.com/",
          title: "Sleep Walker Official",
          description:
            "Sleep Walker adalah tim yang berdedikasi menyediakan solusi terbaik dengan fokus pada konsultasi pengembangan produk, dukungan pelanggan, dan pelatihan. Kami memiliki divisi-divisi seperti Jersey, Kemasan, Clothing, dan Maklon Kosmetik yang menawarkan produk berkualitas tinggi untuk berbagai kebutuhan.",
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
      <Hero />
      <Backers />
      <About />
      <OurProduct />
      <WhySleepWalker />
    </>
  );
}
