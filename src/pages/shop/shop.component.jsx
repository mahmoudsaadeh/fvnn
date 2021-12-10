
import React from "react";

import CategoryItemsPreview from "../../components/category_items_preview/category_items_preview.component";

import { connect } from "react-redux";
import { Route } from "react-router-dom";

// import { fetchCategoriesStart } from "../../redux/shop/shop.actions"; // saga
import { fetchCategoriesStartAsync } from "../../redux/shop/shop.actions"; // thunk

import './shop.styles.scss';



const ShopPage = ({ match, fetchCategoriesStartAsync }) => {

    fetchCategoriesStartAsync();

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CategoryItemsPreview} />
        </div>
    );
};

// using saga
//const mapDispatchToProps = (dispatch) => ({
//    fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
//});

// using thunk
const mapDispatchToProps = (dispatch) => ({
    fetchCategoriesStartAsync: () => dispatch(fetchCategoriesStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);



// before sagas and redux
/*
import React from "react";

import CategoryItemsPreview from "../../components/category_items_preview/category_items_preview.component";

import { Route } from "react-router-dom";

import './shop.styles.scss';


const ShopPage = ({ match, history, location }) => {

    // added 2nd Route to App.js, problem was solved!
    // <Route exact path={`${match.path}`} component={CategoryItemsPreview} />
    // <Route path={`${match.path}/:categoryTitle`} component={CategoryItemsPage} />

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CategoryItemsPreview} />
        </div>
    );
};

export default ShopPage;
*/