import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  // useBreakpointValue, rew342
  useDisclosure,
  Img,
  ButtonGroup,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { BiMap } from "react-icons/bi";
import { Link as NaviLink, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
//import { AuthContext } from "../Contexts/AuthContextProvider";
export default function Navbar(props) {
  const [isOpeni, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  // console.log(props.name);
  const { isOpen, onToggle } = useDisclosure();
  // const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  // const toggle = () => setPopoverOpen(!popoverOpen);

  // const { isAuth, currentUser, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
    onClose();
    await auth.signOut();
    onClose();
    alert("You have been logged out.");
    navigate("/");
  };
  const handleDisplayNameClick = () => {
    navigate("/");
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Box position={"fixed"}>
      <Flex
        bg={useColorModeValue("white", "red.500")}
        color={useColorModeValue("red.500", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("red.500", "red.500")}
        align={"center"}
        position={"fixed"}
        width="100%"
        top="0"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NaviLink to="/">
            <Img
              width={"50px"}
              background-size={"cover"}
              background-repeat={"no-repeat"}
              src={
                "https://d2wl1kt18tqdum.cloudfront.net/v2.1.2499-stageb/Assets/Theming/css/img/icon_circle-cfa-logo.svg"
              }
            />
          </NaviLink>
          <Flex
            display={{ base: "block", md: "flex" }}
            mt={2}
            ml={5}
            fontSize={"m"}
            fontWeight={700}
            borderLeft={"1px solid red"}
          >
            <BiMap /> <p>Find a restaurant</p>{" "}
          </Flex>

          <Flex display={{ base: "block", md: "flex" }} ml={390} mt={3}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={30}
        >
          <Popover isOpen={isOpeni} onClose={onClose}>
            <PopoverTrigger>
              <Button
                onClick={onOpen}
                fontWeight={600}
                color={"white"}
                bg={"red.500"}
              >
                User Details
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              {/* <PopoverHeader>Signup</PopoverHeader> */}
              <PopoverBody>
                {/* <ButtonGroup>
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={700}
                    variant={"link"}
                    // href={"#"}
                    color={"red.500"}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    {props.name
                      ? `${props.name}`
                      : " Chick fill A-one (sign In)"}
                  </Button>
                  <Button>Log out</Button>
                </ButtonGroup> */}
                <ButtonGroup>
                  {user ? (
                    <Button
                      as="a"
                      fontSize="sm"
                      fontWeight={700}
                      variant="link"
                      color="red.500"
                      onClick={handleDisplayNameClick}
                    >
                      {user.displayName}
                    </Button>
                  ) : (
                    <Button
                      as="a"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Log in
                    </Button>
                  )}
                  {user && (
                    <Button onClick={handleLogout} variant="outline">
                      Log out
                    </Button>
                  )}
                </ButtonGroup>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"red.500"}
            href={"#"}
            _hover={{
              bg: "red.500",
            }}
            onClick={() => navigate("/cart")}
          >
            Order Food
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("red.500", "red.500");
  const linkHoverColor = useColorModeValue("red.500", "white");
  const popoverContentBgColor = useColorModeValue("white", "red.500");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NaviLink to="/products">
                <Box
                  p={2}
                  fontSize={"sm"}
                  fontWeight={700}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </NaviLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                // border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      justifyContent={"space-around"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("white") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "red.500" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"red.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "red.500")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("red.500", "red.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("red.500", "white.500")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Menu",
    children: [
      {
        label: "Breakfast",
        // subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Entrees",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Salad",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Sides",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Kid's meal",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Drinks",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
      {
        label: "Treats",
        // subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Stories",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Careers",
    href: "#",
  },
];
