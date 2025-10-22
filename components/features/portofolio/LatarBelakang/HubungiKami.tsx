import { defineMessages, useIntl } from "react-intl";
import Link from "next/link";
import {
  Box,
  Text,
  Container,
  Button,
  Flex,
  FancyArrowRight,
} from "@/components/ui";

const messages = defineMessages({
  heading: {
    id: "HubungiKami.heading",
    defaultMessage: "Proyek Selanjutnya: Milik Anda!",
  },
  hubungiKamiLink: {
    id: "hubungiKami.hubungiKamiLink",
    defaultMessage: "Hubungi Kami.",
  },
});

export function HubungiKami() {
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="blue.50"
      py={{
        base: 24,
        lg: 16,
        xl: "50px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container
        maxW="80ch"
        mb={8}
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <Text as="h2" textStyle="h3" mb={8}>
          {formatMessage(messages.heading)}
        </Text>
      </Container>
      <Flex
        alignItems={{
          base: "stretch",
          sm: "center",
        }}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
        justifyContent="center"
      >
        <Button size="sm" as={Link} href="/hubungi-kami">
          <Box mr={4}>Hubungi Kami</Box>
          <FancyArrowRight />
        </Button>
      </Flex>
    </Box>
  );
}
