import { NextSeo } from "next-seo";
import Image from "next/image";
import { defineMessages, useIntl } from "react-intl";
import { BsWhatsapp, BsInstagram, BsMailbox, BsTelegram } from "react-icons/bs";
import {
  Box,
  Container,
  Text,
  Grid,
  ShadowBox,
  AspectRatio,
  Flex,
} from "@/components/ui";

const messages = defineMessages({
  hubungiKami: {
    id: "HubungiKami.HubungiKami",
    defaultMessage: "Hubungi Kami",
  },
  hubungiKamiSubtitle: {
    id: "HubungiKami.HubungiKamiSubtitle",
    defaultMessage:
      "Kami selalu siap menjawab pertanyaan dan mendengar masukan Anda. Jangan ragu untuk menghubungi kami melalui platform berikut:",
  },
  contactWhatsapp: {
    id: "HubungiKami.contactWhatsapp",
    defaultMessage: "Whatsapp",
  },
  contactWhatsappDescription: {
    id: "HubungiKami.contactWhatsappDescription",
    defaultMessage: "Klik atau dapat menghubungi nomor berikut: 082130718572",
  },
  contactTelegram: {
    id: "HubungiKami.contactTelegram",
    defaultMessage: "Telegram",
  },
  contactTelegramDescription: {
    id: "HubungiKami.contactTelegramDescription",
    defaultMessage:
      "Klik atau dapat menghubungi dengan username Telegram berikut: @SleepwalkerCS",
  },
  contactInstagram: {
    id: "HubungiKami.contactInstagram",
    defaultMessage: "Instagram",
  },
  contactInstagramDescription: {
    id: "HubungiKami.contactInstagramDescription",
    defaultMessage:
      "Klik atau dapat menghubungi dengan username Instagram berikut: @_sleepwalkerofficial",
  },
  contactEmail: {
    id: "HubungiKami.contactEmail",
    defaultMessage: "Email",
  },
  contactEmailDescription: {
    id: "HubungiKami.contactEmailDescription",
    defaultMessage:
      "Klik atau dapat menghubungi dengan alamat Email berikut: contact@sleepwalkerofficial.com",
  },
});

const links = {
  whatsapp:
    "https://api.whatsapp.com/send/?phone=6282130718572&text&type=phone_number&app_absent=0",
  telegram: "https://t.me/SleepwalkerCS",
  instagram: "https://www.instagram.com/_sleepwalkerofficial/",
  email: "mailto:contact@sleepwalkerofficial.com",
};

export default function HubungiKami() {
  const { formatMessage } = useIntl();
  return (
    <>
      <NextSeo
        title="Sleep Walker Kontak | Hubungi Kami"
        description="Hubungi Sleep Walker untuk informasi lebih lanjut mengenai layanan kami. Tim kami siap membantu Anda dengan solusi terbaik untuk kebutuhan bisnis Anda."
        openGraph={{
          url: "https://sleepwalkerofficial.com/hubungi-kami",
          title: "Sleep Walker Kontak | Hubungi Kami",
          description:
            "Tersedia kontak mudah melalui email, telepon, dan media sosial untuk mendukung kebutuhan bisnis Anda bersama Sleep Walker.",
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
      <Box>
        <AspectRatio position="relative" ratio={1570 / 524}>
          <Image
            priority
            src="/images/hero/genepbelas.png"
            alt="Hero Sejarah Kami"
            style={{ objectFit: "contain" }}
            fill
          />
        </AspectRatio>
      </Box>
      <Box borderBottom="1px solid black">
        <Container w="100%" maxW="container.xl" px={16} pt={20} pb={32}>
          <Text textStyle="h3" mb={2}>
            {formatMessage(messages.hubungiKami)}
          </Text>
          <Text textStyle="h6" mb={10} maxW="550px">
            {formatMessage(messages.hubungiKamiSubtitle)}
          </Text>
          <Box mb={10}>
            <Grid
              templateColumns={{
                base: "1fr",
                xl: "repeat(3, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
            >
              {/* WHATSAPP */}
              <ShadowBox
                as="a"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
                shadowColor="white"
                borderWidth="2px"
                borderRadius="4px"
                h="222px"
                cursor="pointer"
                hoverShadowColor="black"
                transition="transform 0.2s"
              >
                <Box
                  p={8}
                  h="full"
                  display="flex"
                  flexDir="column"
                  justifyContent="space-between"
                >
                  <div>
                    <Box
                      bg="#FFCD8580"
                      display="flex"
                      alignItems="center"
                      gap={2}
                      px={3}
                      py={1}
                      borderRadius="full"
                      mb={8}
                      width="fit-content"
                    >
                      <Star />
                      <Text color="#97641B" fontSize="xs">
                        Rekomendasi
                      </Text>
                    </Box>
                  </div>
                  <Box>
                    <Flex alignItems="center" mb={2}>
                      <BsWhatsapp size={30} style={{ marginRight: "8px" }} />
                      <Text
                        fontFamily="FavoritExtendedIF"
                        fontSize={{
                          base: "16px",
                          sm: "20px",
                        }}
                      >
                        {formatMessage(messages.contactWhatsapp)}
                      </Text>
                    </Flex>
                    <Text
                      color="gray.600"
                      fontSize={{
                        base: "12px",
                        sm: "16px",
                      }}
                    >
                      {formatMessage(messages.contactWhatsappDescription)}
                    </Text>
                  </Box>
                </Box>
              </ShadowBox>

              {/* TELEGRAM */}
              <ShadowBox
                as="a"
                href={links.telegram}
                target="_blank"
                rel="noreferrer"
                shadowColor="white"
                borderWidth="2px"
                borderRadius="4px"
                h="222px"
                cursor="pointer"
                transition="transform 0.2s"
                hoverShadowColor="black"
              >
                <Box
                  p={8}
                  h="full"
                  display="flex"
                  flexDir="column"
                  justifyContent="flex-end"
                >
                  <Box>
                    <Flex alignItems="center" mb={2}>
                      <BsTelegram size={30} style={{ marginRight: "8px" }} />
                      <Text
                        fontFamily="FavoritExtendedIF"
                        fontSize={{
                          base: "16px",
                          sm: "20px",
                        }}
                      >
                        {formatMessage(messages.contactTelegram)}
                      </Text>
                    </Flex>
                    <Text
                      color="gray.600"
                      fontSize={{
                        base: "12px",
                        sm: "16px",
                      }}
                    >
                      {formatMessage(messages.contactTelegramDescription)}
                    </Text>
                  </Box>
                </Box>
              </ShadowBox>

              {/* INSTAGRAM */}
              <ShadowBox
                as="a"
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                shadowColor="white"
                borderWidth="2px"
                borderRadius="4px"
                h="222px"
                cursor="pointer"
                transition="transform 0.2s"
                hoverShadowColor="black"
              >
                <Box
                  p={8}
                  h="full"
                  display="flex"
                  flexDir="column"
                  justifyContent="flex-end"
                >
                  <Box>
                    <Flex alignItems="center" mb={2}>
                      <BsInstagram size={30} style={{ marginRight: "8px" }} />
                      <Text
                        fontFamily="FavoritExtendedIF"
                        fontSize={{
                          base: "16px",
                          sm: "20px",
                        }}
                      >
                        {formatMessage(messages.contactInstagram)}
                      </Text>
                    </Flex>
                    <Text
                      color="gray.600"
                      fontSize={{
                        base: "12px",
                        sm: "16px",
                      }}
                    >
                      {formatMessage(messages.contactInstagramDescription)}
                    </Text>
                  </Box>
                </Box>
              </ShadowBox>
            </Grid>
            <br />

            {/* EMAIL */}
            <ShadowBox
              as="a"
              href={links.email}
              target="_blank"
              rel="noreferrer"
              shadowColor="white"
              borderWidth="2px"
              borderRadius="4px"
              h="222px"
              cursor="pointer"
              transition="transform 0.2s"
              hoverShadowColor="black"
            >
              <Box
                p={8}
                h="full"
                display="flex"
                flexDir="column"
                justifyContent="flex-end"
              >
                <Box>
                  <Flex alignItems="center" mb={2}>
                    <BsMailbox size={30} style={{ marginRight: "8px" }} />
                    <Text
                      fontFamily="FavoritExtendedIF"
                      fontSize={{
                        base: "16px",
                        sm: "20px",
                      }}
                    >
                      {formatMessage(messages.contactEmail)}
                    </Text>
                  </Flex>
                  <Text
                    color="gray.600"
                    fontSize={{
                      base: "12px",
                      sm: "16px",
                    }}
                  >
                    {formatMessage(messages.contactEmailDescription)}
                  </Text>
                </Box>
              </Box>
            </ShadowBox>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const Star = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.28816 12.7556C4.13685 12.8468 3.95018 12.7114 3.99 12.5392L4.93969 8.43365C4.95639 8.36148 4.93182 8.28599 4.87585 8.23747L1.69049 5.47585C1.55699 5.3601 1.62818 5.14076 1.80421 5.12548L6.01347 4.76009C6.08731 4.75368 6.15154 4.70697 6.1804 4.6387L7.81594 0.76889C7.88477 0.606037 8.11556 0.606037 8.18438 0.768891L9.81993 4.6387C9.84878 4.70697 9.91302 4.75368 9.98685 4.76009L14.1961 5.12548C14.3721 5.14076 14.4433 5.3601 14.3098 5.47585L11.1245 8.23747C11.0685 8.28599 11.0439 8.36148 11.0606 8.43365L12.0103 12.5392C12.0501 12.7114 11.8635 12.8468 11.7122 12.7556L8.10347 10.5787C8.03993 10.5403 7.96039 10.5403 7.89686 10.5787L4.28816 12.7556Z"
        fill="#97641B"
      />
    </svg>
  );
};
