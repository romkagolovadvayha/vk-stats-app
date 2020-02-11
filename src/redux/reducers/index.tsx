import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "./user";
import popoutApp from "./popoutApp";

export default combineReducers({
    routing: routerReducer,
    user,
    popoutApp
});