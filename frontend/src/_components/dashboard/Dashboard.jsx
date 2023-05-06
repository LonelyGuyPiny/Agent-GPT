import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import { Box, Typography, Button, Grid, Avatar, styled } from '@mui/material';

const Dashboard = () => {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={{ m: 'auto', p: '5rem 2rem' }}>
            <Grid container>
                <Grid item xs={12} sm={12} md={2}>
                    <Typography
                        variant='h5'
                    >
                        DimaChat
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <Box>
                        <Typography variant='h4'>
                            Dima N
                        </Typography>
                    </Box>  
										<Box
											sx={{border: '1px solid #999', borderRadius: '9px', p: '1rem'}}
										>
											<Button
												color='primary'
												size='large'
												variant='outlined'
												sx={{textTransform: 'none', mr: 1}}
											>
												Chat
											</Button>
											<Button
												color='primary'
												size='large'
												variant='outlined'
												sx={{textTransform: 'none', mr: 1}}
											>
												Settings
											</Button>
											<Button
												color='primary'
												size='large'
												variant='outlined'
												sx={{textTransform: 'none', mr: 1}}
											>
												Update knowledge
											</Button>
										</Box>  
                </Grid>     
            </Grid>
        </Box>
    );
}

export default Dashboard;