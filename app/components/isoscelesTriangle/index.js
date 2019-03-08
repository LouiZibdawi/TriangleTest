import React from 'react';
import './style.scss';

class IsoscelesTriangle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="isoscelesTriangle" style={{display: 'inline'}}>
        <h3> You have entered in the dimensions of an <b>Isosceles Triangle</b></h3>
        <p> Two of the three sides are the same length!</p>
        <br></br>
        <img src="https://gdurl.com/OvpW" alt="Isosceles Triangle" />
      </div>
    );
  }
}

export default IsoscelesTriangle;