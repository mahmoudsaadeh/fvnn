
import React from "react";

import './category.styles.scss';

import { withRouter } from "react-router-dom";

// import logo2 from '../../assets/facebook_cover_photo_1.png';

const Category = ({ imageSource, title, match, history }) => {

    // onClick={() => history.push(`${match.url}/shop/${title}`)}
    /*
    <div className='category'
            onClick={() => {
                console.log(history);
                console.log(match);
            }}>
    */

    // history.push(`${match.path}shop/${title}`)
    // console.log(`${match.path}shop/${title}`) // getting correct url...weird
    // console.log(desiredPath)
    // const desiredPath = `${match.path}shop/${title}`;

    return (
        <div className='category'
            onClick={() => {
                // console.log(`${match.path}shop/${title}`);
                history.push(`${match.path}shop/${title}`);
            }}>

            <div className='background-image' style={{
                backgroundImage: `url(${imageSource})`
            }} />
            <div className='content'>
                <h1 className='title'>{title}</h1>
            </div>
        </div>
    );
};

// wrapped with withRouter so that we have access to history, match, and location properties in our props
export default withRouter(Category);