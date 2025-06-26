import React, { useState } from 'react';
import CorrectedText from './CorrectedText ';

const corrections = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "wierd": "weird",
  "thier": "their"
};

const AutoCorrectApp = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2> AutoCorrect App</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={handleChange}
        style={styles.input}
      />
      <div style={styles.preview}>
        <strong>Corrected Preview:</strong>
        <CorrectedText text={inputText} corrections={corrections} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginTop: '10px'
  },
  preview: {
    marginTop: '20px',
    textAlign: 'left'
  }
};

export default AutoCorrectApp;
