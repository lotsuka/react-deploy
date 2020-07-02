import React from 'react';
import logo from './logo.svg';
import useAutocomplete from '@material-ui/lab/useAutocomplete';

import NavBar from './components/NavBar'
import FolderList from './components/List'
import Autocomplete from './components/Autocomplete'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import ExpenseDetail from './components/ExpenseDetail'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Acordos from './components/Acordos'
import Fundos from './components/Fundos'
import Reformas from './components/Reformas'
import Outras from './components/Outras'
import AutocompleteNoOptions from './components/AutcompleteNoOptions'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Ordinarias from './components/Ordinarias';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/acordos" component={Acordos} />
        <Route exact path="/fundos" component={Fundos} />
        <Route exact path="/reformas" component={Reformas} />
        <Route exact path="/outras" component={Outras} />
        <Route exact path="/:ExpenseId" render={(props) => <ExpenseDetail {...props} />} />
        
      </Switch>
    </>
  );
}

export default App;
