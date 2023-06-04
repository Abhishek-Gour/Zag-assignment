/**
 * The Home function returns a React component that renders a header, products, and a bottom section
 * for a website.
 * @returns The `Home` component is being returned, which contains the `Header`, `HeaderMobo`,
 * `Products`, and `Bottom` components.
 */
import React from 'react';
import './Home.css';

import Header from './Header';
import HeaderMobo from './HeaderMobo';
import Products from './Products';
import Bottom from './Bottom';
const Home = () => {
    return (
        <div className='main-home'>
            <div className="desk-header">
                <Header />
            </div>
            <div className="mobo-header">
                <HeaderMobo />

            </div>
            <Products />
            <div className="mobo-header mobo-bottom">
                <Bottom />

            </div>
        </div>
    )
}

export default Home
