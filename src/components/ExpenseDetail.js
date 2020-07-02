import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import NavBar from './NavBar'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { expenses } from '../ExpensesData'
import { Route, BrowserHistory, Switch } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

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
        lineHeight: '20px',
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

    const result = expenseInfo.filter(expenseRow => expenseRow.name == expenseName);

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
                                {expenseName}
                            </Typography>
                            </ToolBar>
                        </AppBar>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.grid}>

                        <Typography variant="h5" className={classes.title}>{expenseName}</Typography>
                        <Paper variant="outlined">
                            <Typography variant="h6">Você pode pedir reembolso dessa despesa</Typography>
                        </Paper>

                        <Typography variant="body"  className={classes.body1}>
                            {result[0].description}
                        </Typography>
                        <br />
                        <Button fullWidth size="large" variant="contained" className={classes.buttonPrimary} color="primary">Pedir reembolso dessa despesa</Button>
                    </Grid>
                </Grid>
            </>
        );
    }
    else {
        return (
            <>
                <NavBar> </NavBar>
                <Typography variant="h4">{expenseName}</Typography>
                <Paper variant="outlined">
                    <Typography variant="h6">Despesa não existente</Typography>

                    <List>
                        <ListItem button component={Link} to="/react-deploy/fundos/">
                            <ListItemText primary="Fundos" secondary="Fundos para eventual inadimplência, obras no condomínio ou cobrir despesas não previstas. " />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="comments">
                                    <ChevronRight />
                                </IconButton>
                            </ListItemSecondaryAction>

                        </ListItem>
                    </List>

                </Paper>
            </>
        );
    }


}