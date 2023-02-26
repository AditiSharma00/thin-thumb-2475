import React, { useState, useEffect } from "react";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Button,
  Alert,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
    console.log(items);
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (index, newQuantity) => {
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  const handlePlaceOrder = () => {
    setShowAlert(true);

    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <Box width="100%" p="4">
      <Heading size="md" mb="4">
        My Cart
      </Heading>
      <Flex direction={"column"} width={"40%"} height={"30%"}>
        {cartItems.map((item, index) => (
          <Box
            key={item.product}
            mt={"20px"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            borderRadius={"20px"}
          >
            <Image src={item.image} alt={item.title} width={"20%"} />
            <Text fontSize="md" fontWeight="semibold" noOfLines={1}>
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.600" noOfLines={1}>
              {item.description}
            </Text>
            <Text fontSize="md" fontWeight="semibold" mb="2">
              {+item.price}
            </Text>
            <Box display="flex" alignItems="center">
              <Button
                size="sm"
                variant="outline"
                mr="2"
                onClick={() => handleQuantityChange(index, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </Button>
              <Text fontSize="md" fontWeight="semibold">
                {item.quantity}
              </Text>
              <Button
                size="sm"
                variant="outline"
                ml="2"
                onClick={() => handleQuantityChange(index, item.quantity + 1)}
              >
                +
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
      {cartItems.length > 0 ? (
        <Box mt="4">
          <Text fontSize="lg" fontWeight="bold" textAlign="right">
            Total Price: {+totalPrice}
          </Text>
          <Center>
            <Button mt="4" colorScheme="blue" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </Center>
        </Box>
      ) : (
        <Box
          my="4"
          textAlign="center"
          boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
          borderRadius={"20px"}
          mt={"30px"}
        >
          Your cart is empty. <Link to="/">Start shopping now!</Link>
        </Box>
      )}
      {showAlert && (
        <Alert status="success" mt="4">
          <AlertIcon />
          Your order has been placed. Thank you for shopping with us!
        </Alert>
      )}
    </Box>
  );
};

export default CartPage;
