import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, Slider, Typography } from '@mui/material';
import AppSelectBox from '../../Components/AppSelectBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionSummary, Accordion, AccordionDetails } from '@material-ui/core';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import InstallDesktopOutlinedIcon from '@mui/icons-material/InstallDesktopOutlined';

const color = "#000080"
export default function Content() {
    const colorOption = [
        { id: 1, label: "Jet", value: 1 },
        { id: 2, label: "Met", value: 2 },
        { id: 3, label: "Set", value: 3 },
    ];

    return (
        <Box sx={{
            marginRight: 0,
            marginLeft: 2,
            marginTop: 9
        }}
        >
            <>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid container spacing={2}>
                        <Grid item md={9}>
                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    color: `${color}`,
                                    fontSize: "17px",
                                    fontWeight: 600,
                                }}>PLOTTLY CHART VLAUES</Typography>
                        </Grid>
                        <Grid item md={1}>
                            <InstallDesktopOutlinedIcon />
                        </Grid>
                        <Grid item md={1}>
                            <FileUploadOutlinedIcon />
                        </Grid>
                        <Grid item md={1}>
                            <FileDownloadOutlinedIcon />
                        </Grid>
                    </Grid>
                </AccordionSummary>
            </>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: `${color}`,
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>Section 1 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <AppSelectBox
                                label="Dropdown 1"
                                required
                                valueKey="id"
                                name="roleId"
                                variant="outlined"
                                labelKey="label"
                                data={colorOption}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <AppSelectBox
                                label="Dropdown 2"
                                required
                                valueKey="id"
                                name="roleId"
                                variant="outlined"
                                labelKey="label"
                                data={colorOption}
                            />
                        </Grid>
                        <Grid item md={12} style={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item md={4} >
                                <Typography variant="h6"
                                    component="h2"
                                    sx={{
                                        color: `${color}`,
                                        // display:'flex',
                                        // alignSelf:'center',
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Radio option
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="0" control={<Radio />} label="Value 1" />
                                        <FormControlLabel value="1" control={<Radio />} label="Value 2" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: `${color}`,
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>Section 2 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" component="h2" style={{ color: `${color}` }}>
                                Slider 1
                            </Typography>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" component="h2" style={{ color: `${color}` }}>
                                Slider 2
                            </Typography>
                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, minWidth: '100%' }}>
                                <AppSelectBox
                                    label="Dropdown 3"
                                    required
                                    valueKey="id"
                                    name="roleId"
                                    variant="outlined"
                                    labelKey="label"
                                    data={colorOption}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: `${color}`,
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>Section 3 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, minWidth: '100%' }}>
                                <AppSelectBox
                                    label="Dropdown 4"
                                    required
                                    valueKey="id"
                                    name="roleId"
                                    variant="outlined"
                                    labelKey="label"
                                    data={colorOption}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: `${color}`,
                            fontSize: "18px",
                            fontWeight: 600,
                        }}>Section 4 </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ my: 'auto' }}>
                        <Grid item xs={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show Component 1" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show Component 2" />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show Component 3 " />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Show Component 4" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}