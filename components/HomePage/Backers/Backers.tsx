import Marquee from "react-fast-marquee";
import Image from "next/image";
import { defineMessages, useIntl } from "react-intl";
import { 
  Box, 
  Text, 
  useBreakpointValue 
} from "@/lib/ui";

import Logo1 from "@/assets/Homepage/Backers/Logo-1.png";
import Logo2 from "@/assets/Homepage/Backers/Logo-2.png";
import Logo3 from "@/assets/Homepage/Backers/Logo-3.png";
import Logo4 from "@/assets/Homepage/Backers/Logo-4.png";
import Logo5 from "@/assets/Homepage/Backers/Logo-5.png";
import Logo6 from "@/assets/Homepage/Backers/Logo-6.png";
import Logo7 from "@/assets/Homepage/Backers/Logo-7.png";
import Logo8 from "@/assets/Homepage/Backers/Logo-8.png";
import Logo9 from "@/assets/Homepage/Backers/Logo-9.png";
import Logo10 from "@/assets/Homepage/Backers/Logo-10.png";

const messages = defineMessages({
  heading: {
    id: "Backers.heading",
    defaultMessage: "Didukung oleh veteran dan investor terkemuka",
  },
});

export function Backers() {
  const { formatMessage } = useIntl();

  const height = useBreakpointValue({
    base: 60,
    lg: 70,
  });

  const margin = useBreakpointValue({
    base: 10,
    lg: 16,
  });

  return (
    <Box mb={20}>
      <Text fontSize="md" textAlign="center" textTransform="uppercase" mb={8}>
        {formatMessage(messages.heading)}
      </Text>
      <Marquee autoFill>
        {[
          Logo1,
          Logo2,
          Logo3,
          Logo4,
          Logo5,
          Logo6,
          Logo7,
          Logo8,
          Logo9,
          Logo10,
        ].map((img, i) => (
          <Box key={i} mx={margin}>
            <Image src={img} height={height} alt="" loading="eager" />
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}
