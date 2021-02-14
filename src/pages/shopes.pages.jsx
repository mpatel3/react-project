import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ShopListOverview from '../components/shop-list/shoplistoverview';
import ShopCategory from '../components/shop-list/shopcategory';
import { firestore, collectionSnapShottoMap } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateShopCollections } from '../redux/shop/shop.action';
import { WithSpinner } from './../components/spinner/with-spinner.component';

// crete HOC to wrap spinner logic.
const ShopListOverviewWithSpinner = WithSpinner(ShopListOverview);
const ShopCategoryWithSpinner = WithSpinner(ShopCategory)

// as ShopCategory and ShopListOverview both needs shop collection this is the best 
// component to get data from the firebase firestore. 
const ShopPage = ({match, updateShopCollections}) => {
    
    let unsubscribeFromSnapshot = null;
    const [isLoading, setDataLoading] = useState(true);

    useEffect(()=>{
        const collectionRef = firestore.collection('shop');
        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const shopCollectionMap = collectionSnapShottoMap(snapShot);
            updateShopCollections(shopCollectionMap);
            setDataLoading(false);
        });
        // clean up function. unObserver from snapshot object when component unmount
        return () => {   
            unsubscribeFromSnapshot = null;
        }
    }, [])

    return (
        <SimpleGrid column={1}>
            {/* <Route path={`${match.path}/:category`} exact component={ShopCategory} /> */}
            <Route path={`${match.path}/:category`} exact render={(props) => (
                <ShopCategoryWithSpinner isLoading={isLoading} {...props} />
            )} />
            <Route path={`${match.path}`} exact render={(props) => (
                <ShopListOverviewWithSpinner isLoading={isLoading} {...props} />
            )} />
        </SimpleGrid>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateShopCollections: (collectionMap) => dispatch(updateShopCollections(collectionMap))
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);