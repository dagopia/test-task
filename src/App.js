import './App.css';
import React, { useEffect, useState } from 'react';
import BitCoin from './component/BitCoin';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      {isMobile ? (
        <BitCoin />
      ) : (
        <p>This is not a mobile device.</p>
      )}
    </div>
  );
}

export default App;
