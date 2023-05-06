import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import { Box, Typography, Button, Grid, Avatar, styled } from '@mui/material';

import Ava from '../../Assets/Images/huggingface.jpg';
import backImg from '../../Assets/Images/producthunt-bot.png';

const StyledImg = styled('img')({});

export function Home() {

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={{ maxWidth: '1100px', m: 'auto', p: '5rem 2rem' }}>
            <Box sx={{ pb: 8 }}>
                <Grid container spacing={4}>
                    <Grid item sm={12} md={7} sx={{mt: {sm: 1, md: 8}}}>
                        <Typography
                            variant='h3'
                            fontWeight={900}
                            sx={{ textAlign: 'center', color: '#102030' }}
                        >
                            Custom ChatGPT for
                        </Typography>
                        <Typography
                            variant='h3'
                            fontWeight={900}
                            sx={{ textAlign: 'center', color: '#3580f0', mb: 4 }}
                        >
                            your website
                        </Typography>
                        <Typography
                            fontSize={'1.5rem'}
                            sx={{ textAlign: 'center', color: '#102030', mb: 4 }}
                        >
                            Just upload a document or add a link to your website and get a ChatGPT-like chatbot that can answer any question on it. Then add a chat widget to your website.
                        </Typography>
                        <Box sx={{ textAlign: 'center' }}>
                            <Button
                                variant='contained'
                                color='secondary'
                                sx={{ textTransform: 'none', fontSize: '1.2rem', fontWeight: 700 }}
                            >
                                Build your chatbot
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <Box sx={{textAlign: 'center'}}>
                            <StyledImg
                                src={backImg}
                                alt='product image'
                                sx={{
                                    width: '80%',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ pb: 8 }} id="FAQs">
                <Box sx={{ textAlign: 'center', pb: 4 }}>
                    <Typography
                        variant='h4'
                        fontWeight={900}
                        sx={{ textAlign: 'center', color: '#102030' }}
                    >
                        Frequently Asked Questions
                    </Typography>
                </Box>
                <Grid container spacing={5}>
                    <Grid item sm={12} md={6}>
                        <Typography
                            variant='h6'
                            sx={{ color: '#102030', pb: 1 }}
                        >
                            What is DimaChat?
                        </Typography>
                        <Typography>
                            Chatbase is an AI chatbot builder, it trains ChatGPT on your data and lets you add a chat widget to your website. Just upload a document or add a link to your website and get a chatbot that can answer any question about their content.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Typography
                            variant='h6'
                            sx={{ color: '#102030', pb: 1 }}
                        >
                            Does it use ChatGPT or GPT-4?
                        </Typography>
                        <Typography>
                            By default your chatbot uses ChatGPT (gpt-3.5-turbo), but you can edit your chatbot settings to have it use gpt-4 instead. 1 gpt-4 message consumes 20 message credits while 1 gpt-3.5-turbo message consumes 1 message credit.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ textAlign: 'center', pb: 4 }}>
                    <Typography
                        variant='h4'
                        fontWeight={900}
                        sx={{ textAlign: 'center', color: '#102030' }}
                    >
                        What people said about DimaChat
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TestimonialCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TestimonialCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TestimonialCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TestimonialCard />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

const TestimonialCard = () => {
    return (
        <Box
            sx={{ border: '1px solid #999', borderRadius: '15px', p: 3, boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)' }}
        >
            <Typography sx={{ pb: 2 }}>
                “I’ve been looking for exactly what you’ve built with chatbase! Super excited to play with it.”
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Avatar alt='Avatar' src={Ava} />
                </Grid>
                <Grid item xs={8}>
                    <Typography>
                        Jacob Andreou
                    </Typography>
                    <Typography
                        fontSize={'0.8rem'}
                        sx={{ color: '#777' }}
                    >
                        VP @pinecone
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}