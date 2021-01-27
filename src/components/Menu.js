import React from 'react';
import Copyright  from './partials/Copyright';
import Barra from './partials/Barra'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: '64px',
      display: 'flex',
      flexDirection: 'column'
    }
  }));

export default function menu(props){
    const classes = useStyles();
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <div>
            <Barra />
            <main className={classes.content}>
                {props.childComponent}
            </main>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>   
    )
}