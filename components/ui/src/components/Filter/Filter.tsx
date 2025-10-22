import { useCallback, useState, useMemo } from "react";
import { StackProps, Box, Flex, Text } from "@chakra-ui/react";
import { ShadowBox } from "../ShadowBox/ShadowBox";

type Option = {
  label: string;
  value: string;
};

export function useFilterOptions(
  options: Array<Option>,
  defaultOption?: Option
) {
  const [selectedOption, setSelectedOption] = useState<Option>(
    defaultOption ?? options[0]
  );

  const handleFilterChange = useCallback((option: Option) => {
    setSelectedOption(option);
  }, []);

  return useMemo(
    () => ({ options, selectedOption, handleFilterChange }),
    [handleFilterChange, options, selectedOption]
  );
}

type Props = Omit<StackProps, "onChange"> & {
  options: Array<Option>;
  selectedOption: Option;
  onChange: (option: Option) => void;
};

export function Filter({ options, selectedOption, onChange, ...rest }: Props) {
  return (
    <Flex
      justifyContent="center"
      flexWrap="wrap"
      gap={{ base: 2, md: 3 }}
      {...rest}
    >
      {options.map((option) => {
        const selected = option.value === selectedOption.value;
        return (
          <Box key={option.value}>
            <ShadowBox
              onClick={() => onChange(option)}
              shadowColor="white"
              borderRadius="2px"
              borderWidth="1.5px"
              cursor="pointer"
              offset="4px"
            >
              <Box
                px={{ base: 3, md: 5 }}
                py={{ base: 2, md: 3 }}
                bg={selected ? "black" : "white"}
                _hover={{ bg: selected ? "black" : "gray.100" }}
                _focus={{ bg: selected ? "black" : "gray.100" }}
              >
                <Text
                  textAlign="center"
                  whiteSpace="nowrap"
                  fontSize={{ base: "sm", md: "md" }}
                  color={selected ? "white" : undefined}
                >
                  {option.label}
                </Text>
              </Box>
            </ShadowBox>
          </Box>
        );
      })}
    </Flex>
  );
}
