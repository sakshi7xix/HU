import React from "react";
import { Grid, Paper, Typography, TextField, InputLabel, Box, Select, MenuItem, Button, Avatar } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";

const Signup = () => {
  const paperStyle = {width: '512px', height: '789px', paddingLeft: '40px', paddingRight:'40px', paddingRight:'20px'};
  const ImageAvatar = {width: '300px',height: '500px'};

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>  
      <Avatar
         alt="Signup"
         src="src/assets/img/signup.jpeg"
         sx={{ width: 300, height: 500 }}
     />
                 
      
11      </Grid>
      <Grid item xs={6}>
        <Paper elevation={20} style={paperStyle}>
          <h1>Sign Up</h1>
          <Typography variant='caption'>Enter details mentioned below</Typography>

          <form action="">
            <InputLabel htmlFor="outlined-adornment-password" >Full Name</InputLabel>
            <TextField fullWidth id="outlined-basic" label="Enter name" variant="outlined"  sx={{ height: '68px' }}/>
            <InputLabel htmlFor="outlined-adornment-password"  >Email id</InputLabel>
            <TextField fullWidth id="outlined-basic" label="Enter email" variant="outlined" sx={{ height: '68px' }}/>
            <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
            <TextField fullWidth id="outlined-basic" label="Enter password" variant="outlined" sx={{ height: '68px' }} />

            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box sx={{ mr: 2 }}>
                <InputLabel htmlFor="outlined-adornment-password">DOB</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="DD/MM/YY" sx={{ height: '68px' }}/>
                </LocalizationProvider>
              </Box>
              <Box>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select>
                  <MenuItem>Ten</MenuItem>
                  <MenuItem>Twenty</MenuItem>
                  <MenuItem>Thirty</MenuItem>
                </Select>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box sx={{ mr: 2, width: '50%' }}>
                <InputLabel htmlFor="outlined-adornment-password">City</InputLabel>
                <TextField fullWidth id="outlined-basic" label="Enter City" variant="outlined"  sx={{ height: '68px' }}/>
              </Box>
              <Box sx={{ width: '50%' }}>
                <InputLabel htmlFor="outlined-adornment-password">State</InputLabel>
                <TextField fullWidth id="outlined-basic" label="Enter State" variant="outlined"  sx={{ height: '68px' }}/>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center'}}>
              <Box sx={{ flexGrow: 8 }}>
                <InputLabel htmlFor="outlined-adornment-password">Address</InputLabel>
                <TextField fullWidth id="outlined-basic" label="Enter Address" variant="outlined"  sx={{ height: '68px' }} />
              </Box>
              <Box sx={{ flexGrow: 4 }}>
                <InputLabel htmlFor="outlined-adornment-password">Pincode</InputLabel>
                <TextField fullWidth id="outlined-basic" label="Pin" variant="outlined"  sx={{ height: '68px' }}/>
              </Box>
            </Box>

            <Button fullWidth variant="contained"  sx={{ height: '68px' }}>Let's Go</Button>
          </form>
        </Paper>
   
        </Grid>
        </Grid>
  )
}
export default Signup;