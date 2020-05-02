import {sudoku} from './lib/sudoku.js'
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const split = (board: [[string], [string],[string],[string],[string],[string],[string],[string],[string]]) => {
    return [
        [ // Box 0, 0
            board[0].slice(0,  3),
            board[1].slice(0, 3),
            board[2].slice(0, 3)
        ]
    ]
}

const App = () => {
    const boardString = sudoku.generate("easy");
    const boardStringToGrid = sudoku.board_string_to_grid(boardString);
    console.log(boardString);
    console.table(split(boardStringToGrid))
    //state currNum
    return <>
        {
            boardStringToGrid.map(row => {
                return <div>{row.map(col => {
                    return <span>{col}</span>
                })}</div>
            })
        }
    </>;
};

ReactDOM.render(
    <MuiThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
    </MuiThemeProvider>, document.getElementById('root')
);

