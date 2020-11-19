import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false)


  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}


function App() {
  return <Checkbox />
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// components always need to be capitalized!!

