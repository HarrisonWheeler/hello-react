import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{props.number} Props Total</p>
    </div>
  )
}


ReactDOM.render(
  <Hello library="React" message="Have Fun!" number={3} />,
  document.getElementById('root')
);

// components always need to be capitalized!!

