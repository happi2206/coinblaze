import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import routes from './router/routes';
import NotFound from './views/NotFound';
import axios from 'axios';
import './axios/global';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoins } from '../src/features/coins/coinSlice';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  const dispatch = useDispatch();
  const url = `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;

  const getCoins = useSelector((state) => {
    return state.coins.coins;
  });

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch(setCoins(response.data));
    });
  }, []);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
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
  );
}

export default App;
