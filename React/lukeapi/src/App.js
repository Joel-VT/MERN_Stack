import './App.css';
import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import FormComponent from './components/FormComponent';
import ShowComponent from './components/ShowComponent';
import ErrorComponent from './components/ErrorComponent';

const sources = [
  'people',
  'films',
  'species',
  'vehicles',
  'planets',
  'starships'
];

function App() {
  const [search, setSearch] = useState(sources[0]);
  const [id, setId] = useState(1);
  
  const searchUpdate = (newSearch) => {
    setSearch( newSearch );
  }

  const idUpdate = (newId) => {
    setId( newId );
  }

  return (
    <div className="App">
      <FormComponent onNewSearch={ searchUpdate } onNewId={ idUpdate } sources={ sources }/>
      <Routes>
        <Route path="/:searchSource/:searchId" element={<ShowComponent />} />
      </Routes>
    </div>
  );
}

export default App;
