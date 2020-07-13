import React from 'react';
import NavBar from './NavBar'
import FolderList from './List'
import Autocomplete from './Autocomplete'
import AutocompleteHighlight from './AutocompleteHightlight'
import Grid from '@material-ui/core/Grid'
import { Typography, makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom'


const Home = () => {
    const style = {
        padding: '0 2em'
    };

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
        },
        boxBackground: {
            background: '#FAFAFA'
        }
    
    }));

    const classes = useStyles();

    return (
        
        <div className="App">
            <Grid container justify="center" spacing={4}>
                <Grid item xs={12}>
                    <NavBar></NavBar>
                </Grid>
                <Grid item md={6} sm={12} style={style}>
                    <Box className={classes.boxBackground}>
                        <Typography variant="h6" className={classes.title}>Digite a despesa para conferir se você pode pedir reembolso</Typography>
                        <Box mt="2rem" />
                        <Typography variant="body2" className={classes.subheadingMedium}>Nome da despesa</Typography>
                        <Typography variant="caption">Qual nome mais se aproxima do que está escrito no boleto?</Typography>

                        <AutocompleteHighlight></AutocompleteHighlight>
                    </Box>

                    <Typography variant="caption" className={classes.caption}>Mais comuns: <Link to="/fundoreserva">Fundo de reserva</Link>, <Link to="/obras">Fundo de Obras</Link></Typography>
                    

                </Grid>

                
            </Grid>
        </div>

    )
}

export default Home;
