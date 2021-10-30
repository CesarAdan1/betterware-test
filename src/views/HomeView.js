import React from 'react'
import { MainContainer } from '../components/containers/MainContainer'
import Item from '../components/Item'
import items from '../utils/cartItems.json'

const HomeView = (props) => {
    console.log(items)
    console.log(props)
    return (
        <MainContainer>
            <div className='wrap'>
                {items.map((item, index) => {
                    return(
                    <Item 
                        key={item.id}
                        
                        item={item}
                    />
                    )
                })}
            </div>
        </MainContainer>

    )
}

export default HomeView
