import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { MainContainer } from '../components/containers/MainContainer'
import ItemAlone from '../components/ItemAlone'
import items from '../utils/cartItems.json'

const ItemView = () => {

    useEffect(() => {
        document.title = `${items.name}`
    })

    return (
        <MainContainer>
            <div className='flex'>

                <ItemAlone
                    name={items.name}
                    image={items.image}
                    price={items.price}
                    quantity={items.quantity}
                    description={items.details}
                />

            </div>
        </MainContainer>
    )
}

export default ItemView
