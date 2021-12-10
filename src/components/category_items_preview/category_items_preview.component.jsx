
import React, { useState, useEffect } from "react";

import './category_items_preview.styles.scss';

import CategoryItemsOverview from "../category_items_overview/category_items_overview.component";
import AllItemsOverview from "../../pages/all_items_overview/all_items_overview.component";

import { getDataFromDb } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
// import { getDocsIds } from "../../firebase/firebase.utils";
import { createStructuredSelector } from 'reselect';

import { selectCategories, selectIsCategoriesFetching } from "../../redux/shop/shop.selectors";


const CategoryItemsPreview = ({ match, cats, fetching }) => {

    // as we did in homepage (should put in reducer!)
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [stopFetch, setStopFetch] = useState();

    
    /*useEffect(() => {
        const fetchFunction = async () => {
            await getDataFromDb().then((categories) => {
                setCategoriesArray(categories);
                setIsLoading(false);
                //console.log(categoriesArray);
            }).catch((error) => {
                console.log('an error has occurred: ', error);
                setIsLoading(false);
            });
        };

        console.log('fetching? ', fetching); // returning null!

        fetchFunction();
    }, [stopFetch]);*/


    return (
        <div>
            {
                fetching ?
                    <p>Loading...</p>:
                    (
                        match.path.includes('/:categoryTitle') ?
                            (
                                cats.map((category) => {
                                    if (category.title === match.params.categoryTitle) {
                                        return (
                                            <AllItemsOverview
                                                key={category.id}
                                                title={category.title}
                                                items={category.items} />
                                        )
                                    }
                                })
                            )
                            :
                            cats.map(({ id, title, items }) => (
                                <CategoryItemsOverview
                                    key={id}
                                    title={title}
                                    items={items} />
                            ))
                    )
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cats: selectCategories,
    fetching: selectIsCategoriesFetching
});


export default connect(mapStateToProps, null)(CategoryItemsPreview);


// before redux and sagas/thunks
/*
import React, { useState, useEffect } from "react";

import './category_items_preview.styles.scss';

import CategoryItemsOverview from "../category_items_overview/category_items_overview.component";
import AllItemsOverview from "../../pages/all_items_overview/all_items_overview.component";

import { getDataFromDb } from "../../firebase/firebase.utils";
// import { getDocsIds } from "../../firebase/firebase.utils";


const CategoryItemsPreview = ({ match }) => {

    // as we did in homepage (should put in reducer!)
    const [categoriesArray, setCategoriesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [stopFetch, setStopFetch] = useState();

    useEffect(() => {
        const fetchFunction = async () => {
            await getDataFromDb().then((categories) => {
                setCategoriesArray(categories);
                setIsLoading(false);
                //console.log(categoriesArray);
            }).catch((error) => {
                console.log('an error has occurred: ', error);
                setIsLoading(false);
            });
        };

        // console.log(match);

        fetchFunction();
    }, [stopFetch]);



    return (
        <div>
            {
                isLoading ?
                    <p>Loading...</p> :
                    (
                        match.path.includes('/:categoryTitle') ?
                            (
                                categoriesArray.map((category) => {
                                    if (category.title === match.params.categoryTitle) {
                                        return (
                                            <AllItemsOverview
                                                key={category.id}
                                                title={category.title}
                                                items={category.items} />
                                        )
                                    }
                                })
                            )
                            :
                            categoriesArray.map(({ id, title, items }) => (
                                <CategoryItemsOverview
                                    key={id}
                                    title={title}
                                    items={items} />
                            ))
                    )
            }
        </div>
    );
};


export default CategoryItemsPreview;
*/