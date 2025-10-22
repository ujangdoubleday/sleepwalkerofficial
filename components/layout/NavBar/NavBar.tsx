import { useNavLinks } from "@/shared/navLinks/useNavLinks";
import { NavBar as BaseNavBar } from "@/components/ui";

export function NavBar() {
  const navLinks = useNavLinks();

  return <BaseNavBar content={navLinks} sticky />;
}
