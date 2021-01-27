import React, { Component } from 'react';
import Copyright  from './partials/Copyright';
import Box from '@material-ui/core/Box';
import Barra from './partials/Barra'

export default class MyInfo extends Component {
    render() {
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
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        )
    }
}