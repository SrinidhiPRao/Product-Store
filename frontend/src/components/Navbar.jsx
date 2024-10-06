import { Container, Flex, Text, Link, HStack, Button, useColorMode } from "@chakra-ui/react";
import { IoIosMoon } from 'react-icons/io'
import { LuSun } from 'react-icons/lu'
import { Link as ReactRouterLink } from 'react-router-dom'
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    

    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={{ base:"22", sm: "28"}}
                bgClip='text'
                fontWeight='bold'
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient='linear(to-l, cyan.400, blue.500)'
            
            >            
                <Link as={ReactRouterLink} to={"/"}>Product Store </Link>
            </Text>

            <HStack spacing={2} alignItems="center">
                <Link as={ReactRouterLink} to={"/create"}>
                    <Button>Create</Button>
                </Link>
                <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoIosMoon /> : 
                        <LuSun size="20" />}
                </Button>
            </HStack>
        </Flex> 
        </Container>;
}
export default Navbar;