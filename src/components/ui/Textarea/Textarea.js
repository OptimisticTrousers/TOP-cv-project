/* eslint-disable react/prop-types */
import React from 'react';
import './Textarea.css';

class Textarea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <textarea required onChange={handleChange}>
        {value}
      </textarea>
    );
  }
}

export default Textarea;
