import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Task from './Task';
import NewTask from './NewTask';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab'; 
import AddIcon from '@material-ui/icons/Add';

const drawerWidth = 240;

//inspirado de: https://material-ui.com/components/drawers/
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
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
}));

export default function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const logout = () => {
        localStorage.setItem('isLoggedIn', 'false');
        //alert("asdasd   ")
        props.logout();
    }
    /* const handleNewTask = () => {
        //window.location.href = "/newtask";
        localStorage.setItem("newT", true);
        //props.new();
     
    };
 */
    return (<div >
        <div className={classes.root}>

            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Task Planner
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {[localStorage.getItem('user')].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon><PersonIcon style={{ fontSize: 50 }} /></ListItemIcon>
                            <ListItemText
                                primary={text}
                                secondary={
                                    <div>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            color="textPrimary"
                                        >andres@andres.com
                                    </Typography>
                                    </div>
                                } />


                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem onClick={logout} button>
                        <ListItemIcon>
                            <PersonIcon style={{ fontSize: 50 }} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Log Out"
                        />
                    </ListItem>
                </List>
            </Drawer>
            <br></br>


        </div >
        <br /><br /><br />
        <Container maxWidth="xs">
          <div>
          {props.items.map((item,i) => {
                return (<Task key={i}
                    description={item.description}
                    responsible={item.responsible.name}
                    status={item.status}
                    dueDate={item.dueDate}/>
                );
            })}
          </div>
       {/*      <Task description="Hacer lo hacible " responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="Comer lo comible " responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="Dormir durmiendo" responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="trabajar lo trabajable " responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="Pensar lo pensable " responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="Beber lo beblible " responsible="Andres Sotelo" status="ready" dueDate="156464645646" />
            <Task description="Hacer lo posible " responsible="Andres Sotelo" status="ready" dueDate="156464645646" /> */}
            <NewTask new={props.new}/>
        </Container></div >
    );
}