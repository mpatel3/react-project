import { 
    Flex,
    Link,
    Icon,
    Spacer,
    Box,
    FormControl,
    FormLabel,
    Stack,
    Switch,
    useColorMode,
    useDisclosure,
    Divider,
    Tooltip } from '@chakra-ui/react';
import React from 'react';
import {Link as ReachLink} from 'react-router-dom';
import { FaShopify, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import {connect} from "react-redux";
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/car-icon.component';
import DrawerComponent from '../drawer/drawer.component';

export const Header = ({currentUser}) => {
    const {colorMode, toggleColorMode} = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const bg = useColorModeValue("red.500", "red.200");
    // const color = useColorModeValue("white", "gray.800");

    return (
        <Box pb={5} pt={2}>
        <Flex >
            <Link as={ReachLink} to="/">
                <Tooltip label="Home" fontSize="md" shouldWrapChildren placement="bottom" mt={1}>
                    <Icon  as={AiTwotoneShop} boxSize={10} />
                </Tooltip>
            </Link>
            <Box>
                <FormControl display="flex" alignItems="center" p="10px">
                    <FormLabel htmlFor="mode" mb="0">
                        {colorMode === "light" ? "Dark" : "Light"} Mode
                    </FormLabel>
                    <Switch id="mode" onChange={toggleColorMode} />
                </FormControl>
            </Box>
            <Spacer/>
            <Stack direction={["column", "row"]} spacing="24px">
                <Box lineHeight="2.2rem">
                    <Link as={ReachLink} to="/shops" _hover={{ textDecoration: "none"}}>
                        <Tooltip label="Shop" fontSize="md" mt={1} shouldWrapChildren placement="bottom" >
                            <Icon as={FaShopify} boxSize={8} />
                        </Tooltip>
                    </Link>
                </Box>
                <Box>
                    {
                        currentUser ? (
                            <Tooltip label="Sign Out" fontSize="md" mt={1} shouldWrapChildren placement="bottom" >
                                <Icon as={FaSignOutAlt} boxSize={9} onClick={() => auth.signOut()} />
                            </Tooltip>
                        ) : (
                            <Link as={ReachLink} to='/login'_hover={{textDecoration: 'none'}}>
                            <Tooltip label="Sign In" fontSize="md" mt={1} shouldWrapChildren placement="bottom" >
                                <Icon as={FaSignInAlt} boxSize={9} />
                            </Tooltip>
                            </Link>
                        )
                    }
                </Box>
                <Box>
                    <CartIcon onOpen={onOpen} />
                </Box>
            </Stack>
        </Flex>
        <Divider />
        <DrawerComponent isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}

const mapStateToProps = ({user: {currentUser}}) => {
    return { currentUser }
}

export default connect(mapStateToProps, null)(Header);
