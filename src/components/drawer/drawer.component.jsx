import { 
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    DrawerCloseButton,
    DrawerHeader,
    Button,
    Flex, 
    Text,
    Image,
    Box,
    Divider} from '@chakra-ui/react';
import { connect } from 'react-redux';
import CartItemComponent from './../cartitem-component/cartitem-component';

const DrawerComponent = ({isOpen, onClose, cartItems}) => {
    return ( 
        <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>
            <Divider />
            <DrawerBody>
                <Box>
                    { cartItems.map(cartItem => <CartItemComponent key={cartItem.id} item={cartItem} />) }
                </Box>
            </DrawerBody>
            <DrawerFooter>
                <Button colorScheme="blue"> Check Out</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

const mapStateToProps = (state) => {
    console.log(state.cart.cartItems);
    return {
        cartItems : state.cart.cartItems
    }
}

export default connect(mapStateToProps, null)(DrawerComponent);