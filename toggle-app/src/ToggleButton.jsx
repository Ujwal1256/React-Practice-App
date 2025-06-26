import React, { useState } from 'react';

const ToggleButton = ({ label = '' }) => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div style={styles.container}>
      {label && <span style={styles.label}>{label}:</span>}
      <button
        onClick={toggle}
        style={{
          ...styles.button,
          color: isOn ? 'green' : 'red'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '20px'
  },
  label: {
    fontSize: '18px'
  },
  button: {
    fontSize: '18px',
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'white'
  }
};

export default ToggleButton;
