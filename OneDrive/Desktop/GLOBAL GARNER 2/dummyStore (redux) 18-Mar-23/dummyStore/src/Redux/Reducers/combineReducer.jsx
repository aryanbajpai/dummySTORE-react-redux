import { combineReducers } from "redux";
import { prdtReducer, selectedPrdtReducer } from "./PrdtReducer";

const reducers = combineReducers({
    allPrdts: prdtReducer,
    prdt: selectedPrdtReducer,
});

export default reducers;