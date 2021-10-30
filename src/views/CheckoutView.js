import React from 'react'
import { CheckOutItem } from '../components/CheckOutItem'
import { MainContainer } from '../components/containers/MainContainer'
import Subtotal from '../components/SubTotal'
import { useStateValue } from '../state/context/CartContext'

export const CheckoutView = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <MainContainer>
            <div className='flex' style={{flexDirection: "column"}}>
                <div>
                    <h3>Detalles del pedido</h3>
                </div>
                <div>
                    {basket.map(item => (
                        <CheckOutItem
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
                <div>
                    <Subtotal text="Pagar" />
                </div>

            </div>
        </MainContainer>

    )
}
