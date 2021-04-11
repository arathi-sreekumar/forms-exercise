import React from 'react';
import './App.css';
import { OnBoarding } from './onboarding/onboarding';
import TopNav from './top-nav/top-nav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <OnBoarding />
    </div>
  );
}

export default App;
