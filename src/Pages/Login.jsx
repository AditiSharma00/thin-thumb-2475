import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useReducer } from "react";
// import { AuthContext } from "../Contexts/AuthContextProvider";
import { Link as RouteLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const initState = {
  email: "",
  password: "",
};

// function for changing the formState using useReducer hook
const reducer = (state, action) => {
  switch (action.type) {
    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default function Login() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  // const { login } = useContext(AuthContext);
  const [formState, dispatch] = useReducer(reducer, initState);

  //   this function will handle the change of input and will dispatch the data to the reducer function
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will call the
  const handleSubmit = () => {
    if (!formState.email || !formState.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, formState.email, formState.password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#ffecf0", "red.800")}
      pt={"50px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} color={"gray.600"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool{" "}
            <Link color={"red.400"} as={RouteLink} to="/">
              features
            </Link>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          //   boxShadow={"lg"}
        >
          <Stack>
            <Stack spacing={4} p={8}>
              <FormControl id="email" outlineColor={"red.400"}>
                <FormLabel>Email address</FormLabel>

                <Input
                  type="email"
                  placeholder="Enter registered email"
                  focusBorderColor="red.400"
                  name="email"
                  onChange={handleChange}
                  value={formState.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  focusBorderColor="red.400"
                  placeholder="Enter password"
                  name="password"
                  onChange={handleChange}
                  value={formState.password}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"red.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                  disabled={submitButtonDisabled}
                  onClick={handleSubmit}
                >
                  Sign in
                </Button>
                <Text fontSize={"xl"} color={"red.400"} mt={"-20px"}>
                  Are you new?{" "}
                  <RouteLink to={"/signup"}>Sign Up Here</RouteLink>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
