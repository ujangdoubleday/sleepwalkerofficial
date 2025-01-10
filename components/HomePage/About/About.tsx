import { FancyLinkSection } from "@/components/FancyLinkSection/FancyLinkSection";

export function About() {
  return (
    <FancyLinkSection
      heading="Tentang Kami"
      description={`Sleep Walker adalah tim yang berdedikasi menyediakan solusi terbaik dengan fokus pada konsultasi pengembangan produk, dukungan pelanggan, dan pelatihan. Kami memiliki divisi-divisi seperti Jersey, Kemasan, Clothing, dan Maklon Kosmetik yang menawarkan produk berkualitas tinggi untuk berbagai kebutuhan.`}
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
