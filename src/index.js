import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function ComponentFragment(){
    return <h1>This is a component, or a component fragment</h1>

}

ReactDOM.render(
     
    // <App />,
    
    // <App />,
    // <ComponentFragment />,

    <div>
        <App />
    <ComponentFragment />

    </div>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 