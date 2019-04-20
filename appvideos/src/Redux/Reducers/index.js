import { combineReducers } from "redux";

import { searchColumn, removeColumn } from "./search";
/**
 *  Combine Reducers
 */

const reducers = combineReducers({ searchColumn, removeColumn });

export default reducers;
