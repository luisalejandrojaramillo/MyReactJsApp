import React, { Component } from 'react';
import axios from 'axios';
import Copyright  from './partials/Copyright';
import Box from '@material-ui/core/Box';
import { withStyles  } from '@material-ui/core/styles';
import Barra from './partials/Barra'
import { Grid, Paper } from '@material-ui/core';

/**
public:2282c25b40fb901c7bd7b8915f5676ad 
private: 46b88cc40fc9563c75d174224adb5c9cab6a4bcc


 */

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
});

//const 
class Marvel extends Component{ 
    state = {
        characters: []
    }
    componentDidMount(){
        axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2282c25b40fb901c7bd7b8915f5676ad&hash=a8ac3fcde54f655abf74e2b429922456`)
        .then(res => {
          const characters = res.data;
          this.setState({ characters });
        })
    }
    render(){
        const { classes } = this.props
        console.log(this.state.characters)
        try{
            const { data } = this.state.characters.data.results
            console.log(data)
        }catch(error){
            console.log("Datos no cargados")
        }
        return (
            <div>
                <Barra />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h1>Vamos a tener informacion acerca de los superheroes de Marvel</h1>
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
export default withStyles(useStyles)(Marvel)