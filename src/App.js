import React from 'react';
import logo from './logo.svg';
import useAutocomplete from '@material-ui/lab/useAutocomplete';

import NavBar from './components/NavBar'
import FolderList from './components/List'
import Autocomplete from './components/Autocomplete'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import ExpenseDetail from './components/ExpenseDetail'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Acordos from './components/Acordos'
import Fundos from './components/Fundos'
import Others from './components/Others'
import AutocompleteNoOptions from './components/AutcompleteNoOptions'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="https://lotsuka.com/react-deploy/" component={Home} />
        <Route exact path="/react-deploy/acordos" component={Acordos} />
        <Route exact path="/Fundos" component={Fundos} />
        <Route exact path="/Others" component={Others} />
        <Route exact path="/Autocomplete" render={(props) => <AutocompleteNoOptions {...props} />} />
        <Route exact path="/:ExpenseId" render={(props) => <ExpenseDetail {...props} />} />
        
      </Switch>
    </>
  );
}

export default App;
