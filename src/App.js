import React from 'react'
import './App.scss'
import LoginForm from './components/LoginForm/LoginForm';
import TextSection from './components/TextSection/TextSection';
function App() {

  return (
    <div className='main-container'>
      <LoginForm />
      <TextSection />
    </div>
  );
}

export default App;
