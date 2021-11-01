import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../state/context/CartContext'
import { getBasketTotal } from "../state/context/cartReducer";
import { useHistory } from "react-router-dom";

const Subtotal = ({text, onClick}) => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <div className="subtotal-cont">
      {basket.length !== 0
        ?<CurrencyFormat
        renderText={(value) => (
          <>
            <p className="txt-tot">
              Subtotal ({basket.length} articulos): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        : null
      }
      
    <div className='item-btn mg'>
            <button className='itm-btn-c' onClick={onClick}>{text}</button>
        </div>
    </div>
    </div>
  );
}

export default Subtotal;