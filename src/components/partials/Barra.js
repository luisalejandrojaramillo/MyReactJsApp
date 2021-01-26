import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Barra(){
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="sticky" style={{backgroundColor: "#5D9B9B", color: "black"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        My App
                    </Typography>

                    <Button href="/#hi" color="inherit" align="left">My Info</Button>
                    <Button href="/#hi" color="inherit" align="right">Marvel</Button>
                    <Button href="/#hi" color="inherit" edge="end">LogOut</Button>

                </Toolbar>
            </AppBar>
        </div>
        
    );
    
}