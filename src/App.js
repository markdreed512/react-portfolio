import { useState } from 'react'
import './App.css';
import DeskNav from './components/DeskNav'
import MobileMenu from './components/MobileMenu';
import MobileMenuContext from './components/MobileMenuContext';
import Landing from './components/Landing'

function App() {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false)
  return (
    <div className="App">
      <MobileMenuContext.Provider value={[mobileMenuOpen, setMobileMenuOpen]}>
        <DeskNav />
        <Landing />
        <main>
          {mobileMenuOpen && <MobileMenu /> }
        </main>
      </MobileMenuContext.Provider>
    </div>
  );
}

export default App;
