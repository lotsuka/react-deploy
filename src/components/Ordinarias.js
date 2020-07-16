import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar'
import { makeStyles } from '@material-ui/core/styles';
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
import { Typography } from '@material-ui/core';

import Alert from '@quintoandar/cozy-core/Alert';
import CancelIcon from '@material-ui/icons/Cancel';

import Box from '@material-ui/core/Box';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import ToolBar from '@material-ui/core/ToolBar'
import Icon from '@material-ui/core/Icon';

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
    buttonSecondary: {
        textTransform: 'none',
        fontWeight: '700',
        borderRadius: '8px'
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
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        margin: '16px 0',
        color: "#5063F0",
        '&hover': {
            textDecoration: "underline",
            color: 'red'
        }
    }
}));

export default function Ordinarias(props) {
    const classes = useStyles();
    const { history } = props;
    const expenseData = expenses;
    console.log(expenseData)

    return (
        <>


            <Box mt="4rem" />
            <Typography variant="h4" className={classes.title}> Despesas de pagamento de inquilinos</Typography>

            <Box mt="1rem" />

            <Paper variant="outlined" className={classes.alertAttention}>
                <ToolBar>
                    <Icon edge="start" className={classes.alertIcon} color="inherit" aria-label="menu">
                        <MoneyOffIcon />
                    </Icon>


                    <Typography variant="body1">Você não tem direito a pedir reembolso das despesas de inquilinos</Typography>
                </ToolBar>
            </Paper>


            <Typography variant="body1" className={classes.body1}>Chamada de ordinárias, essas depesas são relacionadas a gastos rotineiros para a manutenção do condomínio. Elas podem ser: </Typography>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000619791-Consumos">Consumos do imóvel, como água</Link>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000629032-Cotas-condominiais">Cotas condominiais</Link>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000629352-Corre%C3%A7%C3%B5es-na-fatura">Correções na fatura</Link>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000619851-Encargos-e-honor%C3%A1rios">Encargos e honorários, como 13° salário</Link>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000629132-Fundos-para-manuten%C3%A7%C3%A3o">Fundos para manutenção</Link>
            <Link className={classes.link} to="">Impostos</Link>
            <Link className={classes.link} to="https://help.quintoandar.com.br/hc/pt-br/articles/115000629432-Uso-dos-servi%C3%A7os-do-condom%C3%ADnio">Uso dos serviços do condomínio</Link>


            <Button fullWidth variant="outlined" className={classes.buttonSecondary} size="large" color="primary" className={classes.buttonSecondary} onClick={() => history.push("/")}>Voltar à lista de reembolsos</Button>

        </>
    );
}