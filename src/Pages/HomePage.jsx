import { Box } from "@chakra-ui/react";
import React from "react";
import Firstdiv from "../Components/HomePageComponents/Firstdiv";
import Seconddiv from "../Components/HomePageComponents/Seconddiv";
import Thirddiv from "../Components/HomePageComponents/Thirddiv";

const HomePage = () => {
  return (
    <Box pt={"120px"}>
      <Firstdiv />
      <Seconddiv />
      <Thirddiv />
    </Box>
  );
};

export default HomePage;
