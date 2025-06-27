import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    try {
      setLoading(true); 
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'tvlndVtVHbBgQVw/nrxEfQ==8lMpmOxKjaq0VEPT',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Unknown error');
      }

      const result = await response.json();
      console.log(result[0]);
      setData(result[0]);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    fetchQuote();
    const intervalId = setInterval(fetchQuote, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <h2>Random Quote Generator</h2>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="quote-container">
          <p><strong>Quote: </strong>{data.quote}</p>
          <p><strong>Author: </strong>{data.author}</p>
        </div>
      )}

      <div>
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? 'Loading...' : 'Get New Quote'}
        </button>
      </div>
    </>
  );
}

export default App;
