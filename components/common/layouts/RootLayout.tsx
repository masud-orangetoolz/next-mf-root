import React from 'react';
import {ThemeProvider} from "@mui/system";
import {createTheme, CssBaseline, Paper} from "@mui/material";
import Navbar from "../Navbar";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {}
});

interface Props {
    children: React.ReactNode,
}

const RootLayout: React.FC<Props> = ({children}) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Paper elevation={0} sx={{border: 0}}>
                    {children}
                </Paper>
            </ThemeProvider>
        </ColorModeContext.Provider>
);
};

export default RootLayout;