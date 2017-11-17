import * as Types from './../constants/ActionType';
var initialState = [];

const products = (state = initialState, action) => {
    var { product } = action;
    switch (action.type) {
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        default: return [...state];
    }
};

export default products;