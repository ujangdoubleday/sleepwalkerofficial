import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";

export function About() {
  return (
    <FancyLinkSection
      heading="Tentang Kami"
      description={`Sleep Walker adalah tim yang berdedikasi menyediakan produk clothing berkualitas tinggi dengan fokus pada kualitas, kenyamanan, dan gaya modern. Kami menawarkan berbagai pilihan produk seperti Jersey, T-Shirt, Hoodie, Kemeja, dan Jaket untuk berbagai kebutuhan fashion Anda.`}
      ctaText="Selengkapnya"
      ctaLink="/tentang-kami/sejarah-kami"
      imageUrl="/images/home/2.jpg"
      containerProps={{
        maxW: {
          base: "704px",
          lg: "1600px",
        },
        w: "100%",
        py: {
          base: 24,
          md: 32,
          xl: "150px",
        },
        pl: {
          lg: "40px",
          xl: "64px",
          "2xl": "128px",
        },
      }}
    />
  );
}
