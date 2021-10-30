import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../state/context/CartContext'
import { getBasketTotal } from "../state/context/cartReducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="txt-tot">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    <div className='item-btn mg'>
            <button className='itm-btn-c' onClick={e => history.push('/pagar')}>Proceder al Pago</button>
        </div>
    </div>
  );
}

export default Subtotal;