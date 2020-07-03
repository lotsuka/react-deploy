/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { expenses } from '../ExpensesData'
import { Link } from 'react-router-dom'

const filter = createFilterOptions();

export default function AutocompleteHighlight() {
  const expenseData = expenses.sort((a, b) => (a.name > b.name) ? 1 : -1);;

  const [expenseInfo, setExpenseInfo] = useState(expenseData);


  return (
    <Autocomplete
      id="highlights-demo"
      style={{ width: '100%' }}
      options={expenseInfo}
      getOptionLabel={option => option.searchable}
      renderInput={params => (
        <TextField {...params} variant="outlined" margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <div>
            {

              parts.map((part, index) => (
                
                <Link to={option.url} >
                  <span
                    key={index}
                    style={{ fontWeight: part.highlight ? 700 : 400 }}
                  >
                    {part.text}
                  </span>
                </Link>
              ))}
          </div>
        );
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== "" && filtered.length == 0) {
          filtered.push({
            inputValue: params.inputValue,
            name: `Não achei na lista`,
            url: "/nao-achei"
          });
        }

        return filtered;
      }}
    />
  );
}
