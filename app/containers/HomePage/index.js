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
  /** 
   * calculateTriangle - Gets the 3 sides currently entered and checks how many of them match
   *  @params
   *    - side1, side2, side3 (string): The values in the input boxes
   *  @props / @functions
   *    - showInvalidInputError (func): action to hide or show the input error message
   *    - showTriangle (func): action to hide or show triangle results
   *  @output
   *    - Error check the inputs and hide/show error messages
   */
  calculateTriangle() {
    const { side1, side2, side3  } = this.props;
    let numMatches = 0;

    //Check to see if all three input boxes are filled
    if(side1 != 0 && side1 != '' && side2 != 0 && 
      side2 != '' && side3 != 0 && side3 != '') {

      //Check to see if all three sides are floats. If yes, compare all sides and find how many are equal
      if(parseFloat(side1) && parseFloat(side2) && parseFloat(side3)) {
        if(side1 == side2) 
          numMatches++;
        if(side1 == side3)
          numMatches++;
        if(side2 == side3)
          numMatches++;
        
        //Display the triangle depending on the number of matches found
        this.displayResult(numMatches);
      }
      else {
        this.props.showInvalidInputError(true);
        this.props.showTriangle('isEquilateralTriangle', false);
        this.props.showTriangle('isIsoscelesTriangle', false);
        this.props.showTriangle('isScaleneTriangle', false);
      }
    }
    else { //Hide everything until everything is filled
      this.props.showInvalidInputError(false);
      this.props.showTriangle('isEquilateralTriangle', false);
      this.props.showTriangle('isIsoscelesTriangle', false);
      this.props.showTriangle('isScaleneTriangle', false);
    } 
  }

  /**
   * displayResult
   *  @params
   *    - numMatches (int): Takes in the number of side pairs that match (0, 1 or 3)
   *  @props / @functions
   *    - showInvalidInputError (func): action to hide or show the input error message
   *    - showTriangle (func): action to hide or show triangle results
   *  @output
   *    - Depending on the number of matches, hide and show different triangle result cards
   */

  displayResult(numMatches) {
    //Valid input so hide the input error
    this.props.showInvalidInputError(false);

    switch(numMatches) {
      case 0: //No sides are the same (Scalene)
        this.props.showTriangle('isEquilateralTriangle', false);
        this.props.showTriangle('isIsoscelesTriangle', false);
        this.props.showTriangle('isScaleneTriangle', true);
        break;
      case 1: //One match so two sides are the same (Isosceles)
        this.props.showTriangle('isEquilateralTriangle', false);
        this.props.showTriangle('isIsoscelesTriangle', true);
        this.props.showTriangle('isScaleneTriangle', false);
        break;
      case 3: //3 matches so all 3 sides are the same (Equilateral)
        this.props.showTriangle('isEquilateralTriangle', true);
        this.props.showTriangle('isIsoscelesTriangle', false);
        this.props.showTriangle('isScaleneTriangle', false);
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
          you will see what type of triangle you have made below</p>
        <form id="inputVals" onSubmit={this.calculateTriangle()}>
          <input className="form-control" type="text" placeholder="Side #1" onChange={this.props.onChangeInput1}/>
          <input className="form-control" type="text" placeholder="Side #2" onChange={this.props.onChangeInput2}/>
          <input className="form-control" type="text" placeholder="Side #3" onChange={this.props.onChangeInput3}/>
        </form>

        {/* Beyond this point is for the output of the algorithm. Either show an equilateral, 
        isosceles or scalene triangle.. or an invalid input message if the input is invalid*/}
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

  isEquilateralTriangle: PropTypes.bool,
  isIsoscelesTriangle: PropTypes.bool,
  isScaleneTriangle: PropTypes.bool,
  isInvalidInput: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeInput1: (evt) => dispatch(actions.changeSide1(evt.target.value)),
  onChangeInput2: (evt) => dispatch(actions.changeSide2(evt.target.value)),
  onChangeInput3: (evt) => dispatch(actions.changeSide3(evt.target.value)),

  showInvalidInputError: (show) => dispatch(actions.showInvalidInputError(show)),
  showTriangle: (isTriangle, show) => dispatch(actions.showTriangle(isTriangle, show)),
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
