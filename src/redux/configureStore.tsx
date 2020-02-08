import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// @ts-ignore
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
// @ts-ignore
import rootReducer from './reducers';

const logger = createLogger();
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(
    createStore
);

export default (initialState?: any) => createStoreWithMiddleware(rootReducer, initialState)