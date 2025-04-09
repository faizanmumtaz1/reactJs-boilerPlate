import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import AppRoutes from './routes/AppRoutes'
import { Provider } from "react-redux";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { store } from "./redux/store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {


  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error: any, query: any) => {
        const queryKey = query.queryKey[0];
        console.log(queryKey, error);
      },
    }),

    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

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
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <AppRoutes />
              </ThemeProvider>
            </BrowserRouter>
          </LocalizationProvider>
        </Provider>
        <ToastContainer />
      </QueryClientProvider>
    </>
  )
}


{/* import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes"; */}


{/* function App() {
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
        
        </BrowserRouter>
      </LocalizationProvider>
    </>
  );
} */}

export default App; 
