import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'
import { MainContainer } from './containers/MainContainer';
import { Button } from './Item';

const ItemAlone = (props) => {
    const { name, image, quantity, description, id, price } = useParams()
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
                quantity: quantity,
            },
        });
    };

    return (
        <MainContainer>
            <div className='item-cont' style={{ color: 'black' }} key={id}>
                <div>
                    <img className='img-item' src={image} alt={name} />
                </div>
                <h2 className="color-dark title-it hd-logo" style={{ width: "300px", marginBottom: "14px" }}
                    title={name}>{name}
                </h2>
                <div className='color-dark' style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2 className="color-dark title-it hd-logo">Detalles</h2>
                    <p style={{ fontSize: '13px' }}>
                        {description}
                    </p>
                </div>
                <span className='color-dark price-it flex mg'>
                    <div >
                        <span>{"Precio: "}</span>
                    </div>
                    <div className='flex hd-logo-l'>
                        <span>$</span> <span className='text'>{price}{" "}{"MXN"}</span>
                    </div>
                    <Button
                        onClick={addToBasket} />
                </span>
            </div>
        </MainContainer>
    )
}

export default ItemAlone
