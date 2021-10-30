import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../state/context/CartContext'

const Item = (props) => {
    const { item } = props;

    const [ dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
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
        <div>
            <Link to={`/item/${item.name}`} className='hd-logo'>
           <h2 className="color-dark title-it" title={item.name}>{item.name}</h2> 
           <div>
               <img  width={300} height={200}src={item.image} alt={item.name}/>
           </div>
           <span className='color-dark price-it'>
                {item.price}
           </span>
           </Link>
           <div>
            <button onClick={addToBasket}>Add to Basket</button>
           </div>
        </div>
    )
}

export default Item
