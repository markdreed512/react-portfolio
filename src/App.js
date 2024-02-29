import { useState } from 'react'
import './App.css';
import DeskNav from './components/DeskNav/DeskNav'
import Landing from './components/Main/Main'

function App() {
  return (
    <div className="App">
        <DeskNav />
        <Landing />
        <main>
          {/* {mobileMenuOpen && <MobileMenu /> } */}
        </main>
    </div>
  );
}

export default App;
