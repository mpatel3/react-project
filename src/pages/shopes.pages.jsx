import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import ShopListOverview from '../components/shop-list/shoplistoverview';
import ShopCategory from '../components/shop-list/shopcategory';
// import { firestore, collectionSnapShottoMap } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { fetchShopCollectionStartAsync } from '../redux/shop/shop.action';
import { WithSpinner } from './../components/spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsShopCollectionFetching } from './../redux/shop/shop.selector';

// crete HOC to wrap spinner logic.
const ShopListOverviewWithSpinner = WithSpinner(ShopListOverview);
const ShopCategoryWithSpinner = WithSpinner(ShopCategory)

// as ShopCategory and ShopListOverview both needs shop collection this is the best 
// component to get data from the firebase firestore. 
const ShopPage = ({match, fetchShopCollectionStartAsync, isShopCollectionFetching}) => {
    
    // let unsubscribeFromSnapshot = null;
    // const [isLoading, setDataLoading] = useState(true);
    useEffect(() => {
        // const collectionRef = firestore.collection('shop');
        // unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
        //     const shopCollectionMap = collectionSnapShottoMap(snapShot);
        //     updateShopCollections(shopCollectionMap);
        //     setDataLoading(false);
        // });

        // collectionRef.get().then(snapShot => {
        //     const shopCollectionMap = collectionSnapShottoMap(snapShot);
        //     updateShopCollections(shopCollectionMap);
        //     setDataLoading(false);
        // });
        fetchShopCollectionStartAsync();

        // clean up function. unObserver from snapshot object when component unmount
        return () => {   
            // unsubscribeFromSnapshot = null;
        }
    }, [])

    return (
        <SimpleGrid column={1}>
            {/* <Route path={`${match.path}/:category`} exact component={ShopCategory} /> */}
            <Route path={`${match.path}/:category`} exact render={(props) => (
                <ShopCategoryWithSpinner isLoading={isShopCollectionFetching} {...props} />
            )} />
            <Route path={`${match.path}`} exact render={(props) => (
                <ShopListOverviewWithSpinner isLoading={isShopCollectionFetching} {...props} />
            )} />
        </SimpleGrid>
    )
}

const mapStateToProps = createStructuredSelector({
    isShopCollectionFetching : selectIsShopCollectionFetching
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShopCollectionStartAsync: () => dispatch(fetchShopCollectionStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);