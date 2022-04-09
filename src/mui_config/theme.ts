import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#86c3ff",
      contrastText: "white",
    },
    secondary: {
      main: "#202225",
      contrastText: "white",
    },
    warning: {
      main: "#ff8686",
      contrastText: "white",
    },
    info: {
      main: "#707070",
      contrastText: "white",
    },
    text: {
      primary: "#707070",
    },
  },
  typography: {
    h1: {
      fontFamily: '"BIZ UDGothic", sans-serif',
      fontWeight: 700,
      fontSize: "1.2rem",
    },
    h2: {
      fontFamily: '"Noto Sans JP", sans-serif',
      fontWeight: 900,
      fontSize: "1.3rem",
    },
    button: {
      fontFamily: '"Noto Sans JP", sans-serif',
      fontWeight: 900,
    },
  },
});

export default theme;
