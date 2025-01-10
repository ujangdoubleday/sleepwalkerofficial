import { defineMessages, useIntl } from "react-intl";
import { useState, useEffect } from "react";
import { 
  Box, 
  Text, 
  Container 
} from "@/lib/ui";


const messages = defineMessages({
  heading: {
    id: "Building.heading",
    defaultMessage: "Building",
  },
});

export function Building() {
  const { formatMessage } = useIntl();
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) return "";
        return prevDots + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      bg="white.500"
      py={{
        base: 24,
        lg: 32,
        xl: "150px",
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
          {dots}
        </Text>
      </Container>
    </Box>
  );
}
