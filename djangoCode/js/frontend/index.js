import React from 'react'
import ReactDOM from 'react-dom'


function Welcome(props) {
  return <h1>Hello, World</h1>;
}

const element = <Welcome name="world" />;
ReactDOM.render(
  element,
  document.getElementById('react')
);
