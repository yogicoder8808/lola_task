import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import arrowDown from '../Images/arrow-down.jpg';
import arrowUp from '../Images/arrow-up.jpg';
import dollor from '../Images/dollor.png';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import footerImage from '../Images/Footer.jpg';

function Responsepage() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const gridData = [
        { left: { title: 'Credit Card APR', value: '28.5%' }, right: { title: 'Min Credit Card Payment', value: '3% of balance' } },
        { left: { title: 'Current Monthly Payment', value: '$1,977' }, right: { title: 'Outstanding Loan Amount', value: '$191,450' } },
        { left: { title: 'Monthly Property Tax', value: '$397.19' }, right: { title: 'Monthly Insurance Payment', value: '$100' } },
    ];

    const loanTermBoxes = [
        {
            loanTerm: '360 Months',
            scenario: 'Scenario 1',
            interestRate: '4.5%',
            monthlyPayment: '$973.15',
            repeatedData: [
                { primaryText: 'Total monthly payment', secondaryText: 'vs current liabilities', arrowText: 'Lower by $1,003.85' },
                { primaryText: 'Total paid over loan life', secondaryText: 'vs current situation', arrowText: 'Higher by $42,293.57' },
                { primaryText: 'Total interest paid', secondaryText: 'over lifetime of loan', arrowText: '$158,884.00' },
            ],
        },
        {
            loanTerm: '180 Months',
            scenario: 'Scenario 2',
            interestRate: '3.75%',
            monthlyPayment: '$1,392.32',
            repeatedData: [
                { primaryText: 'Total monthly payment', secondaryText: 'vs current liabilities', arrowText: 'Lower by $584.68' },
                { primaryText: 'Total paid over loan life', secondaryText: 'vs current situation', arrowText: 'Less by $57,422.83' },
                { primaryText: 'Total interest paid', secondaryText: 'over lifetime of loan', arrowText: '$59,167.60' },
            ],
        },
        {
            loanTerm: '240 Months',
            scenario: 'Scenario 3',
            interestRate: '4.25%',
            monthlyPayment: '$1,187.99',
            repeatedData: [
                { primaryText: 'Total monthly payment', secondaryText: 'vs current liabilities', arrowText: 'Lower by $789.01' },
                { primaryText: 'Total paid over loan life', secondaryText: 'vs current situation', arrowText: 'Less by $22,922.83' },
                { primaryText: 'Total interest paid', secondaryText: 'over lifetime of loan', arrowText: '$93,667.60' },
            ],
        },
    ];
    
    return (
        <Box
            sx={{
                width: '1700px',
                height: '856px',
                position: 'absolute',
                top: '380px',
                left: '226px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                textAlign: 'center', 
            }}
        >

        {/* Lola */}
        <Typography
            sx={{
                fontFamily: 'Bai Jamjuree',
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '24px',
                position: 'absolute',
                top: '10px',
                left: '10px',
            }}
        >
            Lola
        </Typography>

        {/* Ideal Scenario text */}
        <Box
            sx={{
                backgroundColor: '#02174E',
                color: '#ffffff',
                fontFamily: 'Public Sans',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                width: 'auto', 
                height: 'auto', 
                position: 'absolute',
                top: '80px', 
                left: '1250px',
                paddingRight:'20px',
                paddingLeft:'20px',
            }}
        >
            Ideal Scenario based on Borrower Goal
        </Box>

        {/* Back Icon */}
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

            {/* Box_1*/}
            <Box
                sx={{
                    width: '410px',
                    height: '635px',
                    position: 'absolute',
                    top: '111px',
                    left: '100px',
                    backgroundColor: 'rgba(214, 219, 245, 0.4)',
                    borderRadius: '0px',
                    textAlign: 'center',
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

            {/* Mapping through grid data for Box_1 */}

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

        {/* Mapping through loan term boxes */}

        {loanTermBoxes.map((box, boxIndex) => (
                <Box
                    key={boxIndex}
                    sx={{
                        width: '330px',
                        height: '615px',
                        backgroundColor: '#ffffff',
                        border: '3px solid rgba(61, 78, 205, 0.4)',
                        borderRadius: '8px',
                        marginLeft: boxIndex === 0 ? '410px' : '10px',
                        marginTop: '111px',
                        alignItems: 'flex-start', 
                        paddingLeft: '16px', 
                        paddingTop: '16px',
                        display: 'inline-block',
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
                        {box.loanTerm}
                    </Typography>

                {/* Primary Text vs Secondary text */}

                {box.repeatedData.map((data, dataIndex) => (
                    <Box key={dataIndex} sx={{ marginTop: '40px' }}>
                        <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                            <Grid item xs={6}>
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
                        <Grid item xs={6}>
                            <Typography
                                sx={{
                                    fontFamily: 'Public Sans',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '22px',
                                    color: 'rgba(93, 102, 146, 0.5)', // Less opacity
                                    height: '22px',
                                    width: '180px',
                                    marginLeft: dataIndex === 0 ? '12px' : dataIndex === 1 ? '14px' : '-20px', // Adjust marginLeft based on index
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
                                marginTop: '2px', 
                            }}
                        >
                            <img
                                src={dataIndex === 2 ? dollor : (data.arrowText.includes('Higher') ? arrowUp : arrowDown)} 
                                alt="Arrow" 
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    marginRight: '8px', 
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

                    {/* Scenario box */}
                    <Box
                        sx={{
                            width: '310px',
                            height: '106px',
                            borderRadius: '10px',
                            border: '1px solid #ECEDF3',
                            backgroundColor: '#F7F8FA',
                            marginTop: '30px', 
                            position: 'relative',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Public Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '22px',
                                color: '#5D6692',
                                width: '75px',
                                height: '22px',
                                marginTop: '25px',
                                marginLeft: boxIndex === 0 ? '13px' : boxIndex === 1 ? '15px' : '15px', 
                            }}
                        >
                            {box.scenario}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Public Sans',
                                fontWeight: 700,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#3d4ecd',
                                width: '79px',
                                height: '28px',
                                marginLeft: boxIndex === 0 ? '0px' : boxIndex === 1 ? '6px' : '6px', 
                            }}
                        >
                            {box.interestRate}
                        </Typography>

                        <AccountBalanceIcon 
                            sx={{ 
                                color: '#5166FE',
                                width: '66.67px', 
                                height: '70px', 
                                opacity: 0.08,
                                position: 'absolute',
                                top: '17px',
                                right: '15px',
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            width: '310px',
                            height: '106px',
                            borderRadius: '10px',
                            border: '1px solid #ECEDF3',
                            backgroundColor: '#3D4ECD',
                            marginTop: '10px', 
                            position: 'relative',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Public Sans',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '22px',
                                color: '#FFFFFF',
                                opacity: '0.56',
                                width: '130px',
                                height: '22px',
                                marginTop: '25px',
                                marginLeft: boxIndex === 0 ? '13px' : boxIndex === 1 ? '15px' : '15px', 
                            }}
                        >
                            Monthly Payment
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Public Sans',
                                fontWeight: 700,
                                fontSize: '18px',
                                lineHeight: '28px',
                                color: '#FFFFFF',
                                width: '61px',
                                height: '28px',
                                marginLeft: boxIndex === 0 ? '20px' : boxIndex === 1 ? '22px' : '22px', 
                                
                            }}
                        >
                            {box.monthlyPayment}
                        </Typography>
                    </Box>
                </Box>
            ))}

            {/*Footer*/}
            <Box sx={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <img src={footerImage} alt="Footer" style={{ width: '114px' }} />
            </Box>
        </Box>
    );
}

export default Responsepage;

