import React from 'react';
import ImageContainer from './components/ImageContainer.js'
import RecentContainer from './components/RecentContainer.js'
import SearchContainer from './components/SearchContainer.js'
import './styles/style.scss';
function App() {
  return (
    <div className="App">
      <SearchContainer/>
      <ImageContainer/>
      <RecentContainer/>
    </div>
  );
}

export default App;
