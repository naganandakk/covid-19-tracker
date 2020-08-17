import React from 'react';
import { DefaultTheme, DarkTheme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from "./components/dashboard/Dashboard";
import ServiceWorkerUpdate from "./ServiceWorkerUpdate";

export default function App() {
    const [theme, setTheme] = React.useState("dark");
    const toggleTheme = theme => {
        setTheme(theme);
    }

    return (
        <ThemeProvider theme={theme === "dark" ? createMuiTheme(DarkTheme) : createMuiTheme(DefaultTheme)}>
            <CssBaseline />
            <Dashboard theme={theme} toggleTheme={toggleTheme}/>
            <ServiceWorkerUpdate/>
        </ThemeProvider>
    );
}