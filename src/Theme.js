import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      dark: "#14BEF0",
      light: "#8CCFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#1B3C74",
      light: "#77829D",
      dark: "#102851",
    },
    success: {
      main: "#01A400",
    },
    mode: "light",
    text: {
      primary: "#1B3C74",
      secondary: "#2AA7FF",
      disabled: "#77829D",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
export default Theme;
