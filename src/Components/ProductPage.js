import React, { useState } from 'react'
import './ProductPage.css'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from 'react-redux'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const ProductPage = () => {
  const [count, setCount] = useState(1);
  const data = useSelector((state) => state.mainCart.cart);

  const changeSize = (size) => {
    toast.success(`${size} size is selected`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    })
  }
  function increment() {
    if (count >= 0) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  }
  function decrement() {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <div className='main-product-page'>
      {
        data.length === 0 ? (
          <h1>Please select a product first</h1>
        ) :(
          <>
       {   data.map((item, idx) => {
            return (
              <div className="product-page " key={idx}>
                <div className="product-page-upper1 flex">
                  <h5>4.46</h5>
                  <div className='network-icon'>
                    <NetworkWifiIcon />
                    <BatteryCharging60Icon />
                  </div>
                </div>
                <div className="product-page-upper2 flex">
                  <Link to='/'>
                    <div className="keyboard-icon flex">
                      <KeyboardBackspaceIcon className='key-icon' />
                    </div></Link>
                  <Link to='/dashboardPage'>
                    <div className="cart-icon flex">
                      <ShoppingBagIcon />
                    </div></Link>
                </div>
                <div className="product-cart-2">
                  <div className="prod-img">
                    <img src={item.img} alt="something is wrong" />
                  </div>
  
                  <div className="prod-title-upper">
                    <div className="main-title flex">
                      <h3>Roller Rabbit</h3>
                      <div className="inc-dec-quantity flex">
                        <button className='btn' onClick={decrement}>-</button>
                        <h3>{count}</h3>
                        <button className='btn' onClick={increment}>+</button>
                      </div>
                    </div>
                    <div className="prod-title flex">
                      <div className="title-second ">
                        <p>vado Odelle Dress</p>
                        <div className="rating">
                          ⭐⭐⭐⭐⭐ <span>(320 Review)</span>
                        </div>
  
                      </div>
                      <h4>Available in stoke</h4>
                    </div>
                    <div className="size-selection">
                      <h3>Size</h3>
                      <div className="size-btn flex">
                        <div className="size flex" onClick={() => changeSize('S')}>
                          <h4>S</h4>
                        </div>
                        <div className="size flex" onClick={() => changeSize('M')}>
                          <h4>M</h4>
                        </div>
                        <div className="size flex" onClick={() => changeSize('L')}>
                          <h4>L</h4>
                        </div>
                        <div className="size flex" onClick={() => changeSize('XL')}>
                          <h4>XL</h4>
                        </div>
                        <div className="size flex" onClick={() => changeSize('XXL')}>
                          <h4>XXL</h4>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <h3>Description</h3>
                      <p>
                        Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.
                      </p>
                    </div>
                    <div className="main-total-price flex">
                      <div className="total-price">
                        <p>Total Price</p>
                        <h3>{item.price}.00</h3>
                      </div>
                      <div className="buy-btn flex">
                        <ShoppingBagIcon />
                        <Link to='/payment'>
                          <button>Buy Now</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
  
  
              </div>
            )
          })}
          
          </>)
      }
      
        
    </div>
  )
}

export default ProductPage;
