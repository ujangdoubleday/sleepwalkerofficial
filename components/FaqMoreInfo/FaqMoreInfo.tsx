import { ReactNode } from "react";
import { 
  Text, 
  Box, 
  chakra 
} from "@/lib/ui";

import { CONSTANTS } from "@/shared/constants";

export function FaqMoreInfo() {
  return (
    <Box
      my={{
        base: "50px",
        md: "100px",
        lg: "150px",
      }}
    >
      <Text textStyle="h5" textAlign="center">
        Tidak melihat jawaban atas pertanyaan yang Anda miliki? Hubungi kami di{" "}
        <TextLink href={CONSTANTS.SOCIAL_LINKS.whatsapp}>Whatsapp</TextLink>.
      </Text>
    </Box>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <chakra.a
      href={href}
      target="_blank"
      rel="noreferrer"
      textDecoration="underline"
      textDecorationThickness="2px"
    >
      {children}
    </chakra.a>
  );
}
