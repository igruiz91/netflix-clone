import React from 'react';
import './App.css';
import Row from './components/Row';
import request from "./request";

function App() {
  const {fetchTrending} = request
  const { fetchNetflix } = request;
  return (
    <div className="App">
      <h1>netflix app</h1>
      <Row title="NETFLIX Original" fetchUrl={fetchNetflix} />
      <Row title="Trends" fetchUrl={fetchTrending} />
    </div>
  );
}

export default App;
