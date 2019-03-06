/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }
  /*
   * This function will search the store for the triangle that should be being displayed and display that
   */
  displayResult(typeTriangle) {
    switch(typeTriangle) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        return;
    }
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm
    } = this.props;

    this.displayResult(1);

    return (
      <div className="homePage">
        <br></br>
        <h2> Welcome to my triangle testing website</h2>
        <br></br>
        <p> I hope you enjoy this highly complex and highly challenging algorithm that I have made. 
          Please enter 3 sides of a triangle below and click submit. When the algorithm is complete 
          you will know what type of Triangle you have made</p>
        <form>
          <input className="form-control" type="text" placeholder="Side #1"/>
          <input className="form-control" type="text" placeholder="Side #2"/>
          <input className="form-control" type="text" placeholder="Side #3"/>
          <br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br></br>
        <div className="equilateralTriangle" style={{display: 'inline'}}>
          <h2> You have entered in the dimensions of an equilateral triangle</h2>
          <p> All three sides are the same!</p>
          <br></br>
          <img src="https://gdurl.com/WPNn" alt="Equilateral Triangle" />
        </div>
        <div className="isoscelesTriangle" style={{display: 'none'}}>
          <h2> You have entered in the dimensions of an isosceles triangle</h2>
          <p> Two of the three sides are the same!</p>
          <br></br>
          <img src="https://gdurl.com/OvpW" alt="Isosceles Triangle" />
        </div>
        <div className="scaleneTriangle" style={{display: 'none'}}>
          <h2> You have entered in the dimensions of an scalene triangle</h2>
          <p> None of the sides are the same!</p>
          <br></br>
          <img src="https://gdurl.com/sM78" alt="Scalene Triangle" />
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

HomePage.propTypes = {
  calculateTriangle: PropTypes.func,
};
