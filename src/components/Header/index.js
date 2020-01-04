import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/auth/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    links: {
        display: 'flex',
        flexDirection: 'row',

        flexGrow: 1,
    },
    title: {
        marginRight: 15,
    },
}));

const Header = ({ user, logout }) => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position='static' color='default'>
                <Toolbar>
                    <div className={ classes.links }>
                        <Typography variant='h6' className={ classes.title }>
                            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                        </Typography>
                        { user && (
                            <>
                                <Typography variant='h6' className={ classes.title }>
                                    <NavLink to='/dashboard' activeClassName='active'>Dashboard</NavLink>
                                </Typography>
                                <Typography variant='h6' className={ classes.title }>
                                    <NavLink to='/chat' activeClassName='active'>Chat</NavLink>
                                </Typography>
                            </>
                        ) }
                    </div>

                    { !user && (
                        <>
                            <Button color='inherit'>
                                <NavLink to='/auth/register' activeClassName='active'>Register</NavLink>
                            </Button>
                            <Button color='inherit'>
                                <NavLink to='/auth/login' activeClassName='active'>Login</NavLink>
                            </Button>
                        </>
                    ) }

                    { user && (
                        <Button color='inherit' onClick={ logout }>
                            Logout
                        </Button>
                    ) }

                </Toolbar>
            </AppBar>
        </div>
    )
};


const mapStateToProps = ({ auth: { user } }) => ({
    user
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);