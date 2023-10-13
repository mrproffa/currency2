import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const URL = ''
  const [eur, setEur] = useState(0);
  const [sek, setSek] = useState(0);
  const [rate, setRate] = useState(0);

  const convert = (e) => {

    e.preventDefault()
    axios.get(URL)
      .then((response) => {
        const json = response.data
        setRate(json.data.SEK);
        setSek(eur * json.data.SEK);
      }).catch(error => {
        alert(error)
      })
  }

  return (
    <div id="container">
      <h3> EURSEK exchage </h3>
      <form onSubmit={convert}>
        <div>
          <label>EUR</label>
          <input type="number" step="0.01" value={eur} onChange={e => setEur(e.target.value)} />
          <uotput>{rate}</uotput>
        </div>
        <div>
          <label>SEK</label>
          <output>{sek.toFixed(2)}</output>
        </div>
        <div>
          <button>Calculator</button>
        </div>
      </form >
    </div>
  );
}

export default App;
