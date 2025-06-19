import React from 'react';

function App() {
  const topics = ["React", "JavaScript", "CSS"];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Favorite Topics</h1>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
