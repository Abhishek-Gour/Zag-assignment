/**
 * The function exports a React component for a mobile header with a logo, user icon, welcome message,
 * and search field.
 * @returns The HeaderMobo component is being returned, which contains JSX elements representing the
 * mobile header of a fashion app.
 */
import React from 'react'
import './HeaderMobo.css'
import SearchIcon from '@mui/icons-material/Search';
const HeaderMobo = () => {
    return (
        <>
            <div className="main-mobo-header">
                <div className="mobo-header">
                    <div className="mobo-header-left">
                        <div className="main-logo flex ">
                            <img src="./images/icon.png" alt="something is wrong" />
                        </div>
                    </div>

                    <div className="persion-icon flex">
                        <img src="./images/Rectangle 97.png" alt="something is wrong" />
                    </div>
                </div>
                <div className="mobo-header-title">
                    <h2>Welcome,</h2>
                    <p>Our Fashions App</p>
                </div>

                <div className="mobo-search-field flex">
                    <div className="search-field flex">
                        <SearchIcon />
                        <input type="search" placeholder='Search' />
                    </div>
                    <div className="main-logo flex ">
                        <img src="./images/icon.png" alt="something is wrong" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeaderMobo
