import React, { useState, useEffect } from 'react';

const ApiData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h2>API Data</h2>
      <p>Nama: Aaron</p>
      <p>NIM: A11.2021.13668</p>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiData;
