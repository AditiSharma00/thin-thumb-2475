import React, { useReducer, useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  InputGroup,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { postUser } from "../API/api";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
const Form1 = ({ formState, handleChange }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            focusBorderColor="red.400"
            value={formState.first_name}
            name={"first_name"}
            onChange={handleChange}
            isRequired={true}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            focusBorderColor="red.400"
            value={formState.last_name}
            name={"last_name"}
            onChange={handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email Id"
          focusBorderColor="red.400"
          value={formState.email}
          name={"email"}
          onChange={handleChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            focusBorderColor="red.400"
            value={formState.password}
            name={"password"}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

// initial state for sign up form
const intiState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  country: "",
  address: "",
  city: "",
  state: "",
  ZIP: "",
};

// reducer function to change the state of the form
const reducer = (state, action) => {
  switch (action.type) {
    case "first_name": {
      return {
        ...state,
        first_name: action.payload,
      };
    }
    case "last_name": {
      return {
        ...state,
        last_name: action.payload,
      };
    }
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

export default function Signup() {
  // const toast = useToast();
  // const [step, setStep] = useState(1);
  // const [progress, setProgress] = useState(50);
  const [errmsg, setErrmsg] = useState("");
  const navigate = useNavigate();
  const [formState, dispatch] = useReducer(reducer, intiState);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  //   this function will call the dispatch for formState
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  //   this function will handle the submit button
  const handleSubmit = () => {
    if (!formState.email || !formState.password || formState.name) {
      setErrmsg("Fill All Fields");
      return;
    }
    setErrmsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: formState.first_name,
        });
        console.log(updateProfile);
      })
      .catch((err) => {
        setErrmsg(err.message);
        setSubmitButtonDisabled(false);
        console.log("Error:", err);
      });

    console.log(formState.email, formState.password, formState.first_name);
    navigate("/login");
  };

  return (
    <Box py={"100px"} bg={useColorModeValue("#ffecf0", "red.800")} h={"100%"}>
      <Box
        borderWidth="1px"
        rounded="lg"
        maxWidth={600}
        p={6}
        m="10px auto"
        as="form"
        bg={useColorModeValue("white", "white")}
      >
        {/* <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
          colorScheme={"red"}
        ></Progress> */}

        <Form1 formState={formState} handleChange={handleChange} />

        {/* <Form2 formState={formState} handleChange={handleChange} />
        )} */}
        <p style={{ color: "red" }}>{errmsg}</p>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Button
              w="7rem"
              colorScheme="red"
              variant="solid"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Signup
            </Button>
          </Flex>
        </ButtonGroup>
        <Text fontSize={"xl"} color={"red.400"} pt={"20px"} w={"auto"}>
          Are you an existing customer?{" "}
          <RouteLink to={"/login"}>Login from Here</RouteLink>
        </Text>
      </Box>
    </Box>
  );
}
