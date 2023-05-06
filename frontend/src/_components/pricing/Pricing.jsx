import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import { Box, Typography, Button, Grid, Avatar, styled } from '@mui/material';

export default function Pricing() {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={{ maxWidth: '1100px', m: 'auto', p: '5rem 2rem' }}>
            <Box sx={{ pb: 8 }}>
                <Box sx={{ textAlign: 'center', pb: 4 }}>
                    <Typography
                        variant='h2'
                        fontWeight={1000}
                        sx={{ textAlign: 'center', color: '#102030' }}
                    >
                        Pricing Plans
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <PricingPlanCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <PricingPlanCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <PricingPlanCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <PricingPlanCard />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ textAlign: 'center', pb: 4 }}>
                    <Typography
                        variant='h4'
                        fontWeight={900}
                        sx={{ textAlign: 'left', color: '#102030' }}
                    >
                        Pricing FAQs
                    </Typography>
                </Box>
                <Grid container spacing={5}>
                    <Grid item sm={12} md={6}>
                        <Typography
                            variant='h6'
                            sx={{ color: '#102030', pb: 1 }}
                        >
                            Is there a free plan?
                        </Typography>
                        <Typography>
                            Yes, just by signing up you get 30 message credits and 1 chatbot. You can use these to test out chatbase and see if it works for you.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography
                            variant='h6'
                            sx={{ color: '#102030', pb: 1 }}
                        >
                            How much data can I give one chatbot?
                        </Typography>
                        <Typography>
                            Free plan: 400K Characters (~5MB) | Hobby: 2M Characters (~24MB) | Growth: 4M Characters (~50MB) | Standard: 6M Characters (~75MB) | Unlimited: 11M Characters (~140MB)
                        </Typography>
                    </Grid>
                </Grid>
            </Box>            
        </Box>
    );
}

const PricingPlanCard = () => {
    return (
        <Box
            sx={{ border: 'none', borderRadius: '15px', p: 3, backgroundColor: '#eee', minHeight: '500px' }}
        >
            <Typography variant='h5' sx={{ pb: 2 }}>
                Standard
            </Typography>
        </Box>
    );
}