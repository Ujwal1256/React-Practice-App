import React from 'react';

const ProfileCard = ({
  name = 'Rohit Sharma',
  age = 18,
  bio = 'No biography provided.'
}) => {
  const truncateBio = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + '… Read More';
    }
    return text;
  };

  return (
    <div >
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{truncateBio(bio)}</p>
    </div>
  );
};

export default ProfileCard;
