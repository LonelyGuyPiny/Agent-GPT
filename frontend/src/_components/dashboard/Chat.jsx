import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '_store';
import { Box, Typography, Button, Grid, Paper, InputBase, IconButton, Avatar, styled, Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";

const Chat = () => {

  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ m: 'auto', p: '5rem 2rem' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={2} sx={{ borderRight: '1px solid #999' }}>
          <Typography
            variant='h5'
          >
            DimaChat
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={10} sx={{ p: 3 }}>
          <Box>
            <Typography variant='h4'>
              Dima N
            </Typography>
          </Box>
          <Box
            sx={{ border: '1px solid #999', borderRadius: '9px', p: '1rem' }}
          >
            <Button
              color='primary'
              size='large'
              variant='outlined'
              sx={{ textTransform: 'none', mr: 1 }}
            >
              Chat
            </Button>
            <Button
              color='primary'
              size='large'
              variant='outlined'
              sx={{ textTransform: 'none', mr: 1 }}
            >
              Settings
            </Button>
            <Button
              color='primary'
              size='large'
              variant='outlined'
              sx={{ textTransform: 'none', mr: 1 }}
            >
              Update knowledge
            </Button>
          </Box>
          <Box sx={{ mt: 4, pl: 5, pr: 5 }}>
            <ChatBox>
              <ReceiverMessage avatar={<Avatar>KS</Avatar>}>
                Hello how are you?
              </ReceiverMessage>
              <SenderMessage avatar={<Avatar>NA</Avatar>}>
                I'm good thanks you?
              </SenderMessage>
              <ReceiverMessage avatar={<Avatar>KS</Avatar>}>
                I'm good too!
              </ReceiverMessage>
            </ChatBox>
          </Box>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', mt: 4 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter to send, Shift + Enter for newline"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SendIcon color='primary' />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Chat;