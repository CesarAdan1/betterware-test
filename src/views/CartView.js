import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckOutItem } from '../components/CheckOutItem'
import { MainContainer } from '../components/containers/MainContainer'
import Subtotal from '../components/SubTotal'
import { useStateValue } from '../state/context/CartContext'
import { useHistory } from "react-router-dom";


const CartView = () => {
    const [{ basket }, dispatch] = useStateValue();

    const history = useHistory();

    const defaultItem = window.localStorage.getItem('cartItems');

    useEffect(() => {
        document.title = 'Carrito de compras'
    })
    
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(basket))
    }, [basket])

    
    return (
        <MainContainer>
            <div className='cart-cont'>
                {basket.length !== 0
                    ?
                    <div className='cont-cart-view'>
                        <div className='arti-cont'>
                            <div className='cont-items-quantity'>
                                <h3>{`Hay ${basket.length} articulos en tu carrito`}</h3>
                            </div>
                            {
                                basket.map((item, index) => (
                                    <CheckOutItem
                                        key={item.id}
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
                                onClick={e => history.push('/pagar')}
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
