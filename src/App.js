import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MessageComponent from './component/MessageComponent';

function App() {
  return (
    <div className="App">
      <h2>LIST OF MESSAGES</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MessageComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
