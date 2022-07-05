/* eslint-disable react/prop-types */
import React from 'react';
import './Qualifications.css';

class Qualifications extends React.Component {
  render() {
    const { qualifications } = this.props;
    return (
      <div className="qualifications">
        <h2>QUALIFICATIONS</h2>
        {qualifications.map((qualification, index) => (
          <p key={index}>{qualification}</p>
        ))}
      </div>
    );
  }
}

export default Qualifications;