import React, { useState, useEffect } from 'react';
import { Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    Theme,
    useTheme,
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookJournalWhills } from '@fortawesome/free-solid-svg-icons';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import firebase from 'firebase/app';
import Google from '../../assets/images/Google-logo.svg';

const drawerWidth = 180;

const Alert = ( props: AlertProps ) => {
    return <MuiAlert elevation={ 6 } variant="filled" { ...props } />;
};

interface NavProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
};

const useStyles = makeStyles((theme: Theme) => createStyles ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F6E0CB',
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4A3830',
        textDecoration: 'none',
        backgroundColor: '#F6E0CB',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
      display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#F6E0CB'
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#F6E0CB',
      color: '#4A3830'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
      backgroundColor: '#F6E0CB',
      color: '#4A3830',
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: '#F7B05B',
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        fontWeight: 'bold'
    },
    leftMargin: {
        marginLeft: '240px',
    },
    color: {
        color: '#F7934C'
    },
    icon: {
        color: '#FF9500'
    },
    logo: {
        width: '25px'
    },
    navbarText: {
        paddingLeft: '8px',
        paddingRight: '5px',
        paddingTop: '3px',
        color: '#4A3830',
    },
    cancelButton: {
        backgroundColor: '#D1495B',
        '&:hover': {
          backgroundColor: '#C43145'
        },
        marginTop: '3px',
        marginLeft: '12px'
      },
      navLink: {
        textDecoration: 'none',
        color: '#4A3830'
      },
      currentUser: {
        position: 'fixed',
        left: '90%',
      },
      currentUserText: {
        color: '#4A3830',
        fontWeight: 'bold'
      }
}));

export const Navbar = withRouter(( props: NavProps ) => {

    const { history } = props;
    const auth = useAuth();
    const classes = useStyles();
    const theme = useTheme();
    const [ open, setOpen ] = useState(false);

    const user = firebase.auth().currentUser;

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSnackOpen = () => {
        setOpen(true);
    };

    const handleSnackClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        };

        setOpen(false);
        history.push('/')
    };

    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if (response.user) {
            handleSnackOpen();
        }
    };

    const sign_out = async () => {
        await auth.signOut();
    }

    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'My Books',
            onClick: () => history.push('/books')
        },
        // {
        //     text: 'Profile',
        //     onClick: () => history.push('/profile')
        // },
    ];

  return (
    <div className={`${classes.root} ${classes.column}`}>
        <CssBaseline />
        <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open })}>
            <Toolbar className={classes.toolbar}>
                <IconButton color="inherit" aria-label="open-drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.font} noWrap>
                    <Link to='/' className={classes.navLink}>
                        <FontAwesomeIcon icon={faBookJournalWhills} className={classes.icon} /> Library
                    </Link>
                </Typography>
                <div className={classes.currentUser}>
                    {user && <>
                        <p className={classes.currentUserText}>Currently logged in as: {user.email}</p>
                    </>}
                </div>
            </Toolbar>
        </AppBar>
        <MUIDrawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper,}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon className={classes.color} /> : <ChevronRightIcon className={classes.color} />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}>
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
                <AuthCheck fallback={
                    <Button onClick={ sign_in }>
                        <span className={classes.navbarText}>Sign in with</span> <img src={Google} className={classes.logo} />
                    </Button>
                }>
                    <Button variant="contained" className={classes.cancelButton} onClick={ sign_out }>Sign Out</Button>
                </AuthCheck>
            </List>
        </MUIDrawer>
    </div>
  )
})
