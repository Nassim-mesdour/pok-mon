import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({});
export const useGlobalContext = () => {
  const global = useContext(GlobalContext);
  if (!global) {
    throw new Error("GlobalContext need it's provider to be consumed");
  }

  return global;
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <GlobalContext.Provider value={{ darkMode, setDarkMode }}>
        <CssBaseline />
        <Box display="flex" justifyContent="center">
          <img src="./pikachu.svg" alt="pikachu" width="70" />
          <Typography variant="h3" pt={1}>
            Pokemon
          </Typography>
        </Box>
      </GlobalContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
