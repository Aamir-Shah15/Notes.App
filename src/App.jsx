import React, { useState } from 'react';
import CreateNote from './Components/CreateNote';
import './App.css';
import './notes.css';
function App() {
  const [inputText, setInputText] = useState('');

  const saveHandler = () => {
    alert('Note saved: ' + inputText);
    setInputText('');
  };

  return (
    <div className="main">
      <h1>Notes App</h1>
      <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
      />
    </div>
  );
}

export default App;