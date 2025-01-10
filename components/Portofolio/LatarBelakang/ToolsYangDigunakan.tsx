import { defineMessages, useIntl } from "react-intl";
import { 
  Box, 
  Text, 
  Container 
} from "@/lib/ui";

const messages = defineMessages({
  title: {
    id: "Tools.title",
    defaultMessage: "Tools yang Digunakan",
  },
  subTitle: {
    id: "Tools.subTitle",
    defaultMessage:
      "Canva, Google Analytics, Facebook Ads Manager dan Platform Ads Manager lainnya.",
  },
});

export function ToolsYangDigunakan() {
  const { formatMessage } = useIntl();
  return (
    <Box
      bg="white"
      py={{
        base: 24,
        lg: 32,
        xl: "50px",
      }}
      px={{
        base: 4,
      }}
    >
      <Container maxW="1000px" textAlign="center" p={0}>
        <Text as="h2" textStyle="h3" color="black" mb={8}>
          {formatMessage(messages.title)}
        </Text>
        <Text
          color="#111"
          textStyle="lg"
          maxW="40ch"
          margin="0 auto 2rem"
          mb={16}
        >
          {formatMessage(messages.subTitle)}
        </Text>
      </Container>
    </Box>
  );
}
