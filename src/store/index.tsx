import { createStore, combineReducers } from 'redux';

import {
  default as googleMapReducer, IGoogleMapReducer
} from './google-map-reducer';

export interface IRootReducer {
  googleMap: IGoogleMapReducer;
}
export const rootReducer = combineReducers({
  googleMap: googleMapReducer
});

// get last state from persistence
const persistedState = {};

export const store = createStore(
  rootReducer,
  persistedState
);
