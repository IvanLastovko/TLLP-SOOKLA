import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ViewTable from './components/viewTable/viewTable.component';
import EditTable from './components/editTable/editTable.component';
import Header from './components/header/header.component';

import './App.scss';

function App() {
  return (
    <div >
      <Header />
      <Switch> {  /* Switching between Edit Page and main page. Edit Page is for admin use only! */}
        <Route exact path='/' component={ViewTable} />
        <Route exact path='/edit' component={EditTable} />
      </Switch>
    </div>
  );
};

export default App;