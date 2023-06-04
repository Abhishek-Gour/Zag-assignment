/**
 * This is a React component for a header with search, cart, notification, and person icons.
 * @returns The `Header` component is being returned, which contains the HTML markup for the header
 * section of a web page.
 */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header>
                <div className="header-left flex">
                    <div className="main-logo flex">
                        <img src="./images/icon.png" alt="something is wrong" />
                    </div>

                    <div className="search-field flex">
                        <SearchIcon />
                        <input type="search" placeholder='Search' />
                    </div>
                </div>

                <div className="header-right flex">
                    
                    <Link to='/dashboardPage'>
                        <div className="cart-icon icon-hover flex">
                            <ShoppingCartIcon />
                        </div></Link>
                    <Link>
                        <div className="notification-icon icon-hover flex">
                            <NotificationsIcon />
                        </div></Link>
                    <Link>
                        <div className="person-icon icon-hover flex">
                            <PersonIcon />
                        </div></Link>
                </div>
            </header>
        </div>
    )
}

export default Header
