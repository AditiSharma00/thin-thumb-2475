import { Box, GridItem } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Skeleton } from "@chakra-ui/react";
import React from "react";
import Pagination from "./Pagination";

import ProductCard from "./ProductCard";

const ProductContainer = ({
  data,
  page,
  totalPages,
  setSearchParams,
  searchParams,
  loader,
}) => {
  const breakout = useBreakpointValue({
    base: "1fr",
    md: "repeat(5,1fr)",
  });
  if (loader) {
    return (
      <Box
        m="auto"
        w={"fit-content"}
        rowGap={10}
        columnGap={10}
        display={"grid"}
        gridTemplateColumns={breakout}
      >
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
        <Skeleton height={"300px"}>
          <div>fdsfsdfaaaaaaaaaaaaaaaaaaaa</div>
          <div>sdddsadasd</div>
        </Skeleton>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(3,1fr)"}
        w={"100%"}
        rowGap={10}
        columnGap={10}
      >
        {data &&
          data.map((el) => {
            return (
              <GridItem key={el.id} width={"100%"}>
                <ProductCard data={el} />
              </GridItem>
            );
          })}
      </Box>
      <Pagination
        page={page}
        totalPages={totalPages}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
    </Box>
  );
};

export default ProductContainer;
