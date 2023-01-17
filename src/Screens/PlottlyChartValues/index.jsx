// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { makeStyles } from "@material-ui/core";
// import Content from "./Content";
// import DraggableCards from "../../Components/DraggableCards";
// import { Grid } from "@mui/material";
// import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// const drawerWidth = 500;
// const color = "#000080";

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));
// const useStyles = makeStyles({
//   drawerPaper: {
//     // backgroundColor: 'pink !important',
//     marginLeft: "50px  !important",
//     left: "0 !important ",
//     zIndex: "0 !important",
//   },
//   appBar: {
//     left: "50px !important ",
//   },
// });
// export default function PlottlyChartValues() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const classes = useStyles();
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         classes={{
//           root: classes.appBar,
//         }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Application 1
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box
//         style={{
//           //   height: "450px",
//           //   width: "350px",
//           //   background: "blue",
//           display: "flex",
//           flexDirection: "row",
//         }}
//       >
//         <Box style={{ height: "400px", width: "300px", background: "red" }}>

//         </Box>
//         <Box
//           style={{
//             height: "60px",
//             width: "25px",
//             background: "green",
//             alignSelf: "center",
//             display: "flex",
//             alignItems: "center",
//             borderRadius: "1px 10px 10px 1px",
//           }}
//         >
//           <Box
//             style={{
//               height: "90%",
//               width: "100%",
//               display: "flex",
//               alignSelf: "center",
//               justifyContent: "end",
//               flexDirection: "column",
//               //   background: "yellow",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "10px",
//                 transform: "rotate(90deg)",
//                 alignSelf: "center",
//                 margin: "0px",
//                 width: "100%",
//                 fontWeight: 900,
//               }}
//             >
//               OPEN
//             </p>
//             <span
//               style={{
//                 alignSelf: "center",
//                 margin: "8px 0px 0px 0px",
//                 height: "40%",
//               }}
//             >
//               <KeyboardArrowLeft />
//             </span>
//             {/* <p>OPEN</p> */}
//           </Box>
//         </Box>
//       </Box>

//       {/* <Main open={open}>
//                 <DrawerHeader />
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
//                     <Grid item xs={6}>
//                         <DraggableCards title='Plottly Chart' toggle subTitle="Top View" />
//                     </Grid >
//                     <Grid item xs={6}>
//                         <DraggableCards title='Plottly Chart 2' />
//                     </Grid >
//                 </Grid >
//                 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
//                     <Grid item xs={6}>
//                         <DraggableCards title='Plottly Chart 3' />
//                     </Grid >
//                     <Grid item xs={6}>
//                         <DraggableCards title='Connected Camera' />
//                     </Grid >
//                 </Grid >

//             </Main> */}
//     </Box>
//   );
// }

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@material-ui/core';
import Content from './Content';
import DraggableCards from '../../Components/DraggableCards';
import { Grid } from '@mui/material';
import { Dragact } from 'dragact';

const drawerWidth = 500;
const color = "#000080"

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
    }
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

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" classes={{
                root: classes.appBar
            }}>
                <Toolbar>
                    {open ? <IconButton onClick={handleDrawerClose} color="inherit">
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
                    }
                    <Typography variant="h6" noWrap component="div">
                        Application 1
                    </Typography>
                </Toolbar>
            </AppBar>
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
        </Box >

    );
}
