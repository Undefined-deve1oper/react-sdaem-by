import { createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/material/locale";

const theme = createTheme(
    {
        palette: {
            primary: {
                default: "#8291a3",
                light: "#9D94FF",
                main: "#664EF9",
                dark: "#6B50E9",
                gradient: "linear-gradient(90deg, #9D94FF 0%, #6B50E9 94.5%)"
            },
            secondary: {
                default: "#686868",
                light: "#ffe07a",
                main: "#FFD54F",
                dark: "#FEB700",
                gradient:
                    "linear-gradient(106.06deg, #FFD54F 1.12%, #FEC100 97.96%)"
            },
            error: {
                light: "#fb7070",
                main: "#EB5757",
                dark: "#e24040"
            },
            custom: {
                light: "#F8F8F8"
            }
        },
        typography: {
            useNextVariants: true,
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#8291A3"
        },
        breakpoints: {
            values: {
                md4: 479.98,
                md3: 767.98,
                md2: 991.98,
                md1: 1319
            }
        },
        components: {
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        width: "100%",
                        maxWidth: "1307px",
                        padding: "0 15px",
                        margin: "0 auto"
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        "& label": {
                            color: "#686868",
                            top: "50%",
                            transform: "translateY(-50%)"
                        },
                        "& legend": {
                            display: "none"
                        },
                        "&.input-base": {
                            "& fieldset": {
                                color: "#686868",
                                border: `1px solid #f8f8f8`,
                                background: "#f8f8f8",
                                borderRadius: "20px"
                            },
                            "& .MuiInputBase-input": {
                                padding: "0px",
                                minHeight: "37px"
                            },
                            "& .MuiInputBase-input:hover + fieldset": {
                                border: `1px solid #f8f8f8`
                            },
                            "& .MuiInputBase-input:focus + fieldset": {
                                border: `2px solid rgba(102, 78, 249, 0.8)`
                            }
                        }
                    }
                }
            }
        },
        transitions: {
            duration: {
                shortest: 150,
                shorter: 200,
                short: 250,
                standard: 300,
                complex: 375,
                enteringScreen: 225,
                leavingScreen: 195
            },
            easing: {
                // This is the most common easing curve.
                easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
                // Objects enter the screen at full velocity from off-screen and
                // slowly decelerate to a resting point.
                easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
                // Objects leave the screen at full velocity. They do not decelerate when off-screen.
                easeIn: "cubic-bezier(0.4, 0, 1, 1)",
                // The sharp curve is used by objects that may return to the screen at any time.
                sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
            }
        }
    },
    ruRU
);

export default theme;
