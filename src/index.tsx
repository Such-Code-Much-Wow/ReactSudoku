import {sudoku} from './lib/sudoku.js'
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Block} from "./Block";
import {Grid, GridList} from "@material-ui/core";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const toBlocks = (board: [[string], [string],[string],[string],[string],[string],[string],[string],[string]]) => {
    let blocks = [];
    let currArr0, currArr1, currArr2;
    for (let i = 0; i < 9; i++) {
        if (i % 3 == 0) {
            currArr0 = [];
            currArr1 = [];
            currArr2 = [];
        }
        for (let j = 0; j < 9; j += 3) {
            const arr = (j < 3) ? currArr0 : (j < 6) ? currArr1 : currArr2;
            arr.push(board[i].slice(j, j + 3))
        }
        if (i % 3 == 0) {
            blocks.push(currArr0)
            blocks.push(currArr1)
            blocks.push(currArr2)
        }
    }
    return blocks;
}

const App = () => {
    const boardString = sudoku.generate("easy");
    const boardStringToGrid = sudoku.board_string_to_grid(boardString);
    console.log(boardString);
    const blocks = toBlocks(boardStringToGrid);
    console.log(blocks)
    //state currNum
    return <div >
        {
            blocks.map(block => {
                return <div><Block block={block}/><hr/></div>
            })
        }
    </div>;
};

ReactDOM.render(
    <MuiThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
    </MuiThemeProvider>, document.getElementById('root')
);

