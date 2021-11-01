import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'

export const CheckOutItem = ({
    hideButton, id, name, image, price, quantity, description
}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    function replaceChar(str) {
        let newString = str.replace(/_/g, "+")

        return newString
    }
    return (
        <Fragment>
            <div className='col-flex' style={{ width: "300px" }} key={id}>

                <div className='' style={{ width: "100%" }}>
                    <Link to={`/item/${replaceChar(name)}`} className='hd-logo' title={name}>
                        <div>
                            <img className="img-item" src={image} alt={name} />
                        </div>
                    </Link>
                    <Link to={`/item/${name}`} className='hd-logo' title={name}>

                        <h2 className="color-dark title-it hd-logo" style={{ width: "300px", marginBottom: "14px" }} title={name}>{name}</h2>
                    </Link>
                    <span className='color-dark price-it flex mg hd-logo-l' style={{ width: '300px' }}>
                        <div >
                            <span>{"Precio: "}</span>
                        </div>
                        <div className='flex'>
                            <span>$</span> <span className='text hd-logo-l'>{price}{" "}{"MXN"}</span>
                        </div>
                    </span>
                    <div>
                        <div className='flex mg'>

                            <span className='num flex'>
                                <span className='flex'>{"Cantidad: "}</span>{" "}{name[0].length}
                            </span>

                        </div>
                        {!hideButton && (
                            <div className='item-btn mg'>
                                <button className='itm-btn-c' onClick={removeFromBasket}>Eliminar</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
