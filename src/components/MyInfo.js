import React, { Component } from 'react';
import Copyright  from './partials/Copyright';
import Box from '@material-ui/core/Box';
import Barra from './partials/Barra'
import { withStyles  } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
});

class MyInfo extends Component {

    render() {
        const { classes } = this.props;

        const name = localStorage.getItem("userName")
        //console.log(name);

        return (
            <div>
                <Barra />
                <h1>Este es el Menu Principal</h1>
                <h6>Hola {name}</h6>
                <p>
                Aca tendremos informacion mia jeje, el egocentrico .-.
                </p>
                <br/>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestias rerum dignissimos hic ea natus eligendi nam aspernatur maiores pariatur beatae autem nihil molestiae omnis optio explicabo adipisci atque vel!
                </p>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <h1>Vamos a tener mi informacion</h1>
                            <p>
                                Hi
                            </p>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestias rerum dignissimos hic ea natus eligendi nam aspernatur maiores pariatur beatae autem nihil molestiae omnis optio explicabo adipisci atque vel!
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <h1>Vamos a tener mas informacion mia</h1>
                            <p>
                                Hi
                            </p>
                            <br/>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestias rerum dignissimos hic ea natus eligendi nam aspernatur maiores pariatur beatae autem nihil molestiae omnis optio explicabo adipisci atque vel!
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        )
    }
}
export default withStyles(useStyles)(MyInfo)