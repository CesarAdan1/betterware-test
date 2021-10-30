import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({countItems}) => {
    return (
        <Link to="cart" className='hd-logo'>
        <div style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
            <div className='cart-count'>
                {countItems}
            </div>
            <svg width={26} height={26} viewBox='0 0 26 26' xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5v17a4 4 0 01-4 4H6a4 4 0 01-4-4V5h22zm-2 2H4v15a2 2 0 001.85 1.995L6 24h14a2 2 0 001.995-1.85L22 22V7z" fill="white"></path>
                <path d="M13 0c3.224 0 5.877 2.408 5.996 5.453l.004.214V9a1 1 0 01-1.993.117L17 9V5.667C17 3.657 15.224 2 13 2c-2.154 0-3.889 1.556-3.995 3.48L9 5.666V9a1 1 0 01-1.993.117L7 9V5.667C7 2.52 9.701 0 13 0z"
                fill="white" className='cart-is'></path>
            </svg>
        </div>
        </Link>
    )
}

export default Cart
