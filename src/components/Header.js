import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const Header = () => {
    return (
        <nav className='headr flex-c'>
            <div className='hd-contain'>
                <div>
                    <Link to="/" className='hd-logo'>
                         Betterware Commerce
                    </Link>
                   
                </div>
                <Cart 
                countItems={0}
            /> 
            </div>
           
        </nav>
    )
}

export default Header
