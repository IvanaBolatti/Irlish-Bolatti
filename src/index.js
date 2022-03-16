import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
const App = (
  <>
  <NavBar/>
  <div>
  <ItemList/>
  </div>
 
  </>
  );


ReactDOM.render(
  App,
  document.getElementById('root')
);