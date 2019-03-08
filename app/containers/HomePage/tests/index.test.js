/**
 * Test the HomePage
 */

import { mapDispatchToProps } from '../index';
import * as actions from '../actions';

describe('<HomePage />', () => {

  describe('mapDispatchToProps', () => {
    describe('showEquilateralTriangle', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.showEquilateralTriangle).toBeDefined();
      });

      it('should dispatch showEquilateralTriangle when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.showEquilateralTriangle();
        expect(dispatch).toHaveBeenCalledWith(actions.showEquilateralTriangle());
      });
    });

    describe('onChangeInput1', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeInput1).toBeDefined();
      });

      it('should dispatch changeSide1 when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeInput1({target: {side: 4}});
        expect(dispatch).toHaveBeenCalledWith(actions.changeSide1(4));
      });

    });
  });
});
