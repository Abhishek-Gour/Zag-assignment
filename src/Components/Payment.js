import React, { useState } from 'react'
import './Payment.css'
import LockIcon from '@mui/icons-material/Lock';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
const Payment = () => {
  const [userErr,setUserErr] = useState(false);
  const [loading,setLoading] = useState(false);
  function userHandler(e) {
    let cardNumLength = e.target.value.length;
    if (cardNumLength < 8) {
      setUserErr(true);
    }else {
      setUserErr(false);
    }
  }
  function paymentSuccessful() {
    if(userErr === true) {
      toast.error(`Card number must be between 8 to 16`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }else {
      setLoading(true);
       <ClipLoader
        color={'#F37A24'}
        loading={loading}
        size={150}
      />
      setTimeout(() => {
        setLoading(false);
        toast.success(`Your order successfully approved`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      }, 3000);
    }
  }
 
  return (
    <div className='main-payment-page flex'>
      <div className="payment-page-upper flex">
        <div className="payment-page flex">
          <div className="card-num card-input">
            <h3>Card number</h3>
            <input type="tel" placeholder='0000 0000 0000 0000' onChange={userHandler}/>
          </div>

          <div className="name-card card-input">
            <h3>Name on card</h3>
            <input type="text" />
          </div>

          <div className="exp-security card-input flex">
            <div className="exp-date">
              <h3>Expiration date</h3>
              <input type="tel" placeholder='05/24' />
            </div>
            <div className="security-code">
              <h3>Security code</h3>
              <input type="tel" placeholder='123' />
            </div>
          </div>

          <div className="paynow-btn flex" onClick={paymentSuccessful}>
            <LockIcon className='lock-icon' />
            <button>Pay now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
