import * as Types from './../constants/ActionType';

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}