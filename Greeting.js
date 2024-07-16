import React, { useState } from 'react';

const Greeting = (props) => {
  const [name, setName] = useState(props.name);

  const changeName = () => {
    setName(name === 'Aaron' ? 'Guest' : 'Aaron');
  };

  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Nama: Aaron</p>
      <p>NIM: A11.2021.13668</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default Greeting;
