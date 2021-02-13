import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { selectCartItemsCount } from './../../redux/cart/cart.selector';
import { CartIconSpanContainer } from './cart-icon.styles';

import { connect } from 'react-redux';

const CartIcon = ({onOpen, itemsCount}) => {
    return (
        <>
            <Icon as={FaCartArrowDown} boxSize={9} />
            <CartIconSpanContainer onClick={onOpen}>{itemsCount}</CartIconSpanContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        itemsCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, null)(CartIcon);