import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { Container, Text, Heading, Grid, GridItem, Box } from "@/components/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/common/AutoExpandingList/AutoExpandingList";

import why from "@/assets/Portofolio/bg-why-us.png";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={why} />,
  1: <Image alt="" src={why} />,
  2: <Image alt="" src={why} />,
  3: <Image alt="" src={why} />,
  4: <Image alt="" src={why} />,
  5: <Image alt="" src={why} />,
  6: <Image alt="" src={why} />,
};

const messages = defineMessages({
  MengapaKami: {
    id: "MengapaKami.MengapaKami",
    defaultMessage: "Mengapa Harus Kami?",
  },
  mengapaSatu: {
    id: "MengapaKami.mengapaSatu",
    defaultMessage: "Komitmen pada Kualitas",
  },
  descMengapaSatu: {
    id: "MengapaKami.descMengapaSatu",
    defaultMessage:
      "Sleep Walker selalu memastikan setiap produk dan layanan yang dihadirkan memiliki kualitas terbaik untuk memenuhi kebutuhan pelanggan.",
  },
  mengapaDua: {
    id: "MengapaKami.mengapaDua",
    defaultMessage: "Tim Profesional dan Berpengalaman",
  },
  descMengapaDua: {
    id: "MengapaKami.descMengapaDua",
    defaultMessage:
      "Kami didukung oleh tim ahli yang berdedikasi untuk memberikan solusi inovatif dan layanan profesional di setiap divisi.",
  },
  mengapaTilu: {
    id: "MengapaKami.mengapaTilu",
    defaultMessage: "Beragam Layanan untuk Kebutuhan Berbeda",
  },
  descMengapaTilu: {
    id: "MengapaKami.descMengapaTilu",
    defaultMessage:
      "Mulai dari Jersey, T-Shirt, Hoodie, Kemeja, hingga Jaket, kami menawarkan berbagai pilihan produk clothing berkualitas untuk kebutuhan fashion dan gaya hidup Anda.",
  },
  mengapaOpat: {
    id: "MengapaKami.mengapaOpat",
    defaultMessage: "Fokus pada Kepuasan Pelanggan",
  },
  descMengapaOpat: {
    id: "MengapaKami.descMengapaOpat",
    defaultMessage:
      "Kepuasan pelanggan adalah prioritas utama kami. Kami bekerja keras untuk memberikan pengalaman terbaik melalui produk unggulan dan layanan optimal.",
  },
  mengapaLima: {
    id: "MengapaKami.misiLima",
    defaultMessage: "Inovasi sebagai Nilai Utama",
  },
  descMengapaLima: {
    id: "Misi.descMisiLima",
    defaultMessage:
      "Dengan fokus pada inovasi, Sleep Walker selalu menghadirkan produk dan solusi terbaru yang relevan dengan perkembangan zaman.",
  },
  mengapaGenep: {
    id: "MengapaKami.mengapaGenep",
    defaultMessage: "Pelatihan dan Pengembangan",
  },
  descMengapaGenep: {
    id: "Misi.descMengapaGenep",
    defaultMessage:
      "Kami menyediakan pelatihan dan workshop untuk membantu tim Anda meningkatkan keterampilan serta memahami pengembangan produk secara mendalam.",
  },
  mengapaTujuh: {
    id: "MengapaKami.mengapaTujuh",
    defaultMessage: "Portofolio dan Rekam Jejak Terpercaya",
  },
  descMengapaTujuh: {
    id: "Misi.descMengapaTujuh",
    defaultMessage:
      "Dengan berbagai proyek sukses yang telah kami kerjakan, Sleep Walker adalah mitra terpercaya untuk mewujudkan kebutuhan bisnis Anda.",
  },
});

export function MengapaKamiYa() {
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
            {formatMessage(messages.MengapaKami)}
          </Text>

          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.mengapaSatu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaSatu)}
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
                  {formatMessage(messages.mengapaDua)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaDua)}
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
                  {formatMessage(messages.mengapaTilu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaTilu)}
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
                  {formatMessage(messages.mengapaOpat)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaOpat)}
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
                  {formatMessage(messages.mengapaLima)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaLima)}
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
                  {formatMessage(messages.mengapaGenep)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaGenep)}
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
                  {formatMessage(messages.mengapaTujuh)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMengapaTujuh)}
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
