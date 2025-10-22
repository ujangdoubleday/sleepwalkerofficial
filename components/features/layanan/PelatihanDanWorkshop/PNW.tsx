import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { Container, Text, Heading, Grid, GridItem, Box } from "@/components/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/common/AutoExpandingList/AutoExpandingList";

import gpnw from "@/assets/Layanan/PelatihanDanWorkshop/pelatihan-workshop.png";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={gpnw} />,
  1: <Image alt="" src={gpnw} />,
  2: <Image alt="" src={gpnw} />,
};

const messages = defineMessages({
  PNW: {
    id: "PNW.PNW",
    defaultMessage: "Pelatihan dan Workshop Kami",
  },
  pnwSatu: {
    id: "PNW.pnwSatu",
    defaultMessage: "Strategi Pemasaran Digital untuk Pemula",
  },
  descPNWSatu: {
    id: "PNW.descPNWSatu",
    defaultMessage:
      "Pelatihan ini dirancang untuk pengusaha, pemilik UKM, atau individu yang ingin memahami dasar-dasar pemasaran digital. Workshop mencakup pengenalan platform utama seperti Google Ads, Facebook Ads, dan SEO, serta teknik pembuatan konten menarik untuk media sosial. Peserta akan belajar cara mengoptimalkan kehadiran digital mereka guna meningkatkan jangkauan dan penjualan.",
  },
  durasiPNWSatu: {
    id: "PNW.durasiPNWSatu",
    defaultMessage: "1 Hari",
  },
  hasilPNWSatu: {
    id: "PNW.hasilPNWSatu",
    defaultMessage:
      "Peserta mampu menyusun strategi pemasaran digital dasar yang dapat diterapkan secara langsung.",
  },
  pnwDua: {
    id: "PNW.prosesDua",
    defaultMessage: "Teknik Negosiasi dan Penjualan yang Efektif",
  },
  descPNWDua: {
    id: "PNW.descPNWDua",
    defaultMessage:
      "Workshop ini membantu peserta menguasai seni negosiasi dan penjualan. Peserta akan mempelajari teknik komunikasi persuasif, memahami kebutuhan pelanggan, dan mengatasi keberatan selama proses penjualan. Pelatihan ini sangat cocok untuk tenaga penjual, manajer pemasaran, atau pengusaha yang ingin meningkatkan konversi penjualan mereka.",
  },
  durasiPNWDua: {
    id: "PNW.durasiPNWSatu",
    defaultMessage: "1 Hari",
  },
  hasilPNWDua: {
    id: "PNW.hasilPNWSatu",
    defaultMessage:
      "Peserta memiliki kemampuan untuk melakukan negosiasi dan closing penjualan dengan lebih percaya diri.",
  },
  pnwTilu: {
    id: "PNW.prosesTilu",
    defaultMessage: "Leadership dan Manajemen Tim untuk Startup",
  },
  descPNWTilu: {
    id: "PNW.descProsesTilu",
    defaultMessage:
      "Pelatihan ini dirancang untuk pemimpin startup atau manajer tim yang ingin meningkatkan kemampuan manajerial mereka. Peserta akan belajar tentang gaya kepemimpinan, manajemen konflik, delegasi tugas, dan membangun budaya kerja yang produktif. Fokus utamanya adalah menciptakan tim yang solid untuk mendukung pertumbuhan bisnis.",
  },
  durasiPNWTilu: {
    id: "PNW.durasiPNWSatu",
    defaultMessage: "2 Hari",
  },
  hasilPNWTilu: {
    id: "PNW.hasilPNWSatu",
    defaultMessage:
      "Peserta mampu memimpin tim secara efektif dan menciptakan lingkungan kerja yang mendukung kolaborasi.",
  },
});

export function PNW() {
  const expandingListProps = useAutoExpandingList();
  const { formatMessage } = useIntl();

  return (
    <Container w="100%" maxW="container.xl" py="150px">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
        }}
        gap={10}
      >
        <GridItem>
          <Text textStyle="h3" mb={2}>
            {formatMessage(messages.PNW)}
          </Text>

          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.pnwSatu)}
                </Heading>
              }
              body={
                <Box>
                  <b>Deskripsi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descPNWSatu)}
                  </Text>
                  <br />
                  <b>Durasi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.durasiPNWSatu)}
                  </Text>
                  <br />
                  <b>Hasil Akhir:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.hasilPNWSatu)}
                  </Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  ></Box>
                </Box>
              }
            />

            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.pnwDua)}
                </Heading>
              }
              body={
                <Box>
                  <b>Deskripsi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descPNWDua)}
                  </Text>
                  <br />
                  <b>Durasi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.durasiPNWDua)}
                  </Text>
                  <br />
                  <b>Hasil Akhir:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.hasilPNWDua)}
                  </Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  ></Box>
                </Box>
              }
            />

            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.pnwTilu)}
                </Heading>
              }
              body={
                <Box>
                  <b>Deskripsi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descPNWTilu)}
                  </Text>
                  <br />
                  <b>Durasi:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.durasiPNWTilu)}
                  </Text>
                  <br />
                  <b>Hasil Akhir:</b>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.hasilPNWTilu)}
                  </Text>
                  <Box
                    mt={8}
                    display={{
                      base: "block",
                      md: "none",
                    }}
                  ></Box>
                </Box>
              }
            />
          </AutoExpandingList>
        </GridItem>
        <GridItem
          display={{
            base: "none",
            md: "flex",
          }}
          justifyContent="flex-end"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={expandingListProps.activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {expandingListProps.activeIndex in IMAGE_BY_INDEX &&
                IMAGE_BY_INDEX[
                  expandingListProps.activeIndex as keyof typeof IMAGE_BY_INDEX
                ]}
            </motion.div>
          </AnimatePresence>
        </GridItem>
      </Grid>
    </Container>
  );
}
