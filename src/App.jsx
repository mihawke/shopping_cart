import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './App.module.css'
import Home from './pages/Home'

function App() {
  const [sharedData, setSharedData] = useState([]);
  const location = useLocation();
  return (
    <div id='app' className={styles.app}>
      <header>
        <h2>Shopping Cart</h2>
        <nav>
          <Link to={'home'} style={location.pathname == '/home' ? { borderBottom: '2px solid purple' } : null}>Home</Link>
          <Link to={'shop'} style={location.pathname == '/shop' ? { borderBottom: '2px solid purple' } : null}>Shop</Link>
        </nav>
      </header>
      <Outlet context={{ sharedData, setSharedData }} />
    </div>
  )
}

export default App
