
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Checkbox, MenuItem, Select, Button } from '@mui/material';
import illustrationUpload from './Images/illustration_upload.jpg';
import uploadIcon from './Images/upload_icon.jpg';
import footerImage from './Images/Footer.jpg';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Reduce Monthly Payments', 'Reduce Overall Debt'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '1512px',
        height: '856px',
        position: 'absolute',
        backgroundColor: '#ffffff',
        top: '380px',
        left: '226px',
        display: 'flex',
      }}
    >
    <Typography
        sx={{
          fontFamily: 'Bai Jamjuree',
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '24px',
          marginTop: '30px', 
          marginLeft: '30px'
          }}
        >
          Lola
        </Typography>

      {/* Left Section */}

      <Box sx={{ position: 'relative', width: '623px', height: '468px', left: '114px', top: '194px' }}>
        <img src={illustrationUpload} alt="Illustration Upload" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>

      {/* Right Section */}

      <Box
        sx={{
          width: '492px',
          height: '563px',
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          top: '147px',
          left: '867px',
          boxShadow: '0px 0px 5px 0px rgba(183, 187, 209, 0.5)',
          padding: '20px',
        }}
      >
        
        <Box sx={{ marginBottom: '25px' }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
            Upload Credit Report
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '13px' }}>
            PDF, max file: X MB
          </Typography>
        </Box>

        <Box
          sx={{
            width: '478px',
            height: '106px',
            backgroundColor: '#F7F8FA',
            borderRadius: '10px',
            border: '1px dashed #B7BBD1',
            padding: '5.5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5px',
            marginBottom: '30px',
          }}
        >
          <img src={uploadIcon} alt="Upload Icon" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
          <Typography variant="body2" color="textSecondary">
            Upload File
          </Typography>
        </Box>

        {/* Grid Section */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
              Current Mortgage Info
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '13px' }}>
              Assumed refinance rate
            </Typography>
            <TextField variant="outlined" size="small" placeholder="%" sx={{ width: '100%', borderRadius: '10px', top: '20px' }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
              Refinance Scenario
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ fontSize: '13px' }}>
              Refinance rate for a 30 year term
            </Typography>
            <TextField variant="outlined" size="small" placeholder="%" sx={{ width: '100%', borderRadius: '10px', top: '20px' }} />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '35px', marginLeft: '-12px' }}>
          <Checkbox sx={{ color: 'rgba(0, 0, 0, 0.3)', size: 'small' }} />
          <Typography variant="body2" fontWeight="500" sx={{ fontSize: '13px', color: 'rgba(0, 0, 0, 0.8)' }}>
            Escrow Included
          </Typography>
        </Box>

        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.7)',
            marginTop: '20px',
          }}
        >
          Borrower Goal
        </Typography>
        
        <Select
          variant="outlined"
          size="small"
          value={selectedOption}
          onChange={handleOptionChange}
          fullWidth
          sx={{  marginTop: '15px', marginBottom: '40px' }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '13px' }}>
                {option}
              </Typography>
            </MenuItem>
          ))}
        </Select>

        <Button
          variant="contained"
          sx={{
            width: '100%',
            backgroundColor: '#4747d1',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#4747d1',
            },
          }}
        >
          Generate
        </Button>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '10px', left: '30px' }}>
        <img src={footerImage} alt="Footer" style={{ width: '114px' }} />
      </Box>
    </Box>
  );
}

export default App;

