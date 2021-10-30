import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'
import { Button } from './Item';

const ItemAlone = (props) => {
    const { items, match } = props;

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            items: {
                id: items.id,
                name: items.name,
                image: items.image,
                price: items.price,
            },
        });
    };

    function replaceSpace(str) {
        return str.split(' ').join('+').toLowerCase();
    }

    return (
        <div className='item-container-con'>
            <div>
                <div>
                <h2 className="color-dark title-it" style={{ width: "300px", marginBottom: "14px" }} title={items.name}>{items.name}</h2>
                <Link to={`/item/${replaceSpace(items.name)}`} className='hd-logo'>
                    <div>
                        <img width={300} height={200} src={items.image} alt={items.name} />
                    </div>
                </Link>
                </div>
                <div>
                    <p>{items.details}</p>
                </div>
            </div>
            <span className='color-dark price-it flex mg'>
                    <div >
                        <span>{"Precio: "}</span>
                    </div>
                    <div className='flex'>
                        <span>$</span> <span className='text'>{items.price}{" "}{"MXN"}</span>
                    </div>
                </span>
            <Button
                onClick={addToBasket}
            />
        </div>
    )
}

export default ItemAlone
