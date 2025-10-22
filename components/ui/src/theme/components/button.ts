import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: "full", // <-- border radius is same for all variants and sizes
  fontWeight: "regular",
});

const sizes = {
  sm: defineStyle({
    fontSize: "sm",
    px: 4,
    py: 4,
  }),
  md: defineStyle({
    fontSize: "md",
    px: 7,
    py: 5,
  }),
  lg: defineStyle({
    fontSize: "lg",
    px: 8,
    py: 7,
  }),
};

const variants = {
  solid: defineStyle({
    border: "1.5px solid",
    borderColor: "black",
    color: "black",
    bg: "blue.500",
    boxShadow: "2px 3px 0px black",

    ":hover": {
      bg: "blue.900",
    },
  }),
  outline: defineStyle({
    border: "2px solid",
    borderColor: "blue.900",
    color: "blue.900",
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "blue",
  },
});
