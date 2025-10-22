import { Key, useMemo } from "react";
import { useRouter } from "next/router";
import { kebabCase } from "lodash-es";
import type { Product } from "@/data/produk/types";

interface FilterOption {
  label: string;
  value: string;
}

export const useFilter = (filterOptions: FilterOption[], items: Product[]) => {
  const { query, replace } = useRouter();

  const defaultOption = useMemo(() => {
    if (query.category && typeof query.category === "string") {
      return filterOptions.find((option) => option.value === query.category);
    }
    return filterOptions[0]; // Default to "Semua"
  }, [query, filterOptions]);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      defaultOption?.value === "all"
        ? true
        : kebabCase(item.type) === defaultOption?.value
    );
  }, [items, defaultOption]);

  const handleFilterChange = (option: FilterOption) => {
    replace(
      {
        query: {
          ...query,
          category: option.value,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return {
    defaultOption,
    filteredItems,
    handleFilterChange,
  };
};
