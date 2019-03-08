import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectSide1,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectSide1', () => {
  const side1Selector = makeSelectSide1();
  it('should select the username', () => {
    const side1 = 2;
    const mockedState = fromJS({
      home: {
        side1,
      },
    });
    expect(side1Selector(mockedState)).toEqual(side1);
  });
});