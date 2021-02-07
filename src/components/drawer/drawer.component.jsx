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
import {selectCartItems} from './../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';

const DrawerComponent = ({isOpen, onClose, cartItems, history}) => {
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
                <Button colorScheme="blue" onClick={() => history.push('/checkout')}> Check Out</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

const mapStateToProps = (state) => {
    console.log(state.cart.cartItems);
    return {
        cartItems : selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps, null)(DrawerComponent));