import { NextSeo } from "next-seo";

import { Hero } from "@/components/features/home/Hero/Hero";
import { About } from "@/components/features/home/About/About";
import { WhySleepWalker } from "@/components/features/home/WhySleepWalker/WhySleepWalker";
import { Backers } from "@/components/features/home/Backers/Backers";
import { OurProduct } from "@/components/features/home/OurProduct/OurProduct";

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
