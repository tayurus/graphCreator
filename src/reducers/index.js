import { combineReducers } from 'redux';
import { modsReducer } from './mods.reducer.js';
import { pointsReducer } from './points.reducer.js';

export const rootReducer = combineReducers({modsReducer, pointsReducer});
