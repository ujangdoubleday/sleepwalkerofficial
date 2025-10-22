import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { 
  Container, 
  Text, 
  Heading, 
  Grid, 
  GridItem, 
  Box 
} from "@/lib/ui";
import { AutoExpandingList, useAutoExpandingList } from "@/components/AutoExpandingList/AutoExpandingList";

import misi from "@/assets/TentangKami/Misi/misi.jpg";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={misi} />,
  1: <Image alt="" src={misi} />,
  2: <Image alt="" src={misi} />,
  3: <Image alt="" src={misi} />,
  4: <Image alt="" src={misi} />,
};

const messages = defineMessages({
  Misi: {
    id: "Misi.Misi",
    defaultMessage: "Misi",
  },
  misiSatu: {
    id: "Misi.misiSatu",
    defaultMessage: "Mendorong Inovasi",
  },
  descMisiSatu: {
    id: "Misi.descMisiSatu",
    defaultMessage:
      "Mengembangkan produk clothing yang kreatif dan berkualitas tinggi seperti Jersey, T-Shirt, Hoodie, Kemeja, dan Jaket dengan desain modern dan bahan premium.",
  },
  misiDua: {
    id: "Misi.misiDua",
    defaultMessage: "Membangun Kolaborasi",
  },
  descMisiDua: {
    id: "Misi.descMisiDua",
    defaultMessage:
      "Membentuk tim yang solid dan kolaboratif, berlandaskan nilai kerja sama untuk menghasilkan solusi terbaik bagi pelanggan.",
  },
  misiTilu: {
    id: "Misi.misiTilu",
    defaultMessage: "Melayani dengan Dedikasi",
  },
  descMisiTilu: {
    id: "Misi.descMisiTilu",
    defaultMessage:
      "Memberikan layanan konsultasi pengembangan produk, dukungan pelanggan, dan pelatihan dengan fokus pada kebutuhan dan kepuasan pelanggan.",
  },
  misiOpat: {
    id: "Misi.misiOpat",
    defaultMessage: "Menciptakan Dampak Positif",
  },
  descMisiOpat: {
    id: "Misi.descMisiOpat",
    defaultMessage:
      "Terus berkarya untuk memberikan kontribusi nyata bagi masyarakat dan industri, sesuai dengan filosofi 'terjaga di tengah mimpi, berjalan menuju tujuan.'",
  },
  misiLima: {
    id: "Misi.misiLima",
    defaultMessage: "Menjaga Kualitas dan Inovasi",
  },
  descMisiLima: {
    id: "Misi.descMisiLima",
    defaultMessage:
      "Memastikan setiap produk dirancang dengan standar kualitas tinggi, mengutamakan kenyamanan, fungsionalitas, dan keberlanjutan.",
  },
});

export function Misi() {
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
            {formatMessage(messages.Misi)}
          </Text>

          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.misiSatu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMisiSatu)}
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
                  {formatMessage(messages.misiDua)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMisiDua)}
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
                  {formatMessage(messages.misiTilu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMisiTilu)}
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
                  {formatMessage(messages.misiOpat)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMisiOpat)}
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
                  {formatMessage(messages.misiLima)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descMisiLima)}
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
