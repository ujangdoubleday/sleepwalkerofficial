import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { defineMessages, useIntl } from "react-intl";
import { Container, Text, Heading, Grid, GridItem, Box } from "@/components/ui";
import {
  AutoExpandingList,
  useAutoExpandingList,
} from "@/components/common/AutoExpandingList/AutoExpandingList";

import keunggulan from "@/assets/Layanan/PengembanganProduk/keunggulan-kami.png";

export const CHIP_COLOR = "#C7F182";

const IMAGE_BY_INDEX = {
  0: <Image alt="" src={keunggulan} />,
  1: <Image alt="" src={keunggulan} />,
  2: <Image alt="" src={keunggulan} />,
  3: <Image alt="" src={keunggulan} />,
};

const messages = defineMessages({
  KeunggulanKami: {
    id: "Keunggulan.Keunggulan",
    defaultMessage: "Keunggulan Kami",
  },
  keunggulanSatu: {
    id: "Keunggulan.keunggulanSatu",
    defaultMessage: "Tim Berpengalaman",
  },
  descKeunggulanSatu: {
    id: "Keunggulan.descKeunggulanSatu",
    defaultMessage: "Ahli di bidang desain, teknologi, dan strategi bisnis.",
  },
  keunggulanDua: {
    id: "Keunggulan.keunggulanDua",
    defaultMessage: "Pendekatan Berbasis Teknologi",
  },
  descKeunggulanDua: {
    id: "Keunggulan.descKeunggulanDua",
    defaultMessage:
      "Menggunakan teknologi terkini untuk menciptakan produk inovatif.",
  },
  keunggulanTilu: {
    id: "Keunggulan.keunggulanTilu",
    defaultMessage: "Proses Efisien",
  },
  descKeunggulanTilu: {
    id: "Keunggulan.descKeunggulanTilu",
    defaultMessage:
      "Fokus pada kualitas dengan waktu pengembangan yang optimal.",
  },
  keunggulanOpat: {
    id: "Keunggulan.keunggulanOpat",
    defaultMessage: "Custom Solution",
  },
  descKeunggulanOpat: {
    id: "Keunggulan.descKeunggulanOpat",
    defaultMessage: "Produk yang disesuaikan dengan kebutuhan bisnis Anda.",
  },
});

export function Keunggulan() {
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
            {formatMessage(messages.KeunggulanKami)}
          </Text>

          <AutoExpandingList {...expandingListProps}>
            <AutoExpandingList.Item
              chipColor={CHIP_COLOR}
              heading={
                <Heading fontSize="xl">
                  {formatMessage(messages.keunggulanSatu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descKeunggulanSatu)}
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
                  {formatMessage(messages.keunggulanDua)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descKeunggulanDua)}
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
                  {formatMessage(messages.keunggulanTilu)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descKeunggulanTilu)}
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
                  {formatMessage(messages.keunggulanOpat)}
                </Heading>
              }
              body={
                <Box>
                  <Text textAlign={"justify"}>
                    {formatMessage(messages.descKeunggulanOpat)}
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
