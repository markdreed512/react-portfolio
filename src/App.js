import { useState } from 'react'
import './App.css';
import DeskNav from './components/DeskNav/DeskNav'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="App">
        <DeskNav />
        <Main />
    </div>
  );
}

export default App;
