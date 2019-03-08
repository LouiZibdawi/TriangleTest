/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import initialState from './reducer';

const selectHome = (state) => state.get('home', initialState);

const makeSelectSide1 = () => createSelector(
  selectHome,
  (homeState) => homeState.get('side1')
);
const makeSelectSide2 = () => createSelector(
  selectHome,
  (homeState) => homeState.get('side2')
);

const makeSelectSide3 = () => createSelector(
  selectHome,
  (homeState) => homeState.get('side3')
);

const makeSelectShowET = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isEquilateralTriangle')
);
const makeSelectShowIT = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isIsoscelesTriangle')
);

const makeSelectShowST = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isScaleneTriangle')
);


export {
  selectHome,
  makeSelectShowET,
  makeSelectShowIT,
  makeSelectShowST,
  makeSelectSide1,
  makeSelectSide2,
  makeSelectSide3,
};
