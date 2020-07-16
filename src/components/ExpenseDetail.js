import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'


import ToolBar from '@material-ui/core/ToolBar'
import AppBar from '@quintoandar/cozy-core/AppBar'
import IconButton from '@quintoandar/cozy-core/IconButton'

import Field from '@quintoandar/cozy-core/Field';
import Form from '@quintoandar/cozy-core/Form';
import Input from '@quintoandar/cozy-core/Input';


import ArrowBack from '@material-ui/icons/ArrowBack'

import CheckIcon from '@material-ui/icons/Check';
import ChevronRight from '@material-ui/icons/ChevronRight';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Link from '@material-ui/core/Link'
import Divider from '@quintoandar/cozy-core/Divider'



import Icon from '@material-ui/core/Icon';
import { expenses } from '../ExpensesData'
import { expensesAll } from '../AllExpensesData'

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

import Ordinarias from './Ordinarias';




import { Typography } from '@material-ui/core';

import Alert from '@quintoandar/cozy-core/Alert';
import Button from '@quintoandar/cozy-core/Button';


import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        color: '#424242'
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
    body12: {
        fontSize: '96px',
        lineHeight: '20px'
    },
    body2: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '500',
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
    grayMedium: {
        color: '#757575',
    },
    buttonPrimary: {
        textTransform: 'none',
        fontWeight: '700',
        borderRadius: '8px',
        margin: '24px 0',
        boxShadow: 'none'
    },
    alert: {
        margin: '0'

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
        margin: '0 0.5rem 0 0'
    },
    button: {
        display: 'block',
        margin: '16px 0'
    }
}));


export default function ExpenseDetail(props) {
    const { match } = props;
    const { params } = match;
    const { ExpenseId } = params;

    const classes = useStyles();
    const { history } = props;
    const expenseData = expensesAll;
    const [expenseInfo, setExpenseInfo] = useState(expenseData)

    let expenseName = ExpenseId

    const result = expenseInfo.filter(expenseRow => expenseRow.url == expenseName);

    if (result.length > 0) {
        // achou a despesa na lista 

        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <AppBar>
                            <IconButton >
                                <ArrowBack color="highEmphasis" className={classes.grayHigh} onClick={() => history.push("/")} />
                            </IconButton>
                            Sobre a despesa
                        </AppBar>
                    </Grid>
                    <Grid item md={6} sm={12} className={classes.grid}>

                        <Typography variant="h5" className={classes.title}>{result[0].name}</Typography>

                        <Box m={2} />

                        <Typography variant="body" className={classes.body12, classes.grayMedium}>
                            {result[0].description}
                        </Typography>





                        {(result[0].expenseGroup == "Ordinarias") ? (

                            // Despesa de inquilino
                            <>
                                <Box m={4} />
                                <Alert color="attention" icon={MoneyOffIcon} title={{
                                    id: 'alert.id',
                                    defaultMessage: 'Essa despesa geralmente não é reembolsável, por ser de responsabilidade de inquilinos'
                                }}>
                                    Se for referente a um período de mais de 2 meses anterior à sua locação, peça o reembolso que vamos analisar.
                            </Alert>

                            </>

                        ) : (
                                <>
                                    <Box m={4} />
                                    <Alert className={classes.alert} color="success" icon={CheckIcon} title={{
                                        id: 'alert.id',
                                        defaultMessage: 'Você pode pedir reembolso dessa despesa'
                                    }}>
                                    </Alert>

                                </>
                            )}



                        <br />

                        {(result[0].expenseGroup != "Ordinarias") ? (
                            <Button fullWidth onClick={() => { window.open("https://www.figma.com/proto/vikIUDW9zdt0o0ffR3civo/Estudos-Self-Condo-Reembolso-e-Meu-Aluguel?node-id=1848%3A47659&viewport=-1699%2C-1207%2C0.20808285474777222&scaling=scale-down") }} className={classes.button}>Pedir reembolso dessa despesa</Button>
                        ) : (
                                <>
                                    <Button fullWidth className={classes.button} onClick={() => history.push("/")}>Voltar às despesas para reembolso</Button>
                                    <Button fullWidth variant="secondary" onClick={() => { window.open("https://www.figma.com/proto/vikIUDW9zdt0o0ffR3civo/Estudos-Self-Condo-Reembolso-e-Meu-Aluguel?node-id=1848%3A47659&viewport=-1699%2C-1207%2C0.20808285474777222&scaling=scale-down") }} className={classes.button}>Pedir reembolso dessa despesa</Button>
                                </>
                            )
                        }
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
                        <AppBar>
                            <IconButton onClick={() => history.push("/")}>
                                <ArrowBack color="highEmphasis" className={classes.grayHigh} />
                            </IconButton>
                            Despesa digitada
                        </AppBar>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6} className={classes.grid}>



                        

                        <Form onSubmit={() => ('submitted! #SQN')}>
                            <Field label={('labelMessage', {
                                id: 'components.Field.label',
                                defaultMessage: 'Nome da despesa'
                            })}


                                helperText={('HelperTextMessage', {
                                    id: 'components.Field.helperText',
                                    defaultMessage: 'Digite exatamente como no seu boleto'
                                })}

                            >
                                <Input defaultValue={props.location.data} autoFocus name="Input" fullWidth placeholder={('input placeholder', 'Placeholder Text')} validators={['required']} errorMessages={['This field is required']} />

                            </Field>
                        </Form>

                        <Alert color="attention" icon={MoneyOffIcon} title={{
                            id: 'alert.id',
                            defaultMessage: 'Não achamos essa despesa na lista'
                        }} linkProps={{
                            href: "#/ordinarias",
                            message: {
                              id: 'my.messageId2',
                              defaultMessage: 'Ver despesas não reembolsáveis'
                            }}}>
                                Confira se é uma despesa não reembolsável. Senão, digite-a como no boleto que vamos analisar seu pedido
                            
                        </Alert>


                        <Button fullWidth onClick={() => { window.open("https://www.figma.com/proto/vikIUDW9zdt0o0ffR3civo/Estudos-Self-Condo-Reembolso-e-Meu-Aluguel?node-id=1848%3A47659&viewport=-1699%2C-1207%2C0.20808285474777222&scaling=scale-down") }} className={classes.button}>Pedir reembolso da despesa digitada</Button>
                        <Button variant="secondary" fullWidth className={classes.button} onClick={() => history.push("/")}>Voltar às despesas para reembolso</Button>

                    </Grid>
                </Grid>
            </>
        );
    }


}