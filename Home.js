import React, { useEffect, useContext } from 'react';
import { fetchUserData } from '../api/userApi';
import { UserContext } from '../contexts/UserContext';

function Home({ user }) {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    fetchUserData().then(data => {
      dispatch({ type: 'SET_USER', payload: data });
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <p>Nama: {user.name}</p>
      <p>NIM: {user.nim}</p>
    </div>
  );
}

export default Home;
