/**
 * The Products component displays a list of products and allows the user to add them to the cart.
 * @returns The `Products` component is returning a JSX element that contains a list of products with
 * their images, titles, descriptions, and prices. Each product is wrapped in a `Link` component that
 * navigates to a product page when clicked. The `handleAdd` function is called when a product image is
 * clicked, which dispatches an `add` action to the Redux store.
 */
import React from 'react'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Store/CartSlice';
import { Link } from 'react-router-dom';
const Products = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.mainCart.cartItems);

  function handleAdd(item) {
    dispatch(add(item));
    
  }
  return (
    <div className='main-products-container'>
      <div className="new-arrivals flex">
        <h2>New Arrivals</h2>
        <p>view All</p>
      </div>
      <div className='main-products-list'>
        {
          productsData.map((item, idx) => {
            return (
              <Link to='/prodPage'>
                <div className='products-cart flex' key={idx}>
                  <img src={item.img} alt="something is wrong" onClick={() => handleAdd(item)} />
                  <h4>{item.title}</h4>
                  <p className='item-desc'>{item.description}</p>
                  <h4>{item.price}</h4>
                </div>
              </Link>
             

            )
          })
        }
      </div>
    </div>
  )
}

export default Products
