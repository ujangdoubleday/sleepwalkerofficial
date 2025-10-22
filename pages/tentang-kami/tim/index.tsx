import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import { useMemo } from "react";
import { useIsClient } from "usehooks-ts";
import {
  Box,
  Text,
  Grid,
  GridItem,
  ShadowBox,
  AspectRatio,
  useFilterOptions,
} from "@/components/ui";

import { TIM, NAMA } from "@/data/tentang-kami/tim";

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
].concat(
  NAMA.map((type) => ({
    label: type,
    value: kebabCase(type),
  }))
);

function Cards() {
  const { query } = useRouter();
  const defaultOption = useMemo(() => {
    if (query.category && typeof query.category === "string") {
      return filterOptions.find((option) => option.value === query.category);
    }
  }, [query]);

  const { selectedOption } = useFilterOptions(filterOptions, defaultOption);

  const filteredOptions = TIM.filter((item) =>
    selectedOption.value === "all"
      ? true
      : kebabCase(item.nama) === selectedOption.value
  );

  return (
    <>
      <Grid
        templateColumns={{
          base: "100%",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {filteredOptions.map((item) => {
          return (
            <GridItem key={item.jabatan} display="flex">
              <ShadowBox
                shadowColor="blue.900"
                borderWidth="2px"
                borderRadius="4px"
              >
                <AspectRatio borderBottom="2px solid black">
                  <Image alt="" src={item.image} fill />
                </AspectRatio>
                <Box p={8} pb={16}>
                  <Text textStyle="sm" mb={4}>
                    {item.nama}
                  </Text>
                  <Text as="h3" textStyle="h4" marginBottom={1}>
                    {item.jabatan}
                  </Text>
                </Box>
              </ShadowBox>
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default function Tim() {
  const router = useRouter();
  const isClient = useIsClient();
  return (
    <>
      <NextSeo
        title="Sleep Walker Tentang Kami | TIM"
        description="Kenali tim profesional Sleep Walker yang berdedikasi untuk memberikan produk berkualitas tinggi dan layanan terbaik. Temukan cerita di balik tim kami dan komitmen kami terhadap inovasi."
        openGraph={{
          url: "https://sleepwalkerofficial.com/tentang-kami/tim",
          title: "Sleep Walker Tentang Kami | TIM",
          description:
            "Tim profesional Sleep Walker yang berkomitmen untuk menghadirkan solusi terbaik di setiap produk dan layanan.",
          images: [
            {
              url: "https://sleepwalkerofficial.com/images/logo_og.png",
              width: 800,
              height: 800,
              alt: "Sleep Walker Official",
            },
          ],
        }}
      />
      <Box mb="150px">
        <AspectRatio position="relative" ratio={1570 / 524}>
          <Image
            priority
            src="/images/hero/dua.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
        <br />

        <Box>{isClient && router.isReady && <Cards />}</Box>
      </Box>
    </>
  );
}
