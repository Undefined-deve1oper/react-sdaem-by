import React from "react";
import "./scss/app.scss";
import theme from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </>
    );
};

export default App;
