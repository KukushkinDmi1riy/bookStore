import React from 'react';
import './error-indicator.css'

const ErrorIndicator = () => {

  return (
    <div className = "err-msg">
      <h4 >Sorry!</h4>
      <span className="err-text err-msg-body"> Something is wrong!</span>
    </div>
  )
};

export default ErrorIndicator;