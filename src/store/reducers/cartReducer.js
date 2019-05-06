import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    cartItems: []
}

/*
    cartItem = [
        {
            abv: "0.05"
            ibu: ""
            id: 1436
            name: "Pub Beer"
            ounces: 12
            price: 154
            style: "American Pale Lager",
            count: 2
        }
    ]


*/
function addItemsToCart(cartItems, itemDetails){
    cartItems.push(itemDetails);
    return cartItems;
}

function editItemsToCart(cartItems, itemDetails) {
    let index = -1;
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id == itemDetails.id){
            index = i;
        }
    }
    cartItems[index] = itemDetails;
    return cartItems;
}

function removeItemFromCart(cartItems, cardId) {
    let index = -1;
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id == cardId){
            index = i;
        }
    }
    cartItems.splice(index, 1);
    return cartItems;
}

const cartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.itemDetails)
            }
        case ACTION_TYPES.EDIT_ITEM_IN_CART:
            return {
                ...state,
                cartItems: editItemsToCart(state.cartItems, action.itemDetails)
            }
        case ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.itemId)
            }

        default:
            return state;
    }
}

export default cartReducer;