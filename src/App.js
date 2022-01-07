import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

function App() {

  // State
  const [data, setData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios.get(baseURL)
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <div className='App-header'>
        <h1>Notes</h1>
        <ul>
          {data.map(note => (
            <li key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
