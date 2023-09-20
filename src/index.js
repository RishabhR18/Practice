import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Restaurant from './Cards/Restaurant/Restaurants';
import About from './About/About';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { RouterProvider,Outlet,createBrowserRouter } from 'react-router-dom';
import Error from './Error/Error';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet />
      <Footer/>
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      {
        path: "/",
        element: <Restaurant />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {

      },
      {

      },
      {

      },
     
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
