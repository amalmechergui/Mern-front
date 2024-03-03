import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import store from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UpdateBrand from './Pages/UpdateBrand';
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header";
import PrivateRoutes from "./Components/PrivateRoutes";
import Dashboard from "./Pages/Dashboard"
import DetailsPage from "./Components/DetailsPage";
import Contact from './Components/Contact';
import News from './Components/News';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> 
    <BrowserRouter>
    <ToastContainer />
    <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/car/:id" element={<UpdateBrand />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News" element={<News />} />

        <Route path="" element={<PrivateRoutes />}>
          <Route path="/profile" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
 
);