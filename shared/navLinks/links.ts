import { messages } from "./messages";

export const links = [
  {
    label: messages.beranda,
    href: "/",
  },
  {
    label: messages.produk,
    color: "yellow",
    items: [
      {
        title: messages.jersey,
        description: messages.jerseyDeskripsi,
        href: "/produk/jersey",
        image: "/images/nav/divisi-jersey.svg",
      },
      {
        title: messages.tshirt,
        description: messages.tshirtDeskripsi,
        href: "/produk/t-shirt",
        image: "/images/nav/divisi-kemasan.svg",
      },
      {
        title: messages.hoodie,
        description: messages.hoodieDeskripsi,
        href: "/produk/hoodie",
        image: "/images/nav/maklon-kosmetik.svg",
      },
      {
        title: messages.kemeja,
        description: messages.kemejaDeskripsi,
        href: "/produk/kemeja",
        image: "/images/nav/maklon-kosmetik.svg",
      },
      {
        title: messages.jaket,
        description: messages.jaketDeskripsi,
        href: "/produk/jaket",
        image: "/images/nav/maklon-kosmetik.svg",
      },
    ],
  },
  {
    label: messages.tentangKami,
    color: "brown",
    items: [
      {
        title: messages.sejarahKami,
        description: messages.sejarahKamiDeskripsi,
        href: "/tentang-kami/sejarah-kami",
        image: "/images/nav/sejarah-kami.svg",
      },
      {
        title: messages.timKami,
        description: messages.timKamiDeskripsi,
        href: "/tentang-kami/tim",
        image: "/images/nav/tim.svg",
      },
      {
        title: messages.visiDanMisi,
        description: messages.visiDanMisiDeskripsi,
        href: "/tentang-kami/visi-dan-misi",
        image: "/images/nav/visi-misi.svg",
      },
    ],
  },
  {
    label: messages.portofolioKami,
    color: "green",
    items: [
      {
        title: messages.portofolioKamiTitle,
        description: messages.portofolioKamiDeskripsi,
        href: "/portofolio/portofolio-kami",
        image: "/images/nav/studi-kasus.svg",
      },
      {
        title: messages.proyekKlien,
        description: messages.proyekKlienDeskripsi,
        href: "/portofolio/proyek-klien",
        image: "/images/nav/proyek-klien.svg",
      },
      {
        title: messages.mengapaKami,
        description: messages.mengapaKamiDeskripsi,
        href: "/portofolio/mengapa-kami",
        image: "/images/nav/mengapa-kami.svg",
      },
      {
        title: messages.testimoniKami,
        description: messages.testimoniKamiDeskripsi,
        href: "/portofolio/testimoni",
        image: "/images/nav/testimoni.svg",
      },
      {
        title: messages.penghargaan,
        description: messages.penghargaanDeskripsi,
        href: "/portofolio/penghargaan",
        image: "/images/nav/penghargaan.svg",
      },
    ],
  },
  {
    label: messages.layanan,
    color: "orange",
    items: [
      {
        title: messages.pengembanganProduk,
        description: messages.pengembanganProdukDeskripsi,
        href: "/layanan/pengembangan-produk",
        image: "/images/nav/pengembangan-produk.svg",
      },
      {
        title: messages.pelatihanDanWorkshop,
        description: messages.pelatihanDanWorkshopDeskripsi,
        href: "/layanan/pelatihan-dan-workshop",
        image: "/images/nav/pelatihan-workshop.svg",
      },
    ],
  },
  
  {
    label: messages.faq,
    href: "/faq",
  },
] as const;
