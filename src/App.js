import React, { useEffect } from 'react';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ContactUsPage from './pages/contact_us/contact_us.component';
import SignInPage from './pages/sign_in_page/sign_in_page.component';
import SignUp from './components/sign_up/sign_up.component';
import CartPage from './pages/cart/cart.component';
import FavoritesPage from './pages/favorites/favorites.component';
import CategoryItemsPreview from './components/category_items_preview/category_items_preview.component';
import Footer from './components/footer/footer.component';

// import { addCollectionAndDocuments } from './firebase/firebase.utils';
// import CATEGORIES from './data';
 //import { getDataFromDb } from './firebase/firebase.utils';

import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

// https://preview.colorlib.com/#ogani

const App = () => {

  useEffect(() => {
    //addCollectionAndDocuments('categories', CATEGORIES.map(({title, items}) =>
    //  ({ title, items })
    //));
    //getDataFromDb();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/contactUs' component={ContactUsPage} />
        <Route exact path='/signInPage' component={SignInPage} />

        <Route path='/shop/:categoryTitle' component={CategoryItemsPreview} />
        <Route exact path='/signUpPage' component={SignUp} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
