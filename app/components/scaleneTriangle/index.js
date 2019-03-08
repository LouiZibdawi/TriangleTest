import React from 'react';
import './style.scss';

class scaleneTriangle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="scaleneTriangle" style={{display: 'inline'}}>
        <h3> You have entered in the dimensions of a <b>Scalene Triangle</b></h3>
        <p> None of the sides are the same length!</p>
        <br></br>
        <img src="https://gdurl.com/sM78" alt="Scalene Triangle" />
      </div>
    );
  }
}

export default scaleneTriangle;