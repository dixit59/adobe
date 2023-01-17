import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  Typography,
  Box,
} from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import { makeStyles } from "@material-ui/core";
import Draggable from "react-draggable";
import AppSelectBox from "./AppSelectBox";
import AppTextInput from "./AppTextInput";

const color = "#000080";

const useStyles = makeStyles(() => ({
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
}));

const DraggableCards = ({
  title,
  subTitle,
  toggle = false,
  switchBtn = false,
  sizeFunction
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const colorOption = [
    { id: 1, label: "Jet", value: 1 },
    { id: 2, label: "Met", value: 2 },
    { id: 3, label: "Set", value: 3 },
  ];
  const [size, setSize] = useState({ x: 400, y: 285 });

  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize(currentSize => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY
      }));
    }
    sizeFunction(size)
    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      // uncomment the following line if not using `{ once: true }`
      // document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };
  // console.log("size",size)
  return (
    <>
      {/* <Draggable> */}
      <Box style={{ display: "flex", flexDirection: "row", width: size.x, height: size.y }} id="container">
        <Card sx={{ minWidth: 275, display: "flex", flexDirection: "row", width: size.x, height: size.y, position: "relative" }}>
          <CardContent style={{ cursor: "move", minWidth: 275, width: size.x, height: size.y }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }} >
              <Typography
                variant="caption"
                component="h2"
                sx={{
                  color: `${color}`,
                  alignSelf: "end",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
              {switchBtn && (
                <>
                  <FormControlLabel
                    labelPlacement="start"
                    label={<p className={classes?.switchLabel}> 3-D </p>}
                    control={<Switch defaultChecked size="small" />}
                    sx={{ margin: "0px" }}
                  />

                  <Typography
                    variant="caption"
                    component="h2"
                    className={classes?.cardSubTitle}
                  >
                    {subTitle}
                  </Typography>
                </>
              )}
              {/* <button id="draghandle" type="button" title="Click and move" onMouseDown={handler} >Resize</button> */}

            </Box>

            <Box className={classes?.imageBox} sx={{
              height: size.y - 80
            }}></Box>
            <AddOutlinedIcon style={{ position: "absolute", right: "6px", bottom: "14px" }} className="resize-icon" title="Click and move" onMouseDown={handler} id="draghandle" />

          </CardContent>
          {open && (
            <Box
              style={{
                width: "700px",
                marginTop: "20px",
                padding: "0px 5px",
              }}
            >
              <Grid container spacing={2} item md={12}>
                <Grid item md={6}>
                  <AppSelectBox
                    label="Color Map "
                    required
                    valueKey="id"
                    name="roleId"
                    variant="outlined"
                    labelKey="label"
                    data={colorOption}
                  />
                  <br />
                  <br />
                  <AppTextInput
                    name="email"
                    type="number"
                    label="Decimal value 2"
                    variant="outlined"
                    className="mb-5"
                  />
                  <br />
                  <br />
                  <AppTextInput
                    name="email"
                    type="number"
                    label="Decimal value 2"
                    variant="outlined"
                    className="mb-5"
                  />
                  <br />
                  <br />
                  <AppTextInput
                    name="email"
                    type="color"
                    label="Color"
                    variant="outlined"
                    className="mb-5"
                  />
                </Grid>
                <Grid item md={6}>
                  <AppTextInput
                    name="email"
                    type="number"
                    label="Decimal value 1"
                    variant="outlined"
                    className="mb-5"
                  />
                  <br />
                  <br />
                  <AppTextInput
                    name="email"
                    type="number"
                    label="Decimal value 3"
                    variant="outlined"
                    className="mb-5"
                  />
                  <br />
                  <br />
                  <AppTextInput
                    name="email"
                    type="number"
                    label="Decimal value 5"
                    variant="outlined"
                    className="mb-5"
                  />
                  <br />
                  <br />
                  <AppSelectBox
                    label="Color Map "
                    required
                    valueKey="id"
                    name="roleId"
                    variant="outlined"
                    labelKey="label"
                    data={colorOption}
                  />

                  <br />
                  <br />
                </Grid>
              </Grid>
            </Box>
          )}
        </Card>
        {toggle && (
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
        )}
      </Box>
      {/* </Draggable> */}
    </>
  );
};

export default DraggableCards;


