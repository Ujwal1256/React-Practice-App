import React, { useState } from 'react';

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Count: {count}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            ...styles.button,
            backgroundColor: count === 0 ? '#ccc' : '#f44336',
            cursor: count === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

// Simple inline styles for presentation
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  buttonContainer: {
    marginTop: '20px'
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    backgroundColor: '#4CAF50',
    borderRadius: '5px'
  }
};

export default Counter;
