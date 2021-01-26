import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Copyright  from './partials/Copyright';
import notFoundImage from '../img/404-NotFound.png';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

}));

export default function PageNotFound(){
    const classes = useStyles();
    return(
        <div className={classes.paper} border='1px solid red'>
            <p>The Page you are looking for doesn't exist.</p>
            <img src={notFoundImage} width="500px" alt="404 Not Found"></img>
            <Link href="/">{ "Go Login" }</Link>
            <Copyright />
        </div>
    )
    
}