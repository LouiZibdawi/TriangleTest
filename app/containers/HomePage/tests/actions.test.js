import * as actionTypes from '../constants';
import * as actions from '../actions';

describe('Home Actions', () => {
  describe('changeSide1', () => {
    it('should return the correct type and the passed side value', () => {
      const side = 1;
      const expectedResult = {
        type: actionTypes.CHANGE_SIDE1,
        name: side
      };

      expect(actions.changeSide1(side)).toEqual(expectedResult);
    });
  });

  describe('showEquilateralTriangle', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.SHOW_EQ_TRIANGLE,
      };

      expect(actions.showEquilateralTriangle()).toEqual(expectedResult);
    });
  });

  describe('hideEquilateralTriangle', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: actionTypes.HIDE_EQ_TRIANGLE,
      };

      expect(actions.hideEquilateralTriangle()).toEqual(expectedResult);
    });
  });

});