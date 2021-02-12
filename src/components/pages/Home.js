import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  SlideFade,
  Box,
  Flex,
  Text,
  Image,
  Link,
  SimpleGrid,
  Button,
  Tooltip,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  useMediaQuery,
  Center
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { GiSecretDoor } from "react-icons/gi";

import cat from "../images/cat.gif";
import Avatar from "../images/avatar.png";
import AvatarMasked from "../images/avatarMasked.png";
import MamentApp from "../images/mament.png";
import Sigud from "../images/sigud.png";

import ProjectCards from "../ProjectCards";

const Home = () => {
  const [pL, setPL] = useState(false);
  const [isLarger] = useMediaQuery("(min-width: 62em)");

  useEffect(() => {
    window.scrollTo(0, 0);
    setPL(true);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SlideFade in={pL} offsetY="40px">
      <Helmet>
        <title>Imam Hanafi</title>
      </Helmet>
      <Center>
        <Box
          d="flex"
          maxW="6xl"
          px={9}
          flexDir={{ base: "column-reverse", lg: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDir="column"
            alignItems="flex-start"
            justifyContent="center"
            // bg="red.100"
            mr={{ base: 0, lg: 4 }}
            mb={{ base: 9, lg: 0 }}
          >
            <Text fontSize="5xl" fontWeight="bold">
              Hello there, I am Imam Hanafi
            </Text>

            <Text fontSize="xl" align="left" my="6">
              You can call me Imam. I am Software Engineer, especially on Web
              things. Doing{" "}
              <Link as={ReactLink} to="/projects" color="yellow.400">
                some projects
              </Link>{" "}
              in the past until now. Ex vice president from web community in Information System Department of UPN JATIM
              named{" "}
              <Tooltip
                placement="bottom-start"
                label="Information System Community"
                aria-label="ISCOM"
              >
                <Link href="http://iscommu.com" isExternal color="yellow.400">
                  ISCOM
                </Link>
              </Tooltip>
              {"."}
            </Text>
            <Text fontSize="xl" align="left">
              Maybe you want to know more about me? You can go{" "}
              <Link as={ReactLink} to="/about" color="yellow.400">
                here
              </Link>
              .
            </Text>
            <Text fontSize="xl" align="left">
              Or ask anything else? Get in touch with me on{" "}
              <Link as={ReactLink} to="/contacts" color="yellow.400">
                contacts page
              </Link>
              {". "}
              <Icon
                color="gray.800"
                h="30px"
                w="30px"
                as={GiSecretDoor}
                _hover={{ color: "white", cursor: "pointer" }}
                onClick={() => onOpen()}
              />
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center">
            <Tooltip
              label="It's me, there is something hidden in this page"
              aria-label="Avatar"
              hasArrow
            >
              {isLarger ? (
                <Image
                  objectFit="cover"
                  src={Avatar}
                  alt="Imam Hanafi's avatar"
                />
              ) : (
                <Image
                  my={9}
                  borderRadius="full"
                  maxW={{ base: "2xs", sm: "xs" }}
                  src={AvatarMasked}
                  alt="Imam Hanafi's avatar"
                />
              )}
            </Tooltip>
          </Flex>
        </Box>
      </Center>

      <Center>
        <Box maxW="6xl" bg="gray.700" px="9" py="9" borderRadius="md">
          <Text fontSize="4xl" fontWeight="bold" mb="3">
            My Projects
          </Text>
          <Text fontSize="lg" mb="8">
            Here are my projects I have done at the past.
          </Text>
          <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
            <ProjectCards
              title="MamentApp"
              tags="ASP.NET, C#, MVC5, EF6, Razor, SQL Server"
              desc={`MaMentApp (Matrix Management App) is a Knowledge Management System I've built for my internship program in PT PERTAMINA MOR V. Built using C# in ASP.NET, MVC5 as MVC framework, EF6 for model mapper and Razor View Engine for view.`}
              image={MamentApp}
            />
            <ProjectCards
              title="SIGUD"
              tags="ADMINLTE 3, PHP, jQuery, AJAX, MySQL"
              desc={`SIGUD (Sistem Informasi Pergudangan) is a Simple Warehouse Management System, built using AdminLTE 3 framework and jQuery for client-side and php native for server-side as demo for fulfilling my college course "Human-Computer Interaction".`}
              image={Sigud}
            />
          </SimpleGrid>
          <Flex justifyContent="flex-end" mt="10">
            <Button
              as={ReactLink}
              to="/projects"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="gray"
              variant="solid"
            >
              <Text fontWeight="bold">View all projects</Text>
            </Button>
          </Flex>
        </Box>
      </Center>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <Helmet>
          <title>Secret – Imam Hanafi</title>
        </Helmet>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              You're trapped 😆 , refresh the page to leave or press 'Esc'
            </DrawerHeader>
            <DrawerBody>
              <Center>
                <Tooltip
                  placement="bottom"
                  hasArrow
                  label="Shht, there was lots of my owner's secrets on his Simple Note App. Go check for it..."
                  aria-label="CAT"
                >
                  <Image src={cat} alt="Imam Hanafi's cat" />
                </Tooltip>
              </Center>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </SlideFade>
  );
};

export default Home;
