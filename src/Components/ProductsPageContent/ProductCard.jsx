import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, HStack, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { SlHandbag } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { sendDataToCart } from "../../API/api";
// import { AuthContext } from "../../Contexts/AuthContextProvider";
import { useAuth } from "../../Contexts/AuthProvider";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const ProductCard = ({ data }) => {
  const user = useAuth();
  // const { currentUser } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    let obj = {
      user: user,
      product: data,
      qty: 1,
    };
    if (user) {
      sendDataToCart(obj)
        .then((res) => {
          toast({
            title: "Item added To your cart",
            description: "An item has been successfully added to your cart",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "Something went wrong try again letter",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Kindly Login",
        description: "Kindly login before adding any product in your cart",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      navigate("/login");
    }
  };

  return (
    <Box width={"100%"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        width={"100%"}
      >
        <Center>
          <Image src={data.image} w={"100%"} objectFit={"contain"} />
        </Center>
        <Stack mt="1" lineHeight={4}>
          <Text fontSize={"25px"} fontWeight={"bold"}>
            {data.title}
          </Text>
          <Text color={"gray.600"} fontSize={"15px"} noOfLines={1}>
            {data.description}
          </Text>
          <Text color={"gray.600"} size={"md"} noOfLines={1}>
            {data.price}
          </Text>

          <Center>
            <Button
              variant="outline"
              colorScheme="red"
              w={"fit-content"}
              textAlign={"center"}
              p={1}
              leftIcon={<SlHandbag />}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
