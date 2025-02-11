export const ABOUT_TYPES = [
    "Tentang Kami"
  ] as const;
  
  type About = (typeof ABOUT_TYPES)[number];
  
  export const ABOUT: Array<{
    type: About;
    name: string;
    link: string;
    image: string;
    highlight?: string;
  }> = [
    {
      type: "Tentang Kami",
      name: "Sejarah Kami",
      link: "/tentang-kami/sejarah-kami",
      image: "/images/ecosystem/oreowallet.png",
    },
    {
      type: "Tentang Kami",
      name: "Tim",
      link: "/tentang-kami/tim",
      image: "/images/ecosystem/if-labs.png",
    },
    {
      type: "Tentang Kami",
      name: "Visi dan Misi",
      link: "/tentang-kami/visi-dan-misi",
      image: "/images/ecosystem/chainport.png",
    },
  ];
  