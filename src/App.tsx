import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import AppRoutes from './routes/AppRoutes'
import { Provider } from "react-redux";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { store } from "./redux/store";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Provider>
        <ToastContainer />
      </QueryClientProvider>

    </>
  )
}

export default App
