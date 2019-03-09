/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import * as actionTypes from './constants';

// The initial state of the App
export const initialState = fromJS({
  side1: '',
  side2: '',
  side3: '',
  isEquilateralTriangle: false,
  isIsoscelesTriangle: false,
  isScaleneTriangle: false,
  isInvalidInput: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SIDE:
      return state.set(action.sideName, action.sideVal);
    case actionTypes.SHOW_TRIANGLE:
      return state.set(action.isTriangle, action.show);
    case actionTypes.SHOW_INVALID_INPUT_ERROR:
      return state.set('isInvalidInput', action.show);
    default:
      return state;
  }
}

export default homeReducer;
