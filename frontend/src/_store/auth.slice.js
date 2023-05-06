import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { history } from '_helpers';
import api from '_helpers/api';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        // initialize state from local storage to enable user to stay logged in
        token: JSON.parse(localStorage.getItem('token')),
        isAuthenticated: false,
        user: {},
        error: {
            signup: '',
            signin: ''
        }
    }
}

function createReducers() {
    return {
        logout,
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('token');
        history.navigate('/login');
    }
}

function createExtraActions() {

    return {
        login: login(),
        signup: signup()
    };    

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async ({ email, password }) => api.post('/signin', { email, password })
        );
    }

    function signup() {
        return createAsyncThunk(
            `${name}/signup`,
            async (userinfo) => api.post('/signup', userinfo)
        );
    }
}

function createExtraReducers() {
    return {
        ...login(),
        ...signup()
    };

    function login() {
        var { pending, fulfilled, rejected } = extraActions.login;
        return {
            [pending]: (state) => {
                state.error = {...state.error, signin: ''};
            },
            [fulfilled]: (state, action) => {
                const user = action.payload.user;
                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(action.payload.data.token));
                state.user = user;
                state.isAuthenticated = true;

                // get return url from location state or default to home page
                const { from } = history.location.state || { from: { pathname: '/' } };
                history.navigate(from);
            },
            [rejected]: (state, action) => {
                if(action.error.message === 'Request failed with status code 401') {
                    state.error = {...state.error, signin: 'Incorrect password'};
                } else if(action.error.message === 'Request failed with status code 404') {
                    state.error = {...state.error, signin: 'User not found'};
                }
            }
        };
    }

    function signup() {
        var { pending, fulfilled, rejected } = extraActions.signup;
        return {
            [pending]: (state) => {
                state.error = {...state.error, signup: ''};
            },
            [fulfilled]: (state, action) => {
                const {user} = action.payload.data.user;
                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', JSON.stringify(action.payload.data.token));
                state.user = user;
                state.isAuthenticated = true;

                // get return url from location state or default to home page
                history.navigate('/');
            },
            [rejected]: (state, action) => {
                if(action.error.message === 'Request failed with status code 400') {
                    state.error = {...state.error, signup: 'Email already used'};
                } else if(action.error.message === 'Request failed with status code 404') {
                    state.error = {...state.error, signup: 'Invalid email address'};
                }
            }
        };
    }
}
