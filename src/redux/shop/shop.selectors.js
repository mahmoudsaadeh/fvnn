
import { createSelector } from "reselect";


// input selector
const selectShop = (state) => state.shop;

// output selectors
export const selectCategories = createSelector(
    [selectShop],
    shop => shop.categories/*,
    console.log('fired!')*/
);

export const selectIsCategoriesFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCategoriesLoaded = createSelector(
    [selectShop],
    // returns true if empty object or filled one, and false if null
    shop => !!shop.categories
);
