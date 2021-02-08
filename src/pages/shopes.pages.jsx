import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ShopListOverview from '../components/shop-list/shoplistoverview';
import ShopCategory from '../components/shop-list/shopcategory';

const ShopPage = ({match}) => {
    return (
        <SimpleGrid column={1}>
            <Route path={`${match.path}/:category`} exact component={ShopCategory} />
            <Route path={`${match.path}`} exact component={ShopListOverview} />
        </SimpleGrid>
    )
}

export default ShopPage;