import { ShopActionTypes } from './shop.types';

export const updateShopCollections = shopCollectoinMap => ({
    type: ShopActionTypes.UDATE_COLLECTIONS,
    payload: shopCollectoinMap
});
