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
            "Sleep Walker adalah tim yang berdedikasi menyediakan produk clothing berkualitas tinggi dengan fokus pada kualitas, kenyamanan, dan gaya modern. Kami menawarkan berbagai pilihan produk seperti Jersey, T-Shirt, Hoodie, Kemeja, dan Jaket untuk berbagai kebutuhan fashion Anda.",
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
