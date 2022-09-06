import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import routes from './router/routes';
import NotFound from './views/NotFound';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCoins } from '../src/features/coins/coinSlice';
function App() {
  const dispatch = useDispatch();
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch(setCoins(response.data));
    });
  }, []);
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
