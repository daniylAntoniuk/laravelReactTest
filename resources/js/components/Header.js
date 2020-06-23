
import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
const Header = () => (
    <AppBar position="static">
        <Toolbar>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
        </Toolbar>
    </AppBar>
)

export default Header
