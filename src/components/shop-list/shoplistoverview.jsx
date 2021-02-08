import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectShopCollection } from '../../redux/shop/shop.selector';
import ShopList from './shoplist';
import { connect } from 'react-redux';


const ShopListOverview = ({ collections }) => {
    return (
        Object.values(collections).map (({id, ...restofShopItems}) => {
            return(
                <ShopList key={id} {...restofShopItems} />
            );
        })
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default  connect(mapStateToProps, null)(ShopListOverview);