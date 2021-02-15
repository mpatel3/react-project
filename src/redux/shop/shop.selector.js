import {createSelector} from 'reselect';

const selectShop = state => state.shop;
const COLLECTION_ID_MAP = {
    "hats": 1,
    "sneakers": 2,
    "jackets": 3,
    "womens": 4,
    "mens": 5,
}

export const selectShopCollection =  createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollectionItem = collectionID => {
    // return createSelector(
    //     [selectShopCollection],
    //     collections => collections.filter(collection => collection.id === COLLECTION_ID_MAP[collectionID])
    // )
    // with data normlization - converting array into an object.
    return createSelector(
        [selectShopCollection],
        collections => collections.hasOwnProperty(collectionID) ? collections[collectionID] : null
    )
    
}

export const selectIsShopCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)