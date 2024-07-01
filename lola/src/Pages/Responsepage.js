import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import arrowDown from '../Images/arrow-down.jpg';
import arrowUp from '../Images/arrow-up.jpg';
import dollor from '../Images/dollor.png';

function Responsepage() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    // Data for left and right grids
    const gridData = [
        {
            left: {
                title: 'Credit Card APR',
                value: '28.5%',
            },
            right: {
                title: 'Min Credit Card Payment',
                value: '3% of balance',
            },
        },
        {
            left: {
                title: 'Current Monthly Payment',
                value: '$1,977',
            },
            right: {
                title: 'Outstanding Loan Amount',
                value: '$191,450',
            },
        },
        {
            left: {
                title: 'Monthly Property Tax',
                value: '$397.19',
            },
            right: {
                title: 'Monthly Insurance Payment',
                value: '$100',
            },
        },
    ];

    // Data for repeated elements
    const repeatedData = [
        {
            primaryText: 'Total monthly payment',
            secondaryText: 'vs current liabilities',
            arrowText: 'Lower by $1,003.85',
        },
        {
            primaryText: 'Total paid over loan life',
            secondaryText: 'vs current situation',
            arrowText: 'Higher by $42,293.57',
        },
        {
            primaryText: 'Total interest paid',
            secondaryText: 'over lifetime of loan',
            arrowText: '$158,884.00',
        },
    ];

    return (
        <Box
            sx={{
                width: '1512px',
                height: '856px',
                position: 'absolute',
                top: '380px',
                left: '226px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                textAlign: 'center', // Center aligning content
            }}
        >
            <ArrowBackIcon
                onClick={handleBackClick}
                sx={{
                    position: 'absolute',
                    top: '80px',
                    left: '80px',
                    width: '24px',
                    height: '24px',
                    color: 'rgba(0, 0, 0, 0.4)',
                    cursor: 'pointer',
                }}
            />
            <Typography
                variant="body2"
                color="rgba(0, 0, 0, 0.4)"
                sx={{
                    fontFamily: 'Public Sans',
                    fontWeight: 700,
                    position: 'absolute',
                    top: '82px',
                    left: '110px',
                    width: '34px',
                    height: '22px',
                    cursor: 'pointer',
                }}
                onClick={handleBackClick}
            >
                Back
            </Typography>

            {/* Newly created box */}
            <Box
                sx={{
                    width: '410px',
                    height: '635px',
                    position: 'absolute',
                    top: '111px',
                    left: '100px',
                    backgroundColor: 'rgba(214, 219, 245, 0.4)',
                    borderRadius: '0px',
                    textAlign: 'center', // Center aligning content inside the box
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: 'Public Sans',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '36px',
                        color: '#02174E',
                        textAlign: 'center',
                        marginTop: '30%',
                    }}
                >
                    Let's take a look at your Debt Refinance Scenarios
                </Typography>

                {/* Mapping through grid data */}
                <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                    {gridData.map((data, index) => (
                        <React.Fragment key={index}>

                            {/* Left Grid */}
                            <Grid item xs={6} sx={{ textAlign: 'left', marginTop: '20px' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'Public Sans',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        color: '#5D6692',
                                        marginLeft: '20px',
                                    }}
                                >
                                    {data.left.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'Public Sans',
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        color: '#3D4ECD',
                                        marginTop: '5px',
                                        marginLeft: '20px',
                                    }}
                                >
                                    {data.left.value}
                                </Typography>
                            </Grid>

                            {/* Right Grid */}
                            <Grid item xs={6} sx={{ textAlign: 'left', marginTop: '20px' }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'Public Sans',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '22px',
                                        color: '#5D6692',
                                    }}
                                >
                                    {data.right.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: 'Public Sans',
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        lineHeight: '28px',
                                        color: '#3D4ECD',
                                        marginTop: '5px',
                                    }}
                                >
                                    {data.right.value}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>

                {/* Link */}
                <Link 
                    sx={{
                        display: 'block',
                        marginTop: '50px',
                        marginLeft: '20px',
                        fontFamily: 'Public Sans',
                        fontWeight: 400, 
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#5D6692',
                        width: '220px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    }}
                    style={{ textDecorationColor: '#5D6692' }} 
                >   
                    View Liabilities and Calculation
                </Link>
            </Box>
            <Box
                sx={{
                    width: '330px',
                    height: '615px',
                    backgroundColor: '#ffffff',
                    border: '3px solid rgba(61, 78, 205, 0.4)',
                    borderRadius: '8px',
                    marginLeft: '520px',
                    marginTop:'111px',
                    alignItems: 'flex-start', 
                    paddingLeft: '16px', 
                    paddingTop:'16px'                
                }}
            >
                <Typography
        sx={{
            fontFamily: 'Public Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: '#5d6692',
            width: '72px',
            height: '22px',
        }}
    >
        Loan Term
    </Typography>

    {/* Second line text */}
    <Typography
        sx={{
            fontFamily: 'Public Sans',
            fontWeight: 700,
            fontSize: '32px',
            lineHeight: '48px',
            color: '#02174E',
            width: '190px',
            height: '48px',
        }}
    >
        360 Months
    </Typography>

{/* Total monthly payment vs current liabilities */}

    {repeatedData.map((data, index) => (
    <Box key={index} sx={{ marginTop: '40px' }}>
        <Grid container spacing={2} sx={{ textAlign: 'left' }}>
            <Grid item xs={6} >
                <Typography
                    sx={{
                        fontFamily: 'Public Sans',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#5D6692',
                        height: '22px',
                        width: '180px',
                        marginLeft: '30px'
                    }}
                >
                    {data.primaryText}
                </Typography>
            </Grid>
            <Grid item xs={6} >
                <Typography
                    sx={{
                        fontFamily: 'Public Sans',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: 'rgba(93, 102, 146, 0.5)', // Less opacity
                        height: '22px',
                        width: '180px',
                        marginLeft: index === 0 ? '12px' : index === 1 ? '14px' : '-20px', // Adjust marginLeft based on index
                    }}
                >
                    {data.secondaryText}
                </Typography>
            </Grid>
        </Grid>

        {/* Image and text */}
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '2px', // Add margin for spacing
            }}
        >
            <img
                src={index === 2 ? dollor : (data.arrowText.includes('Higher') ? arrowUp : arrowDown)} 
                alt="Arrow" 
                style={{
                    width: '24px',
                    height: '24px',
                    marginRight: '8px', // Add margin between image and text
                }}
            />
            <Typography
                sx={{
                    fontFamily: 'Public Sans',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: data.arrowText.includes('Higher') ? '#E71D36' : '#0d8745',
                    height: '24px',
                }}
            >
                {data.arrowText}
            </Typography>
        </Box>
    </Box>
))}

            </Box>
        </Box>
    );
}

export default Responsepage;
