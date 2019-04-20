import { createStore, applyMiddleware } from "redux";
import RootReducers from "./Reducers";

import logger from "redux-logger";

let middlwaers = [logger];

export default createStore(RootReducers, applyMiddleware(logger));
