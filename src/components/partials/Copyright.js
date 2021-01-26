import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';

class Copyright extends Component {

    render() {
        return (
            <div>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://material-ui.com/">
                        Luis Alejandro Jaramillo Rincon
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </div>
        )
    }
}
export default Copyright;