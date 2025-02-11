export const PORTOFOLIO_TYPES = [
    "Portofolio",
] as const;

type Portofolio = (typeof PORTOFOLIO_TYPES)[number];

export const PORTOFOLIO: Array<{
    type: Portofolio;
    name: string;
    link: string;
    image: string;
    highlight?: string;
}> = [
    {
        type: "Portofolio",
        name: "PIRATE CAPTAIN",
        link: "https://oreowallet.com/",
        image: "/images/ecosystem/oreowallet.png",
    },
    {
        type: "Portofolio",
        name: "SHARPSHOOTER",
        link: "https://iflabs.network/",
        image: "/images/ecosystem/if-labs.png",
    },
    {
        type: "Portofolio",
        name: "SWORDSMAN",
        link: "https://www.chainport.io/",
        image: "/images/ecosystem/chainport.png",
    },
    {
        type: "Portofolio",
        name: "NAVIGATOR",
        link: "https://zondax.ch/",
        image: "/images/ecosystem/zondax.png",
    },
    {
        type: "Portofolio",
        name: "SHIPWRIGHT",
        link: "https://github.com/oreoslabs/",
        image: "/images/ecosystem/oreowallet.png",
    },
];
