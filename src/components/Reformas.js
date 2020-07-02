import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar'
import { makeStyles, withTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button'
import { expenses } from '../ExpensesData'
import Box from '@material-ui/core/Box'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import ArrowBack from '@material-ui/icons/ArrowBack';




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
    buttonSecondary: {
        textTransform: 'none',
        fontWeight: '700',
        borderRadius: '8px',
        margin: '24px 0'
    }

}));




export default function Reformas(props) {
    const classes = useStyles();
    const { history } = props;
    const expenseData = expenses;
    const [expenseInfo, setExpenseInfo] = useState(expenseData)

    function showExpense(expense) {

        return (
            <>
                <ListItem button component={Link} to={`/${expense.url}`} >

                    <ListItemText primary={expense.name} className={classes.body1, classes.grayHigh}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Go to Acordo"  button component={Link} to={`/${expense.url}`}>
                            <ChevronRight />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </>
        );
    }

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
                            Reformas, individualizações e rateios
                            </Typography>
                        </ToolBar>
                    </AppBar>
                </Grid>
                <Grid item md={6} sm={12} className={classes.grid}>
                    <Typography variant="h5" color="inherit" className={classes.title}>
                    Reformas, individualizações e rateios
                    </Typography>
                    <Typography variant="body1" color="inherit" className={classes.body1}>
                    Valores destinados ao pagamento de serviços ou obras para o funcionamento do condomínio
                    </Typography>
                    <Box mt="2rem" />
                    <Typography variant="h5" color="inherit" spacing="4" className={classes.subheadingMedium}>
                        Escolha uma despesa dessa categoria
                    </Typography>



                    <List className={classes.root}>
                        {expenseInfo.map(expenseNumber => expenseNumber.expenseGroup == "Reformas" ? showExpense(expenseNumber) : undefined)}
                    </List>

                    <Button fullWidth variant="outlined" size="large" color="primary" className={classes.buttonSecondary} onClick={() => history.push("/")}>Voltar à lista de reembolsos</Button>

                </Grid>
            </Grid>
        </>
    );
}