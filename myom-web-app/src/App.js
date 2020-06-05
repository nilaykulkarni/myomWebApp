import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar'
import PermanentDrawerLeft from './components/Drawer'
import Blog from './components/Blog'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Blog/>
      </React.Fragment>
    </div>
  );
}

export default App;
