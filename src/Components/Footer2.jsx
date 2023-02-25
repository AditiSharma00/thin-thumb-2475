import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

// import AppStoreBadge from "@/components/AppStoreBadge";
// import PlayStoreBadge from "@/components/PlayStoreBadge";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer2() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("red.700", "red.700")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={3}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ md: "space-around" }}
      >
        <Text color={"red.500"} fontWeight={"700"}>
          Nutrients & Allergens
        </Text>
        <Text color={"red.500"} fontWeight={"700"}>
          Press room
        </Text>
        <Text color={"red.500"} fontWeight={"700"}>
          Careers
        </Text>
        <Text color={"red.500"} fontWeight={"700"}>
          Customer Support
        </Text>

        <div>
          Do business with us Terms and Conditions of Use Privacy Policy
          California Privacy Notice Cookie and Internet-Based Advertising Policy
          Do Not Sell Or Share My Personal Information Cookie Preference Center
          Accessibility Locations listing Legal © 2022 CFA Properties, Inc. All
          rights reserved.
        </div>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
