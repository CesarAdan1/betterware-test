import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../state/context/CartContext'

import Cart from './Cart'

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <nav className='headr flex-c'>
            <div className='hd-contain'>
                <div>
                    <Link to="/" className='hd-logo'>
                         Betterware Commerce
                    </Link>
                   
                </div>
                <Cart 
                countItems={basket?.length}
            /> 
            </div>
           
        </nav>
    )
}

export default Header
