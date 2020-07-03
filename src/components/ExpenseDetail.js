import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './NavBar'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import ArrowBack from '@material-ui/icons/ArrowBack';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { expenses } from '../ExpensesData'
import { Route, BrowserHistory, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

import Ordinarias from './Ordinarias';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';



import { Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    appBarStyle: {
        background: 'white',
        color: 'black'
    },
    title: {
        fontWeight: '600',
        fontSize: '21px',
        lineHeight: '24px',
        color: '#424242',
        margin: '0 0 0.5rem 0',
    },
    grid: {
        padding: '1.5em 16px',
    },
    body1: {
        fontSize: '14px',
        lineHeight: '24px',
        color: '#757575',
    },
    subheadingMedium: {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#424242',
    },
    grayHigh: {
        color: '#424242',
    },
    buttonPrimary: {
        textTransform: 'none',
        fontWeight: '700',
        borderRadius: '8px',
        margin: '24px 0',
        boxShadow: 'none'
    },
    alertSuccess: {
        border: '1px solid #007844',
        color: '#007844',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '24px',
        margin: '1rem 0',

    },
    alertAttention: {
        border: '1px solid #FDB637',
        color: '#424242',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '24px',
        margin: '1rem 0',

    },
    alertIcon: {
        margin: '0 1rem'
    }
}));


export default function ExpenseDetail(props) {
    const { match } = props;
    const { params } = match;
    const { ExpenseId } = params;

    const classes = useStyles();
    const { history } = props;
    const expenseData = expenses;
    const [expenseInfo, setExpenseInfo] = useState(expenseData)

    let expenseName = ExpenseId

    const result = expenseInfo.filter(expenseRow => expenseRow.url == expenseName);

    if (result.length > 0) {
        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <AppBar position="static" className={classes.appBarStyle}>
                            <ToolBar>
                                <IconButton button edge="start" className="Back" color="inherit" aria-label="menu" onClick={() => history.push("/")}>
                                    <ArrowBack />
                                </IconButton>


                                <Typography variant="h5" color="inherit">
                                    {result[0].name}
                                </Typography>
                            </ToolBar>
                        </AppBar>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.grid}>

                        <Typography variant="h5" className={classes.title}>{result[0].name}</Typography>

                        <Paper variant="outlined" className={classes.alertSuccess}>
                            <ToolBar>
                                <Icon edge="start" className={classes.alertIcon} color="inherit" aria-label="menu">
                                    <CheckIcon />
                                </Icon>


                                <Typography variant="body1">Você pode pedir reembolso dessa despesa</Typography>
                            </ToolBar>

                            
                        </Paper>

                        <Typography variant="body" className={classes.body1, classes.grayHigh}>
                            {result[0].description}
                        </Typography>

                        <br />

                        <Button fullWidth size="large" href="https://www.figma.com/proto/vikIUDW9zdt0o0ffR3civo/Estudos-Self-Condo-Reembolso-e-Meu-Aluguel?node-id=1848%3A47659&viewport=-3728%2C-2202%2C0.3785596787929535&scaling=scale-down" variant="contained" className={classes.buttonPrimary} color="primary">Pedir reembolso dessa despesa</Button>
                    </Grid>
                </Grid>
            </>
        );
    }
    else {
        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <AppBar position="static" className={classes.appBarStyle}>
                            <ToolBar>
                                <IconButton button edge="start" className="Back" color="inherit" aria-label="menu" onClick={() => history.push("/")}>
                                    <ArrowBack />
                                </IconButton>


                                <Typography variant="h5" color="inherit">
                                    Não achei a despesa na lista
                                </Typography>
                            </ToolBar>
                        </AppBar>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.grid}>

                        
                        <Typography variant="body1" className={classes.body1, classes.grayHigh}>Confira se a despesa não é de responsabilidade de inquilino e por isso não tem direito a reembolso:</Typography>

                        <Box mt="1rem" />

                        

                        <Ordinarias></Ordinarias>
                        <br />

                        

                        
                    </Grid>
                </Grid>
            </>
        );
    }


}