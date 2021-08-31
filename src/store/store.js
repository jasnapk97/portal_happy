import { createStore } from "redux";

import rootreducer from "./rootReducer";

import logger from "redux-logger";

import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(rootreducer, applyMiddleware(logger, thunk));

export default store;
