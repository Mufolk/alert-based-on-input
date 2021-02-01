import {useState} from 'react';
import './App.css';

const App = () => {
  const [phrase, setPhrase] = useState("");
  
  if (phrase === 'open sesame') {
    alert('you may pass!');
  }

  return (
    <div className="App">
      <h2>What is the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
        placeholder="Super duper secret"
      />

      <p>
        Hint: It's <strong>Open sesame</strong>
      </p>
    </div>
  );
}

export default App;
