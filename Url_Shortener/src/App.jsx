import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './components/InputPage';
import ResultPage from './components/ResultPage';
import RedirectPage from './components/RedirectPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/r/:shortCode" element={<RedirectPage />} />

      </Routes>
    </Router>
  );
};

export default App;
