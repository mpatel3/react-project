import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import {selectCartItemsCount} from './../../redux/cart/cart.selector';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.css';
import { connect } from 'react-redux';

const CartIcon = ({onOpen, itemsCount}) => {
    console.log(itemsCount)
    return (
        <>
        <Icon as={FaCartArrowDown} boxSize={9} />
        <span className="item-count" onClick={onOpen}>{itemsCount}</span>
        </>
    )
}

const mapStateToProps = state => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, null)(CartIcon);