import React, { useEffect, Fragment }  from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'

export const CheckOutItem = ({
    hideButton, id, name, image, price
}) => {
    const [{basket}, dispatch] = useStateValue();

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(basket))
    }, [basket])

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const addMoreQuantity = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            items: {
                id: id,
                name: name,
                image: image,
                price: price,
            },
        });
    }

    const addLessQuantity = () => {
        dispatch({
            type: 'DECREMENT_ITEM',
            
        })
    }

  const canasta = basket

    return (
        <Fragment>
            <div className='item-cont col-flex' style={{width: "300px"}}>
                <Link to={`/item/${name}`} className='hd-logo'>
                    <div>
                        <img width={300} height={200} src={image} alt={name} />
                    </div>
                    <h2 className="color-dark title-it" style={{ width: "300px", marginBottom: "14px" }} title={name}>{name}</h2>

                    <span className='color-dark price-it flex mg'>
                        <div >
                            <span>{"Precio: "}</span>
                        </div>
                        <div className='flex'>
                            <span>$</span> <span className='text'>{price}{" "}{"MXN"}</span>
                        </div>
                    </span>
                </Link>
                <div>
                    <div className='flex mg'>
                        <span className='plus' onClick={addMoreQuantity}>
                            +
                        </span>
                        <span className='num'>
                            {canasta.length}
                        </span>
                        <span className='less' onClick={addLessQuantity}>
                            -
                        </span>
                    </div>
                    {!hideButton && (
                        <div className='item-btn mg'>
                            <button className='itm-btn-c' onClick={removeFromBasket}>Eliminar</button>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    )
}