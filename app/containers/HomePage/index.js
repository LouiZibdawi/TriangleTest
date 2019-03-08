/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import PropTypes from 'prop-types';
import './style.scss';
import EquilateralTriangle from '../../components/equilateralTriangle';
import IsoscelesTriangle from '../../components/isoscelesTriangle';
import ScaleneTriangle from '../../components/scaleneTriangle';
import * as selectors from './selectors';
import * as actions from './actions';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  /*
   * This function will search the store for the triangle that should be being displayed and display that
   */

  calculateTriangle() {
    const { side1, side2, side3 } = this.props;
    let numMatches = 0;
    if(side1 != 0 && side1 != '' && side2 != 0 && side2 != '' && side3 != 0 && side3 != '') {
      if(side1 == side2) 
        numMatches++;
      if(side1 == side3)
        numMatches++;
      if(side2 == side3)
        numMatches++;
      console.log(numMatches);
      this.displayResult(numMatches);
    } 
  }
  displayResult(numMatches) {
    const {
      hideEquilateralTriangle, hideIsoscelesTriangle, hideScaleneTriangle,
      showEquilateralTriangle, showIsoscelesTriangle, showScaleneTriangle
    } = this.props;

    switch(numMatches) {
      case 0:
        hideEquilateralTriangle();
        hideIsoscelesTriangle();
        showScaleneTriangle();
        break;
      case 1:
        hideEquilateralTriangle();
        showIsoscelesTriangle();
        hideScaleneTriangle();
        break;
      case 3:
        showEquilateralTriangle();
        hideIsoscelesTriangle();
        hideScaleneTriangle();
        break;
      default:
        return;
    }
  }

  render() {
    const {
      isEquilateralTriangle, isIsoscelesTriangle, isScaleneTriangle, 
      onChangeInput1, onChangeInput2, onChangeInput3
    } = this.props;
    
    console.log(isEquilateralTriangle, isIsoscelesTriangle, isScaleneTriangle);

    return (
      <div className="homePage">
        <br></br>
        <h2> Welcome to my triangle testing website</h2>
        <br></br>
        <p> I hope you enjoy this highly complex and highly challenging algorithm that I have made. 
          Please enter 3 sides of a triangle below. When the algorithm is complete 
          you will see what type of Triangle you have made below</p>
        <form id="inputVals" onSubmit={this.calculateTriangle()}>
          <input className="form-control" type="text" placeholder="Side #1" onChange={onChangeInput1}/>
          <input className="form-control" type="text" placeholder="Side #2" onChange={onChangeInput2}/>
          <input className="form-control" type="text" placeholder="Side #3" onChange={onChangeInput3}/>
        </form>
        <br></br>
        {isEquilateralTriangle &&
          <EquilateralTriangle></EquilateralTriangle>
        }
        {isIsoscelesTriangle &&
          <IsoscelesTriangle></IsoscelesTriangle>
        }
        {isScaleneTriangle &&
          <ScaleneTriangle></ScaleneTriangle>
        }
        <br></br>
      </div>
    );
  }
}

HomePage.propTypes = {
  side1: PropTypes.string,
  side2: PropTypes.string,
  side3: PropTypes.string,

  calculateTriangle: PropTypes.func,
  isEquilateralTriangle: PropTypes.bool,
  isIsoscelesTriangle: PropTypes.bool,
  isScaleneTriangle: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  calculateTriangle: (side1, side2, side3) => dispatch(actions.calculateTriangle(side1, side2, side3)),
  onChangeInput1: (evt) => dispatch(actions.changeSide1(evt.target.value)),
  onChangeInput2: (evt) => dispatch(actions.changeSide2(evt.target.value)),
  onChangeInput3: (evt) => dispatch(actions.changeSide3(evt.target.value)),
  showEquilateralTriangle: () => dispatch(actions.showEquilateralTriangle()),
  showIsoscelesTriangle: () => dispatch(actions.showIsoscelesTriangle()),
  showScaleneTriangle: () => dispatch(actions.showScaleneTriangle()),
  hideEquilateralTriangle: () => dispatch(actions.hideEquilateralTriangle()),
  hideIsoscelesTriangle: () => dispatch(actions.hideIsoscelesTriangle()),
  hideScaleneTriangle: () => dispatch(actions.hideScaleneTriangle()),
});

const mapStateToProps = createStructuredSelector({
  isEquilateralTriangle: selectors.makeSelectShowET(),
  isIsoscelesTriangle: selectors.makeSelectShowIT(),
  isScaleneTriangle: selectors.makeSelectShowST(),
  side1: selectors.makeSelectSide1(),
  side2: selectors.makeSelectSide2(),
  side3: selectors.makeSelectSide3(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(HomePage);
