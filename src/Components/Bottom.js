import React from 'react'
import './Bottom.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
const Bottom = () => {
  return (
    <div className='main-bottom-mobo flex'>
      <Link to='/'>
        <div className="home-logo flex">
          <HomeIcon className='home-icon' />
          <span>Home</span>
        </div></Link>
        
      <Link to='/dashboardPage'>
        <div className="icon-hover flex">
          <ShoppingCartIcon className='cart-icon' />
        </div>
      </Link>

     <div className="icon-hover flex">
        <NotificationsIcon className='cart-icon' />
     </div>

      <div className="icon-hover flex">
        <PersonIcon className='cart-icon' />
      </div>

    </div>
  )
}

export default Bottom
