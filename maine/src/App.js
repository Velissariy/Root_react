import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
            <Message text="Привет!"/>
            <Message text="Hello, world :)"/>
    </div>
  );
}

export default App;
