import React, { Component } from 'react';
import SHOP_DATA from '../data/shop.data';
import ShopList from '../components/shop-list/shoplist';
import { Center, SimpleGrid } from '@chakra-ui/react';


class ShopPage extends Component {
    
    state = {collections: SHOP_DATA};

    getShopItems = () => {
        return (
            this.state.collections.map (({id, ...restofShopItems}) => {
                return(
                    <ShopList key={id} {...restofShopItems} />
                );
            })
        );
    }
    
    render() {
        return (
            <SimpleGrid column={1}>
                {this.getShopItems()}
            </SimpleGrid>
        )
    }
}

export default ShopPage;