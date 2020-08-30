import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Results from './components/Results';
import Bottomnav from './components/Bottomnav';
import requests from './requests';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navigation setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption} />
      <Bottomnav /> 
    </div>
  );
}

export default App;
