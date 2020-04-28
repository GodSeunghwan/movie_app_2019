import React from 'react';

function Food({ favourite }) {
  return (
    <h1>I like {favourite}!</h1>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Food favourite="apple" />
      <Food favourite="banana" />
      <Food favourite="grape" />
      <Food favourite="peach" />
    </div>
  );
}

export default App;
