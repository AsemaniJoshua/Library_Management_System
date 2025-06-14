import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import OTP from "./pages/OTP.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import MainLayout from "./components/dashboard/MainLayout.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Catalog from "./components/dashboard/Catalog.jsx";
import Book from "./components/dashboard/Book.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/OTP" element={<OTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* User Dashboard */}
      <Route path="/dashboard" element={<MainLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="books" element={<Book />} />        
      </Route >
    </Routes>
  </BrowserRouter>,
)
