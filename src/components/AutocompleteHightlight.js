/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { expenses } from '../ExpensesData'
import { expensesAll } from '../AllExpensesData'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';


import Link from '@quintoandar/cozy-core/Link';

const filter = createFilterOptions();

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    padding: '8px 0 4px 0',
    borderBottom: "1px solid #e0e0e0",
    color: '#424242',
    width: '100%',
    display: 'block',
    '&hover': {
      color: '#5063F0'
    }
  },
  linkPrimary: {
    textDecoration: 'none',
    padding: '16px 0',
    fontWeight: '700',
    color: '#5063F0',
    width: '100%',
    display: 'block'
  },
  textField: {
    background: 'white'
  }, 
  caption: {
    display: 'inline-block'
  },
  linkAutocomplete: {
    margin: '0 0px 0 4px'
  }
}));

export default function AutocompleteHighlight() {
  const expenseData = expensesAll.sort((a, b) => (a.name > b.name) ? 1 : -1);;

  const [expenseInfo, setExpenseInfo] = useState(expenseData);

  const classes = useStyles();

  const [val, setVal] = useState({})


  return (
    <>
      <Autocomplete
        id="highlights-demo"
        style={{ width: '100%' }}
        options={expenseInfo}
        getOptionLabel={option => option.searchable}
        renderInput={params => (
          <TextField autoFocus {...params} className={classes.textField} variant="outlined" margin="normal" />
        )}
        renderOption={(option, { inputValue }) => {

          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);

          return (
            <>
              <Box button component={RouterLink} to={{ pathname: option.url, data: inputValue }} className={option.url == "/nao-achei" ? classes.linkPrimary : classes.link}>

                {parts.map((part, index) => (


                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>



                ))}

                

              </Box>
            </>
          );
        }}
        filterOptions={(options, params) => {

          params.inputValue = params.inputValue.replace(/\./g, '')

          const filtered = filter(options, params);
          console.dir(params.inputValue)

          // Suggest the creation of a new value
          //if (params.inputValue !== "" && filtered.length >= 0) {
            filtered.push({
              inputValue: params.inputValue,
              name: `Não achei a despesa na lista`,
              url: "/nao-achei"
            });
          //}

          return filtered;
        }}
      />


      <Typography variant="caption" className={classes.caption}>Mais comuns: </Typography>

      <Link className={classes.linkAutocomplete} component={RouterLink} message={('message', {
        id: '11',
        defaultMessage: 'Fundo - Reserva'
      })} to={'/fundoreserva'} target={('target', ['_blank', '_parent', '_self', '_top'], '_self')}
      />,

      <Link className={classes.linkAutocomplete} component={RouterLink} message={('message', {
        id: '11',
        defaultMessage: 'Fundo - Obras'
      })} to={'/obras'} target={('target', ['_blank', '_parent', '_self', '_top'], '_self')}
      />

    </>
  );
}
