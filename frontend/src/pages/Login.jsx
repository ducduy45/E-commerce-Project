import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [registeredUser, setRegisteredUser] = useState(null);

  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    if (currentState === 'Login') {
      if (
        registeredUser &&
        email === registeredUser.email &&
        password === registeredUser.password
      ) {
        navigate('/');
      } else {
        setError('Email or password is incorrect.');
        setSuccess(false);
      }
    } else {
      setRegisteredUser({
        username: username,
        email: email,
        password: password
      });
      setCurrentState('Login');
      setSuccess(true);
      setError('Sign up successful! Please login.');
      setEmail('');
      setPassword('');
      setUsername('');
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-shadow-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? null : (
        <input
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Username'
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      )}
      <input
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === 'Login'
          ? <p
            onClick={() => { setCurrentState('SignUp'); setError(''); setSuccess(false); }}
            className='cursor-pointer'
          >Create Account</p>
          : <p
            onClick={() => { setCurrentState('Login'); setError(''); setSuccess(false); }}
            className='cursor-pointer'
          >Login Here</p>
        }
      </div>
      {error && (
        <div
          className={
            "w-full px-3 py-2 rounded text-sm text-center " +
            (success
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600")
          }
        >
          {error}
        </div>
      )}
      <button
        type="submit"
        className='bg-black text-white font-light px-8 py-2 mt-4'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login
