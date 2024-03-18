import { ActionTypes } from "../Constants/Action-types"

const initialState = {
    prdts:[],
}

export const prdtReducer = (state=initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.SET_PRDTS:
            return {...state, prdts:payload};
        default:
            return state;
    }
}

export const selectedPrdtReducer = (state={}, {type, payload} ) => {
    switch(type){
        case ActionTypes.SELECTED_PRDT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_PRDTS:
                return {};
        default:
            return state;
    }
}