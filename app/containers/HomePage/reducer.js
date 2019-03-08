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
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SIDE1:
      return state.set('side1', action.side);
    case actionTypes.CHANGE_SIDE2:
      return state.set('side2', action.side);
    case actionTypes.CHANGE_SIDE3:
      return state.set('side3', action.side);
    case actionTypes.SHOW_EQ_TRIANGLE:
      return state.set('isEquilateralTriangle', true);
    case actionTypes.SHOW_ISOS_TRIANGLE:
      return state.set('isIsoscelesTriangle', true);
    case actionTypes.SHOW_SCAL_TRIANGLE:
      return state.set('isScaleneTriangle', true);
    case actionTypes.HIDE_EQ_TRIANGLE:
      return state.set('isEquilateralTriangle', false);
    case actionTypes.HIDE_ISOS_TRIANGLE:
      return state.set('isIsoscelesTriangle', false);
    case actionTypes.HIDE_SCAL_TRIANGLE:
      return state.set('isScaleneTriangle', false);
    default:
      return state;
  }
}

export default homeReducer;
