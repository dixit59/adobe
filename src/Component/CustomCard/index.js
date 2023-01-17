import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Avatar,
  CardHeader,
  makeStyles,
  Button,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
  },
  toggleButton: {
    alignSelf: "center",
    // transform: "rotate(90deg)",
    background:'#4285F4',
    color:'white',
    height:'60px',
    width:'80px',
    borderRadius:'1px 10px 10px 1px'

  },
  toggleLabel:{
    transform: "rotate(90deg)",
    alignSelf:'center',
    fontSize:'10px'
  },
  marginDate: {
    marginTop: 0,
    marginBottom: 0,
  },
}));

const CustomCard = () => {
  const classes = useStyles();
  return (
    <div className={classes?.mainContainer}>
      <Card lg={{ maxWidth: 300 }} sx={{ maxWidth: 345 }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="body1" gutterBottom>
                Plottly Chart
              </Typography>
            </div>
          }
        />
        <CardContent>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            // image="/image.jpg"
            alt="Live from space album cover"
          />
        </CardContent>
      </Card>
      <div className={classes?.toggleButton}>
        <div className={classes?.toggleLabel}><h3>OPEN</h3></div>
      </div>
    </div>
  );
};

export default CustomCard;
