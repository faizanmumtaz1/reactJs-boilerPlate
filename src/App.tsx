import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#35326D",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
