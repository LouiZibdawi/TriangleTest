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
export function calculateTriangle(sides) {
  return {
    type: FIND_TRIANGLE, sides
  };
}

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
  console.log('showing eq');
  return {
    type: actionTypes.SHOW_EQ_TRIANGLE,
  }
}

export function showIsoscelesTriangle() {
  console.log('showing isos');
  return {
    type: actionTypes.SHOW_ISOS_TRIANGLE,
  }
}

export function showScaleneTriangle() {
  console.log('showing scal');
  return {
    type: actionTypes.SHOW_SCAL_TRIANGLE,
  }
}

export function hideEquilateralTriangle() {
  console.log('hiding eq');
  return {
    type: actionTypes.HIDE_EQ_TRIANGLE,
  }
}

export function hideIsoscelesTriangle() {
  console.log('hiding isos');
  return {
    type: actionTypes.HIDE_ISOS_TRIANGLE,
  }
}

export function hideScaleneTriangle() {
  console.log('hiding scal');
  return {
    type: actionTypes.HIDE_SCAL_TRIANGLE,
  }
}
