import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import {IconChart, IconSearch} from "./Icons";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const App = () => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <>
            <AppBar position="sticky" color="default">
                <Tabs value={currentTab} onChange={(_, newVal) => setCurrentTab(newVal)}
                      variant="fullWidth" indicatorColor="primary" textColor="secondary">
                    <Tab label="Trending" icon={IconChart}/>
                    <Tab label="Search" icon={IconSearch}/>
                </Tabs>
            </AppBar>
        </>
    );
};

ReactDOM.render(
    <MuiThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <App/>
    </MuiThemeProvider>, document.getElementById('root')
);

