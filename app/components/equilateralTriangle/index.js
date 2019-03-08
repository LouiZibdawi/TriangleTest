import React from 'react';
import './style.scss';

class EquilateralTriangle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="equilateralTriangle" style={{display: 'inline'}}>
        <h3> You have entered in the dimensions of an <b>Equilateral Triangle</b></h3>
        <p> All three sides are the same length!</p>
        <br></br>
        <img src="https://gdurl.com/WPNn" alt="Equilateral Triangle" />
      </div>
    );
  }
}

export default EquilateralTriangle;