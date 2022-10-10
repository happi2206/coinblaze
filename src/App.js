import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import { ThemeProvider } from './context/ThemeContext';
import routes from './router/routes';
import NotFound from './views/NotFound';
import axios from 'axios';
import './axios/global';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCoins } from '../src/features/coins/coinSlice';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
function App() {
  const dispatch = useDispatch();
  const url = `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
  const location = useLocation();

  const [showLoadingRequest, setShowLoadingRequest] = useState(false);
  const fetchCoins = async () => {
    const response = await axios.get(url);
    dispatch(setCoins(response.data));
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  axios.interceptors.request.use(
    function (config) {
      setShowLoadingRequest(true);
      return config;
    },
    function (error) {
      console.error(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
      setShowLoadingRequest(false);
      return response;
    },
    function (error) {
      console.error(error);
    }
  );

  return (
    <>
      {showLoadingRequest && <LoadingScreen />}

      <ThemeProvider>
        <AuthContextProvider>
          <Navbar />

          {location.pathname !== '/portfolio' && <Tabs />}

          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                ></Route>
              );
            })}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
