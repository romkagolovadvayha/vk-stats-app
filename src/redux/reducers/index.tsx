import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import user from "./user";
import token from "./token";
import group from "./group";
import groups from "./groups";
import popoutApp from "./popoutApp";
import modalApp from "./modalApp";
import friends from "./friends";
import utils from "./utils";
import userBy from "./userBy";
import execute from "./execute";

export default combineReducers({
    routing: routerReducer,
    user,
    token,
    group,
    groups,
    popoutApp,
    modalApp,
    friends,
    utils,
    userBy,
    execute,
});