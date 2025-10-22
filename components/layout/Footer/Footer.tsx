import Link from "next/link";
import { BsWhatsapp, BsInstagram, BsTiktok, BsTelegram } from "react-icons/bs";
import { useNavLinks } from "@/shared/navLinks/useNavLinks";
import { CONSTANTS } from "@/shared/constants";
import { CategoryNavItem } from "@/components/ui";
import {
  Box,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
  GridItem,
} from "@/components/ui";

export function Footer() {
  const links = useNavLinks();
  return (
    <Box
      bg="black"
      color="white"
      py={24}
      px={{
        base: 8,
        md: 16,
      }}
    >
      <Box
        display={{
          base: "grid",
          lg: "flex",
        }}
        mb={24}
        justifyContent="space-between"
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: undefined,
        }}
      >
        {links
          .filter((link): link is CategoryNavItem => "items" in link)
          .map((category, i, arr) => {
            const categoryColor = `${category.color}.500`;
            return (
              <GridItem
                key={i}
                mb={{
                  base: 16,
                  lg: 0,
                }}
                mr={
                  arr.length === i + 1
                    ? {
                        base: 0,
                        lg: "3vw",
                      }
                    : undefined
                }
              >
                <Text color={categoryColor} fontStyle="sm" mb={3}>
                  {category.label}
                </Text>
                <List>
                  {category.items.map((item, i) => {
                    return (
                      <ListItem key={i} mb={3}>
                        <Text
                          as={Link}
                          href={item.href}
                          fontStyle="sm"
                          color="rgba(255, 255, 255, 0.7)"
                          _hover={{
                            color: categoryColor,
                            transition: "color 0.2s",
                            opacity: 1,
                          }}
                        >
                          {item.title}
                        </Text>
                      </ListItem>
                    );
                  })}
                </List>
              </GridItem>
            );
          })}
      </Box>
      <Flex
        alignItems={{
          base: "flex-start",
          lg: "center",
        }}
        w="100%"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
      >
        <Flex
          alignItems="center"
          w="100%"
          mb={{
            base: 16,
            lg: 0,
          }}
        >
          <Flex
            ml={4}
            alignItems={{
              base: "flex-start",
              md: "center",
            }}
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <Text
              as={Link}
              href="/kebijakan-privasi"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Kebijakan Privasi
            </Text>
            <Text
              mx={2}
              display={{
                base: "none",
                md: "block",
              }}
            >
              |
            </Text>

            <Text>
              © Sleep Walker Official {new Date().getFullYear()}. Hak Cipta
              Dilindungi.
            </Text>
          </Flex>
        </Flex>

        <HStack
          alignItems="center"
          flexGrow={1}
          justifyContent={{
            base: "space-between",
            lg: "flex-end",
          }}
          w={{
            base: "100%",
            lg: "auto",
          }}
          gap={{
            base: 4,
            md: 16,
          }}
        >
          <Link
            href={CONSTANTS.SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={30} />
          </Link>

          <Link
            href={CONSTANTS.SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={30} />
          </Link>

          <Link
            href={CONSTANTS.SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noreferrer"
          >
            <BsTiktok size={30} />
          </Link>

          <Link
            href={CONSTANTS.SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noreferrer"
          >
            <BsTelegram size={30} />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
