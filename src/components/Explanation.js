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


export default function Explanation() {
    
    const classes = useStyles();
    

        return (
            <>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <AppBar>
                            <IconButton >
                                <ArrowBack color="highEmphasis" className={classes.grayHigh} />
                            </IconButton>
                            Pedir reembolso
                        </AppBar>
                    </Grid>
                    <Grid item md={6} xs={12} sm={6} className={classes.grid}>



                        

                        <div>

                        </div>

                        <Alert color="gray" icon={MoneyOffIcon} title={{
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


                        <Button fullWidth onClick={() => { window.open("https://www.figma.com/proto/vikIUDW9zdt0o0ffR3civo/Estudos-Self-Condo-Reembolso-e-Meu-Aluguel?node-id=2344%3A3316&viewport=3137%2C497%2C0.12901844084262848&scaling=scale-down") }} className={classes.button}>Pedir reembolso da despesa digitada</Button>
                        <Button variant="secondary" fullWidth className={classes.button}>Voltar às despesas para reembolso</Button>

                    </Grid>
                </Grid>
            </>
        );


}