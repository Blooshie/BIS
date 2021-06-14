import React from 'react';
import './App.css';

function App() {

  const submitHandler  = () : void => {
    console.log("Submit form");
  }

  return (
    <div className="App">
     <h2>Login</h2>
     <form action="{submitHandler}"></form>
    </div>
  );
}

export default App;
