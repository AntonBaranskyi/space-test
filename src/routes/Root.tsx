import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { FavoritePage } from '../pages/FavoritePage';
import { App } from '../App';

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='favorites' element={<FavoritePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
