import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
       <div className="app__videos">
          <Video url = ""
          likes = {111} shares = {222} messages = {333} channel = "abhishek" description = "this is desc" song = "Closer Chainsmokers"
          />
          <Video/>
      </div>
        
        
        
        {/* app container */}
    </div>
  );
}

export default App;
