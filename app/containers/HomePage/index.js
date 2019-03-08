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
  
  calculateTriangle() {
    const { side1, side2, side3  } = this.props;
    let numMatches = 0;
    if(side1 != 0 && side1 != '' && side2 != 0 && 
      side2 != '' && side3 != 0 && side3 != '') {
        console.log(side1, side2, side3);
      if(parseFloat(side1) && parseFloat(side2) && parseFloat(side3)) {
        if(side1 == side2) 
          numMatches++;
        if(side1 == side3)
          numMatches++;
        if(side2 == side3)
          numMatches++;
        console.log(numMatches);
        this.displayResult(numMatches);
      }
      else {
        this.props.showInvalidInputError();
        this.props.hideEquilateralTriangle();
        this.props.hideIsoscelesTriangle();
        this.props.hideScaleneTriangle();
      }
    } 
  }
  displayResult(numMatches) {

    this.props.hideInvalidInputError();

    switch(numMatches) {
      case 0:
        this.props.hideEquilateralTriangle();
        this.props.hideIsoscelesTriangle();
        this.props.showScaleneTriangle();
        break;
      case 1:
        this.props.hideEquilateralTriangle();
        this.props.showIsoscelesTriangle();
        this.props.hideScaleneTriangle();
        break;
      case 3:
        this.props.showEquilateralTriangle();
        this.props.hideIsoscelesTriangle();
        this.props.hideScaleneTriangle();
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="homePage">
        <br></br>
        <h2> Welcome to my triangle testing website</h2>
        <br></br>
        <p> I hope you enjoy this highly complex and highly challenging algorithm that I have made. 
          Please enter 3 sides of a triangle below. When the algorithm is complete 
          you will see what type of Triangle you have made below</p>
        <form id="inputVals" onSubmit={this.calculateTriangle()}>
          <input className="form-control" type="text" placeholder="Side #1" onChange={this.props.onChangeInput1}/>
          <input className="form-control" type="text" placeholder="Side #2" onChange={this.props.onChangeInput2}/>
          <input className="form-control" type="text" placeholder="Side #3" onChange={this.props.onChangeInput3}/>
        </form>
        {this.props.isEquilateralTriangle &&
          <EquilateralTriangle></EquilateralTriangle>
        }
        {this.props.isIsoscelesTriangle &&
          <IsoscelesTriangle></IsoscelesTriangle>
        }
        {this.props.isScaleneTriangle &&
          <ScaleneTriangle></ScaleneTriangle>
        }
        {this.props.isInvalidInput &&
          <div>
            <h3> You have entered invalid input.</h3>
            <p> Please only enter 3 numbers (integers or decimals work)</p>
            {/* MJ MEME */}
            <img src="https://gdurl.com/AiQm" alt="MJ Meme"/>
          </div>
        }
        <br></br>
        <br></br>
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
  isInvalidInput: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  calculateTriangle: (side1, side2, side3) => dispatch(actions.calculateTriangle(side1, side2, side3)),
  onChangeInput1: (evt) => dispatch(actions.changeSide1(evt.target.value)),
  onChangeInput2: (evt) => dispatch(actions.changeSide2(evt.target.value)),
  onChangeInput3: (evt) => dispatch(actions.changeSide3(evt.target.value)),

  showInvalidInputError: () => dispatch(actions.showInvalidInputError()),
  hideInvalidInputError: () => dispatch(actions.hideInvalidInputError()),

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

  isInvalidInput: selectors.makeSelectShowError(),

  side1: selectors.makeSelectSide1(),
  side2: selectors.makeSelectSide2(),
  side3: selectors.makeSelectSide3(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(withReducer, withConnect)(HomePage);
