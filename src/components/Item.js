import { useStateValue } from '../state/context/CartContext'
import { useEffect } from 'react';

const Item = (props) => {
    const { item } = props;

    const [{basket}, dispatch] = useStateValue();


    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
            },
        });
    };

    return (
        <div className='item-cont'>
            {/* <Link to={`/item/${item.name}`} className='hd-logo'> */}
                <div>
                    <img width={300} height={200} src={item.image} alt={item.name} />
                </div>
                <h2 className="color-dark title-it hd-logo" style={{ width: "300px", marginBottom: "14px" }} 
                    title={item.name}>{item.name}
                </h2>
                <span className='color-dark price-it flex mg'>
                    <div >
                        <span>{"Precio: "}</span>
                    </div>
                    <div className='flex hd-logo-l'>
                        <span>$</span> <span className='text'>{item.price}{" "}{"MXN"}</span>
                    </div>
                </span>
            {/* </Link> */}
            <Button
                onClick={addToBasket}
            />
        </div>
    )
}

export default Item

export const Button = ({ onClick }) => {
    return (
        <div className='item-btn mg'>
            <button className='itm-btn-c' onClick={onClick}>Agregar al carrito</button>
        </div>
    )
}