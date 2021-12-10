
import { db, getDataFromDbV2 } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";


export const fetchCategoriesStart = () => ({
    type: ShopActionTypes.FETCH_CATEGORIES_START
});

// array of 3 objects
export const fetchCategoriesSuccess = (categoriesArray) => ({
    type: ShopActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray
});

export const fetchCategoriesFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage
});


// using redux-thunk
export const fetchCategoriesStartAsync = () => {
    return (dispatch) => {
        const categoryRef = db.collection('categories');
        // switch reducer state isFetching to true
        dispatch(fetchCategoriesStart());

        categoryRef.get().then(snapshot => {
            const categoriesData = getDataFromDbV2(snapshot);
            dispatch(fetchCategoriesSuccess(categoriesData));
        }).catch(error => dispatch(fetchCategoriesFailure(error.message)));
    }
};