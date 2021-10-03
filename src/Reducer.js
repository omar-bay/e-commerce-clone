export const initialState = {
    basket: [{
        id: "1234",
        title: "8gb USB Stick",
        price: 13.4,
        rating: 5,
        image: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41XzuKrTgVL._AC_.jpg"
    }],
    user: null
};

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            // clone the basket
            let newBasket = [...state.basket];

            // get the index of the item if exists, then splice it
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                // item exists
                newBasket.splice(index, 1);

            } else {
                console.warn(`Cant remove product (id: ${action.id}) not found.`);
            }

            // returns the state with basket after setting it to newBasket
            return {...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;