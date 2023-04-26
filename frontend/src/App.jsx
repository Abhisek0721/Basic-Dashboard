import { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
