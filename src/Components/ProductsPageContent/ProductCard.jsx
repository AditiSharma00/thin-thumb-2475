import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Center, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthProvider";

const ProductCard = ({ data }) => {
  const user = useAuth();
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = () => {
    if (user !== null) {
      // User is logged in
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const obj = {
        product: data.id,
        price: data.price,
        title: data.title,
        image: data.image,
        description: data.description,
        userEmail: user.email,
      };
      cartItems.push(obj);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartMessage("Item added to cart!");
    } else {
      // User is not logged in
      setCartMessage("Please log in to add to cart.");
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
          <Text color={"gray.600"} fontSize={"15px"} maxW={"100%"}>
            {data.description}
          </Text>
          <Text color={"gray.600"} fontSize={"md"} maxW={"100%"}>
            {data.price}
          </Text>
          <Center>
            <Button
              variant="outline"
              color={"white"}
              backgroundColor={"red.500"}
              w={"fit-content"}
              textAlign={"center"}
              p={1}
              onClick={handleAddToCart}
            >
              {cartMessage ? cartMessage : "Add to cart"}
            </Button>
          </Center>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
