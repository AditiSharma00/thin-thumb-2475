import { useDisclosure, Flex, Select } from "@chakra-ui/react";
import React from "react";

const ProductSidebar = ({ searchParams, setSearchParams }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let params = {};
  for (const entry of searchParams.entries()) {
    if (entry[0] === "start" || entry[0] === "end") {
      params[entry[0]] = +entry[1];
    } else {
      params[entry[0]] = entry[1];
    }
  }
  const handleSort = (e) => {
    let params = {};
    for (const entry of searchParams.entries()) {
      if (entry[0] === "start" || entry[0] === "end") {
        params[entry[0]] = +entry[1];
      } else {
        params[entry[0]] = entry[1];
      }
    }

    if (e.target.value === "default") {
      params.sort = undefined;
      params.order = undefined;
      setSearchParams({ ...params });
    } else {
      let [order, sort] = e.target.value.split("-");
      setSearchParams({ ...params, sort: sort, order: order });
    }
  };
  return (
    <Flex>
      <Select w="fit-content" onChange={handleSort}>
        <option value="default">Apply Sorting</option>
        <option value="asc-price">Sort by Price: low to high</option>
        <option value="desc-price">Sort by Price: high to low</option>
        <option value="desc-ratings">Top Ratings</option>
      </Select>
    </Flex>
  );
};

export default ProductSidebar;
