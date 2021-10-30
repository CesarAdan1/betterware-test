import React, { useEffect } from 'react'
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
                    item={items}
               />
        </div>
        </MainContainer>
    )
}

export default ItemView
