import './App.css';
import Header from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home/home';
import Login from './components/Login/login.js';
import Signup from './components/Signup/signup';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
]);

function App() {
  return (
    <NextUIProvider>
      <Header/> 
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
