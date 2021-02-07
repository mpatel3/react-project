import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.css';

const CartIcon = ({onOpen}) => (
    <>
        <Icon as={FaCartArrowDown} boxSize={9} />
        <span className="item-count" onClick={onOpen}>0</span>
    </>
)

export default CartIcon;