import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
                {basket.length !== 0
                    ?
                    <div>
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
                            <Subtotal 
                                text="Proceder al pago"
                            />
                        </div>
                    </div>
                    :
                    <div className='cont-items-quantity'>
                        <h3>{`Aun no hay articulos en tu carrito`}</h3>
                        <div className='cont-items-quantity'>
                            <Link to="/" className='goToMark'>Ir a la tienda</Link>
                        </div>
                    </div>
                }
            </div>
        </MainContainer>

    )
}

export default CartView
