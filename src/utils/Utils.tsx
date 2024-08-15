import React, { FC } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Calculator, Timer } from './pages';
import { Header } from './layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Timer />} />
      <Route path="calc" element={<Calculator />} />
    </Route>,
  ),
);

interface UtilsProps {}

const Utils: FC<UtilsProps> = () => {
  return (
    <div className="utils">
      <RouterProvider router={router} />
    </div>
  );
};

export default Utils;
