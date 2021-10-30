import React, { useEffect, Fragment }  from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'

export const CheckOutItem = ({
    hideButton, id, name, image, price
}) => {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const addMoreQuantity = () => {
        dispatch({
            type: "INCREMENT_ITEM",
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
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

  const canasta = basket

    return (
        <Fragment>
            <div className='item-cont col-flex' style={{width: "300px"}}>
                {/* <Link to={`/item/${name}`} className='hd-logo' title={name}> */}
                    <div>
                        <img width={300} height={200} src={image} alt={name} />
                    </div>
                    <h2 className="color-dark title-it hd-logo" style={{ width: "300px", marginBottom: "14px" }} title={name}>{name}</h2>

                    <span className='color-dark price-it flex mg hd-logo-l' style={{width: '300px'}}>
                        <div >
                            <span>{"Precio: "}</span>
                        </div>
                        <div className='flex'>
                            <span>$</span> <span className='text hd-logo-l'>{price}{" "}{"MXN"}</span>
                        </div>
                    </span>
                {/* </Link> */}
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
