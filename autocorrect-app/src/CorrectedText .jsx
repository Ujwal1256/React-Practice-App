import React from 'react';

const CorrectedText = ({ text, corrections }) => {
  let correctionCount = 0;

  const correctedWords = text.split(' ').map((word) => {
    const lower = word.toLowerCase();
    if (corrections[lower]) {
      correctionCount++;
      const corrected = corrections[lower];
      return word[0] === word[0].toUpperCase()
        ? corrected.charAt(0).toUpperCase() + corrected.slice(1)
        : corrected;
    }
    return word;
  });

  return (
    <div>
      <p style={{ color: 'green' }}>{correctedWords.join(' ')}</p>
      <p style={{ fontSize: '14px', color: '#555' }}>
         {correctionCount} word{correctionCount !== 1 ? 's' : ''} corrected
      </p>
    </div>
  );
};

export default CorrectedText;
