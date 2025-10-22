import { Flex, chakra } from "@/components/ui";

import { Footer } from "@/components/layout/Footer/Footer";
import { NavBar } from "@/components/layout/NavBar/NavBar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" alignItems="stretch" minHeight="100svh">
      <NavBar />
      <chakra.main
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
      >
        {children}
      </chakra.main>
      <Footer />
    </Flex>
  );
}
