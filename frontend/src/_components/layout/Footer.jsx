import { useSelector, useDispatch } from 'react-redux';

import { Box, AppBar, Toolbar, IconButton, Typography, Button, Link, Grid, SvgIcon } from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

import { authActions } from '_store';

const pages = ['FAQs', 'Pricing'];

export default function Footer () {
    const dispatch = useDispatch();

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#eee', p: 3, mt: 4, top: 'calc(100vh - 200px)' }}>
          <div>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6}>  
                <Box>                
                  <Typography variant='h5' fontWeight={700}>
                    <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"/></svg></SvgIcon>
                    DimaChat
                  </Typography>
                </Box>  
                <Box sx={{mt: 1}}><Link href='/privacy' underline="hover" color="inherit">Privacy Policy</Link></Box>
                <Box sx={{mt: 1}}><Link href='/terms' underline="hover" color="inherit">Terms of Service</Link></Box>
              </Grid>
              <Grid item sm={6} md={3}>
                <Box>
                  <Typography variant='h6' fontWeight={500}>                    
                    Contact Us
                  </Typography>
                  <Box>
                    <Link href='mailto:ginni003@gmail.com' underline="none" color="inherit">                      
                      <Typography><EmailOutlinedIcon fontSize='small' sx={{mr: 1, p: 'auto'}} />dima@leadsguru.marketing</Typography>
                    </Link>
                  </Box>
                  <Box>
                    <Link href='#' underline="none" color="inherit">                      
                      <Typography><PhoneIphoneOutlinedIcon fontSize='small' sx={{mr: 1, p: 'auto'}} />(646) 327-3211</Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} md={3}></Grid>
            </Grid>
          </div>
        </Box>
    );
}