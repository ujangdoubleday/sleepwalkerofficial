export const NAMA = [
  "IRWAN HELMI",
  "HARUN ABUDRRAHMAN",
  "ENCE RIKI",
  "ARI CAANG",
  "MUHAMAD ARI FIRMANSYAH",
  "ILHAM ALFATH",
] as const;

type Nama = (typeof NAMA)[number];

export const TIM: Array<{
  nama: Nama;
  jabatan: string;
  image: string;
  highlight?: string;
}> = [
  {
    nama: "IRWAN HELMI",
    jabatan: "PIRATE CAPTAIN",
    image: "/images/tim/CAPTAIN.png",
  },
  {
    nama: "HARUN ABUDRRAHMAN",
    jabatan: "SHARPSHOOTER",
    image: "/images/tim/SHARPSHOOTER.png",
  },
  {
    nama: "ENCE RIKI",
    jabatan: "SWORDSMAN",
    image: "/images/tim/SWORDSMAN.png",
  },
  {
    nama: "ARI CAANG",
    jabatan: "NAVIGATOR",
    image: "/images/tim/NAVIGATOR.png",
  },
  {
    nama: "ILHAM ALFATH",
    jabatan: "SHIPWRIGHT",
    image: "/images/tim/SHIPWRIGHT.png",
  },
];
