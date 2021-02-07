import React, { Component } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    Text,
    Icon,
} from "@chakra-ui/react";
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import { increaseItemCount, decreaseItemCount } from '../../redux/cart/cart.actions';

class CheckoutComponent extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Table variant="simple">
            <TableCaption>Products will be delivered based on covid-19 Situation.</TableCaption>
            <Thead>
                <Tr>
                <Th>Product</Th>
                <Th>Description</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
                <Th>Remove</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    this.props.cartItems.map( item => {
                        const {id, imageUrl, name, quantity, price} = item;
                        return (
                            <Tr key={id}>
                                <Td>
                                    <Image 
                                        boxSize="75px"
                                        objectFit="cover"
                                        src={imageUrl}
                                    />
                                </Td>
                                <Td>{name}</Td>
                                <Td>
                                    <Icon as={FaMinusCircle} boxSize={6} cursor="pointer" onClick={()=> this.props.decreaseItemCount(item)} />
                                    <Text display="inline-block" mr={2} ml={2} fontSize={16}>{quantity}</Text>
                                    <Icon as={FaPlusCircle} boxSize={6} cursor="pointer" onClick={() => this.props.increaseItemCount(item)} />
                                </Td>
                                <Td>${price}</Td>
                                <Td>
                                    <Icon as={MdDelete} boxSize={8} />
                                </Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
            </Table>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => {
    return {
        increaseItemCount: item => dispatch(increaseItemCount(item)),
        decreaseItemCount: item => dispatch(decreaseItemCount(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent);