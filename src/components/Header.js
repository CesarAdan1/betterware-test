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
                    <Link to="/" className='hd-logo' title="Betterware Commerce">
                        <img width={150} src="	https://d2gt4h1eeousrn.cloudfront.net/16918207/header-iRtHZK/knagKsJ-600x600.webp"
                        alt="Betterware" />
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
