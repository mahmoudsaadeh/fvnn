
import React, { useEffect, useState } from "react";
import './homepage.styles.scss';

import Category from "../../components/category/category.component";

import { getDataFromDb } from "../../firebase/firebase.utils";
//import ContactForm from "../../components/contact_form/contact_form.component";

const HomePage = () => {

    const [categoriesArray, setCategoriesArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [stopFetch, setStopFetch] = useState();

    useEffect(() => {
        const fetchFunction = async () => {
            await getDataFromDb().then((categories) => {
                setCategoriesArray(categories);
                setIsLoading(false);
                // console.log(categoriesArray);
            }).catch((error) => {
                console.log('an error has occurred: ', error);
            });
        };

        fetchFunction();
    }, [stopFetch]);

    /*let categoriesArray = [];

    useEffect(() => {
        categoriesArray = getDataFromDb();
        console.log(categoriesArray);
    }, []);*/

    /*const getData = async () => {
        const categoriesArray = await getDataFromDb();
        categoriesArray.map(({imageSource, title}) => {
            <Category imageSource={imageSource} title={title} />
        });
    };*/



    return (
        <div className='homepage'>
            {
                isLoading ?
                    <p>Loading...</p> :
                    categoriesArray.map(({ imageSource, title, id }) => (
                        <Category key={id} imageSource={imageSource} title={title} />
                    ))
            }
        </div>
    );
};

export default HomePage;