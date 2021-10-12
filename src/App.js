import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import MobileMenu from './components/MobileMenu';
import MobileMenuContext from './components/MobileMenuContext';

function App() {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(true)
  return (
    <div className="App">
      <MobileMenuContext.Provider value={[mobileMenuOpen, setMobileMenuOpen]}>
        <Header />
        <main>
          {mobileMenuOpen && <MobileMenu /> }
        </main>
      </MobileMenuContext.Provider>
    </div>
  );
}

export default App;
