import React, { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ShopListOverview from '../components/shop-list/shoplistoverview';
import ShopCategory from '../components/shop-list/shopcategory';
import { firestore, collectionSnapShottoMap } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateShopCollections } from '../redux/shop/shop.action';

// as ShopCategory and ShopListOverview both needs shop collection this is the best 
// component to get data from the firebase firestore. 
const ShopPage = ({match, updateShopCollections}) => {
    
    let unsubscribeFromSnapshot = null;

    useEffect(()=>{
        const collectionRef = firestore.collection('shop');
        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const shopCollectionMap = collectionSnapShottoMap(snapShot);
            updateShopCollections(shopCollectionMap);
        });
        // clean up function. unObserver from snapshot object when component unmount
        return () => {   
            unsubscribeFromSnapshot = null;
        }
    }, [])

    return (
        <SimpleGrid column={1}>
            <Route path={`${match.path}/:category`} exact component={ShopCategory} />
            <Route path={`${match.path}`} exact component={ShopListOverview} />
        </SimpleGrid>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateShopCollections: (collectionMap) => dispatch(updateShopCollections(collectionMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);