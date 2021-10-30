import React, { useEffect } from 'react'
import { CheckOutItem } from '../components/CheckOutItem'
import { MainContainer } from '../components/containers/MainContainer'
import Subtotal from '../components/SubTotal'
import { useStateValue } from '../state/context/CartContext'

const CartView = () => {
    const [{ basket }, dispatch] = useStateValue();

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(basket))
    }, [basket])

    return (
        <MainContainer>
            <div className='cart-cont'>
                <div>
                <div className='cont-items-quantity'>
                    <h3>{`Hay ${basket.length} en tu carrito`}</h3>
                </div>
                {
                    basket.map(item => (
                        <CheckOutItem 
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))
                } 
                </div>               
            
            <div className='checkout-right'>
                <Subtotal />
            </div>
            </div>
        </MainContainer>

    )
}

export default CartView
