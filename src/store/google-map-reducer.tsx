// Action Types - LOAD, CREATE, UPDATE, REMOVE
const CHANGE_SELECTED_LOCATION = 'google-map-reducer/SELECT_LOCATION';

// Action Creators
export const changeSelectedLocation = (payload: any) => ({
  type: CHANGE_SELECTED_LOCATION,
  payload
});

// Reducer
export interface IGoogleMapReducer {
  isLoading: boolean;
  errorMessage: string | null;
  lastUpdated: Date | null;
  selectedLocation: any;
}
const initialState: IGoogleMapReducer = {
  isLoading: false,
  errorMessage: null,
  lastUpdated: null,
  selectedLocation: null
};

export default function reducer(state = initialState, action: FluxStandardAction<any>): IGoogleMapReducer {
  switch (action.type) {
    case CHANGE_SELECTED_LOCATION:
      return Object.assign({}, state, {
        selectedLocation: action.payload
      });

    default: return state;
  }
}
