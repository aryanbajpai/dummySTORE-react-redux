import { ActionTypes } from "../Constants/Action-types"

export const setPrdt = (prdts) => {
    return {
        type: ActionTypes.SET_PRDTS,
        payload: prdts,
    };
};

export const selectedPrdt = (prdt) => {
    return {
        type: ActionTypes.SELECTED_PRDT,
        payload: prdt,
    };
};

export const removePrdt = () => {
    return {
        type: ActionTypes.REMOVE_PRDTS,
    };
};