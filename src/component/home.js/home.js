import React from 'react';
import Slider from './slider';
import Collectioncard from './collectionCard';
import Category from './categories';
import Product from './products';
import Newsletter from './newsletter';
import Footer from './footer';

const Home = () => (
    <React.Fragment>
        <Slider />
        <Collectioncard />
        <Category />
        <Product />
        <Newsletter />
        <Footer/>
    </React.Fragment>
)

export default Home;