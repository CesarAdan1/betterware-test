export const storageKey = "cartItems"

export const initialState = {
    basket: window.localStorage.getItem("cartItems") !== null
    ? JSON.parse(window.localStorage.getItem("cartItems"))
    : []
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const cartReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `No se puede eliminar el articulo con el  (id: ${action.id})`
                )
            }

            localStorage.removeItem(storageKey);

            return {
                ...state,
                basket: newBasket
            }

        case "INCREMENT_ITEM":
            return state.basket.find((item) => item.name === action.item.name)?.quantity === 1
        ? state.basket.filter((item) => item.name !== action.item.name)
        : state.basket.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          );
        case 'CLEAR_CART':
            return { initialState }

        default:
            return state;
    }
};

export const decrementItemQuantity = (item) => ({
    type: "DECREMENT_QUANTITY",
    item
  });
  
  export const removeFromCart = (item) => ({
    type: "REMOVE_FROM_CART",
    item
  });

export default cartReducer;
