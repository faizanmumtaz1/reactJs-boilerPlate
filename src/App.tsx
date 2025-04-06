import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#35326D",
      },
      background: {
        default: "#f8f9fb",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
      },
    },
  });
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </>
  );
}

export default App;
