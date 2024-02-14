import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate(); 

  const goHome = () => {
    navigate('/home'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Oops! Something went wrong</h1>
      <button style={{backgroundColor: 'gold'}} onClick={goHome}>Go Home</button>
    </div>
  );
};

export default ErrorPage;

