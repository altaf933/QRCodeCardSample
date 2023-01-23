import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCodeComponent from './QRCodeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <QRCodeComponent/>
      </header>
    </div>
  );
}

export default App;
