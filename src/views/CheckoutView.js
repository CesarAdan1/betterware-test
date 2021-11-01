import React, { useEffect } from 'react'
import { CheckOutItem } from '../components/CheckOutItem'
import { MainContainer } from '../components/containers/MainContainer'
import Subtotal from '../components/SubTotal'
import { useStateValue } from '../state/context/CartContext'
import { useHistory } from "react-router-dom";

export const CheckoutView = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    console.log(basket)
    useEffect(() => {
        document.title = 'Finalizar compra'
    })

    return (
        <MainContainer>
            <div className='flex mg' style={{ flexDirection: "column" }}>
                {basket.length > 0 ? 
                 <div>
                    <h3>Detalles del pedido</h3>
                </div>
                :   <div>
                <h3>No hay detalles del pedido</h3>
            </div>  
            }
                <div className='flex mgp' style={{ flexDirection: "column" }}>
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
                <div>
                    <Subtotal text={basket.length === 0 ? "Ir a Inicio" : "Pagar"} 
                        onClick={basket.length !== 0 ? e => history.push('/pagar') : e => history.push('/')}
                    />
                </div>

            </div>
        </MainContainer>

    )
}
