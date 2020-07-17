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
import Inquilinos from './components/Inquilinos'
import Explanation from './components/Explanation'
import AutocompleteNoOptions from './components/AutcompleteNoOptions'

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Ordinarias from './components/Ordinarias';



import CozyProvider from '@quintoandar/cozy-utils/providers/CozyProvider';
import theme from '@quintoandar/cozy-core/styles/Theme';

import {injectIntl, IntlProvider, FormattedRelative, useIntl} from 'react-intl';


function App() {
  return (
    <>
      <IntlProvider locale={navigator.language} >
        <CozyProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/acordos" component={Acordos} />
            <Route exact path="/fundos" component={Fundos} />
            <Route exact path="/reformas" component={Reformas} />
            <Route exact path="/outras" component={Outras} />
            <Route exact path="/ordinarias" component={Inquilinos} />
            <Route exact path="/:ExpenseId" render={(props) => <ExpenseDetail {...props} />} />


          </Switch>
        </CozyProvider>
      </IntlProvider>

    </>
  );
}

export default App;
