/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import * as actionTypes from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function changeSide1(side) {
  return {
    type: actionTypes.CHANGE_SIDE1,
    side
  }
}

export function changeSide2(side) {
  return {
    type: actionTypes.CHANGE_SIDE2,
    side
  }
}

export function changeSide3(side) {
  return {
    type: actionTypes.CHANGE_SIDE3,
    side
  }
}

export function showEquilateralTriangle() {
  return {
    type: actionTypes.SHOW_EQ_TRIANGLE,
  }
}

export function showIsoscelesTriangle() {
  return {
    type: actionTypes.SHOW_ISOS_TRIANGLE,
  }
}

export function showScaleneTriangle() {
  return {
    type: actionTypes.SHOW_SCAL_TRIANGLE,
  }
}

export function hideEquilateralTriangle() {
  return {
    type: actionTypes.HIDE_EQ_TRIANGLE,
  }
}

export function hideIsoscelesTriangle() {
  return {
    type: actionTypes.HIDE_ISOS_TRIANGLE,
  }
}

export function hideScaleneTriangle() {
  return {
    type: actionTypes.HIDE_SCAL_TRIANGLE,
  }
}

export function showInvalidInputError() {
  return {
    type: actionTypes.SHOW_INVALID_INPUT_ERROR,
  }
}

export function hideInvalidInputError() {
  return {
    type: actionTypes.HIDE_INVALID_INPUT_ERROR,
  }
}

