import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import * as actions from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      side1: '',
      side2: '',
      side3: '',
      isEquilateralTriangle: false,
      isIsoscelesTriangle: false,
      isScaleneTriangle: false,
      isInvalidInput: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUsername action correctly', () => {
    const side = 2;
    const expectedResult = state.set('side1', side);

    expect(homeReducer(state, actions.changeSide1(side))).toEqual(expectedResult);
  });
});