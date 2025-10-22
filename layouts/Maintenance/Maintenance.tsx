import { Flex, chakra } from "@/components/ui";

import "./Maintenance.module.css";

export function MaintenanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" alignItems="stretch" minHeight="100svh">
      <chakra.main
        flexGrow={1}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
      >
        {children}
      </chakra.main>
    </Flex>
  );
}
