import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './../reducers';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
