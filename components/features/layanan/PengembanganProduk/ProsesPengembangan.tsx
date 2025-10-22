import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { Container, Text, Heading, Grid, GridItem, Box } from "@/components/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/common/AutoExpandingList/AutoExpandingList";

import proses from "@/assets/Layanan/PengembanganProduk/proses-pengembangan.png";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={proses} />,
  1: <Image alt="" src={proses} />,
  2: <Image alt="" src={proses} />,
  3: <Image alt="" src={proses} />,
  4: <Image alt="" src={proses} />,
};

const messages = defineMessages({
  ProsesPengembangan: {
    id: "ProsesPengembangan.ProsesPengembangan",
    defaultMessage: "Proses Pengembangan",
  },
  prosesSatu: {
    id: "ProsesPengembangan.prosesSatu",
    defaultMessage: "Konsultasi dan Riset Kebutuhan",
  },
  descProsesSatu: {
    id: "ProsesPengembangan.descProsesSatu",
    defaultMessage:
      "Kami mempelajari kebutuhan spesifik Anda untuk menciptakan solusi yang tepat.",
  },
  prosesDua: {
    id: "ProsesPengembangan.prosesDua",
    defaultMessage: "Ideasi dan Perancangan",
  },
  descProsesDua: {
    id: "ProsesPengembangan.descKeunggulanDua",
    defaultMessage:
      "Membuat prototype awal berdasarkan konsep yang telah dibahas.",
  },
  prosesTilu: {
    id: "ProsesPengembangan.prosesTilu",
    defaultMessage: "Pengembangan",
  },
  descProsesTilu: {
    id: "ProsesPengembangan.descProsesTilu",
    defaultMessage:
      "Implementasi desain ke dalam bentuk produk yang dapat digunakan.",
  },
  prosesOpat: {
    id: "ProsesPengembangan.prosesOpat",
    defaultMessage: "Pengujian dan Validasi",
  },
  descProsesOpat: {
    id: "ProsesPengembangan.descProsesOpat",
    defaultMessage:
      "Memastikan produk berfungsi dengan baik melalui pengujian menyeluruh.",
  },
  prosesLima: {
    id: "ProsesPengembangan.prosesLima",
    defaultMessage: "Peluncuran dan Dukungan Pasca-Implementasi",
  },
  descProsesLima: {
    id: "ProsesPengembangan.descProsesLima",
    defaultMessage: "Pendampingan setelah produk dirilis ke pasar.",
  },
});

export function ProsesPengembangan() {
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
            {formatMessage(messages.ProsesPengembangan)}
          </Text>

          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.prosesSatu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descProsesDua)}
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
                  {formatMessage(messages.prosesDua)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descProsesDua)}
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
                  {formatMessage(messages.prosesTilu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descProsesTilu)}
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
                  {formatMessage(messages.prosesOpat)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descProsesOpat)}
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
                  {formatMessage(messages.prosesLima)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descProsesLima)}
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
