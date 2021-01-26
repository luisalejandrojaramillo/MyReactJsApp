import React, { useState } from 'react';
import Copyright  from './partials/Copyright';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
    width: '100%', 
    marginTop: theme.spacing(1),
    },
    submit: {
    margin: theme.spacing(3, 0, 2),
    },

}));

export default function Login() {
    const validUsers = [
        {
            "user": "luis",
            "password": "123"
        },
        {
            "user": "alejo",
            "password": "123"
        }
    ]
    

    const classes = useStyles();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function  handleSubmit(event){
        event.preventDefault();
        const userForm = document.getElementById("userLabel").value
        const passForm = document.getElementById("passLabel").value
        const searchUser = validUsers.find(u=>u.user===userForm)
        if(searchUser && searchUser.password===passForm){
            console.log("im in");
            localStorage.setItem("userName",userForm)
            window.location.href="/info";
        }else{
            alert("check credential!")
        }
    }

    return (
        <div>
            <Grid container component="main" justify='center' alignItems='center' className={classes.root}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper} border='1px solid red'>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar sesión
                        </Typography>
                        <div className={classes.paper} border='1px solid red'>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="userLabel"
                                    label="User Name"
                                    name="userLabel"
                                    autoFocus
                                />
                                <TextField
                                    type="password"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="passLabel"
                                    label="Password"
                                    name="passLabel"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >Login</Button>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </div>
    )
    
}