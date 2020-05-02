import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {App} from "./App";
import {DevTimestamp} from "./devTimestamp";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
        <DevTimestamp/>
    </MuiThemeProvider>, document.getElementById('root')
);

