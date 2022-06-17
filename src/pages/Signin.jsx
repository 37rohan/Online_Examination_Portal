import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../components/NavAdmin.css'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <Button className='btn' onClick={handleGoogleSignIn}>
      SignIn
    </Button>
  );
};

export default Signin;
