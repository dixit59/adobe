import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@material-ui/core';
import Content from './Content';
import DraggableCards from '../../Components/DraggableCards';
import { Grid } from '@mui/material';
import { Dragact } from 'dragact';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const drawerWidth = 500;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const useStyles = makeStyles({
    drawerPaper: {
        // backgroundColor: 'pink !important',
        marginLeft: "50px  !important",
        left: '0 !important ',
        zIndex: '0 !important'
    },
    appBar: {
        left: '50px !important ',
    },
    switchLabel: {
        color: "gray",
        margin: "0px",
        fontSize: "14px",
    },
    imageBox: {
        margin: "10px 0px",
        backgroundColor: "#D3D3D3",
        minHeight: 200,
    },
    cardSubTitle: {
        display: "flex",
        alignSelf: "end",
    },
    toggleContainer: {
        height: "60px",
        width: "20px",
        background: "blue",
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        borderRadius: "1px 10px 10px 1px",
        color: "white",
    },
    toggleSubContainer: {
        height: "90%",
        width: "100%",
        display: "flex",
        alignSelf: "center",
        justifyContent: "end",
        flexDirection: "column",
    },
    toggleLabel: {
        fontSize: "9px",
        transform: "rotate(90deg)",
        alignSelf: "center",
        margin: "0px",
        width: "100%",
        fontWeight: 800,
    },
    toggleIcon: {
        alignSelf: "center",
        margin: "10px 0px 0px 0px",
        height: "40%",
    },
});

const fakeData = [
    { GridX: 0, GridY: 0, w: 25, h: 2, key: '0' },
    { GridX: 0, GridY: 0, w: 25, h: 2, key: '1' },
    { GridX: 0, GridY: 0, w: 25, h: 2, key: '2' },
    { GridX: 0, GridY: 0, w: 25, h: 2, key: '3' },
]

const getblockStyle = (isDragging) => {
    return {
        background: isDragging ? 'white' : 'white',
    }
};

export default function PlottlyChartValues() {
    const [open, setOpen] = React.useState(false);
    // const theme = useTheme();

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };
    const classes = useStyles();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" classes={{
                root: classes.appBar
            }}>
                <Toolbar>
                    {/* {open ? <IconButton onClick={handleDrawerClose} color="inherit">
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton> : <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                    } */}
                    <Typography variant="h6" noWrap component="div">
                        Client Logo  |  Application 1
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                className={classes?.toggleContainer}
                onClick={() => setOpen(!open)}
            >
                <Box className={classes?.toggleSubContainer}>
                    <p className={classes?.toggleLabel}>
                        {!open ? "OPEN" : "CLOSE"}{" "}
                    </p>
                    <span className={classes?.toggleIcon}>
                        {!open ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </span>
                </Box>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                classes={{
                    paper: classes.drawerPaper
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <Divider />
                <Content />
            </Drawer>
            <Box
                className={classes?.toggleContainer}
                style={{ marginLeft: "-35px" }}
                onClick={() => setOpen(!open)}
            >
                <Box className={classes?.toggleSubContainer}>
                    <p className={classes?.toggleLabel}>
                        {!open ? "OPEN" : "CLOSE"}{" "}
                    </p>
                    <span className={classes?.toggleIcon}>
                        {!open ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </span>
                </Box>
            </Box>
            <DrawerHeader>
            </DrawerHeader>
            <Main open={open} style={{ marginTop: "64px" }}>
                <Dragact
                    layout={fakeData}
                    col={100}
                    width={1450}
                    rowHeight={140}
                    margin={[5, 5]}
                    className='plant-layout'
                    style={{ background: 'white' }}
                    placeholder={true}
                >
                    {(item, provided) => {

                        const sizeFunction = (size) => {
                            provided.props.style.width = size.x;
                            provided.props.style.height = size.y;
                            item.w = Math.round(100 * size.x / (window.innerWidth - 50));
                            item.h = (6 * size.y / (window.innerHeight - 50))?.toLocaleString(undefined, { maximumFractionDigits: 1 });
                            console.log(size)
                            console.log(item)
                        }
                        return (
                            <div
                                {...provided.props}
                                {...provided.dragHandle}
                                style={{
                                    ...provided.props.style,
                                    ...getblockStyle(provided.isDragging)
                                }}
                            >
                                {item.key == 0 ? <Grid item xs={6}>
                                    <DraggableCards title='Plottly Chart' switchBtn toggle subTitle="Top View" sizeFunction={sizeFunction} />
                                </Grid> : <Grid item xs={6}>
                                    <DraggableCards title='Plottly Chart 2' subTitle="Top View" sizeFunction={sizeFunction} />
                                </Grid>}

                                {/* {provided.isDragging && item ?  : <Grid item xs={6}>
                                    <DraggableCards title='Plottly Chart' switchBtn toggle subTitle="Top View" sizeFunction={sizeFunction} />
                                </Grid>} */}
                            </div>
                        )
                    }}
                </Dragact>
                {/* <DrawerHeader />
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    
                    <Grid item xs={6}>
                        <DraggableCards title='Plottly Chart 2' />
                    </Grid >
                </Grid >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={6}>
                        <DraggableCards title='Plottly Chart 3' />
                    </Grid >
                    <Grid item xs={6}>
                        <DraggableCards title='Connected Camera' />
                    </Grid >
                </Grid > */}

            </Main>
        </Box>
    );
}
