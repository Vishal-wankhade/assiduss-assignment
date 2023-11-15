import './App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { useState, useEffect } from 'react';

function App() {
  const [barStatus, setbarStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with a setTimeout
    const fetchData = async () => {
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after the data is "loaded"
      }, 2000); // Simulate a 2-second loading time
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="App">
      {isLoading ? (
        <div className="spinner"></div>
      ) : (
        <>
          <Sidebar barStatus={barStatus} setbarStatus={setbarStatus} />
          <Hero barStatus={barStatus} setbarStatus={setbarStatus} />
        </>
      )}
    </div>
  );
}

export default App;
