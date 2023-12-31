import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout/Layout';
import GamePage from './pages/GamePage';
import { ConfigProvider } from 'antd';
import { themeToken } from './data/options';

export function App() {
  return (
    <>
      <ConfigProvider theme={themeToken}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="games/:id" element={<GamePage />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
