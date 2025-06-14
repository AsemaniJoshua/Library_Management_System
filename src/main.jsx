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
import Login from "./components/admin/Login.jsx";
import ForgetPasswordAdmin from "./components/admin/ForgetPassword.jsx";
import SignupAdmin from "./components/admin/Signup.jsx";
import OTPAdmin from "./components/admin/OTP.jsx";  
import ResetPasswordAdmin from "./components/admin/ResetPassword.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/OTP" element={<OTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* Admin Routes */}

      <Route path="/admin" element={<Login />} />
      <Route path="/admin/forget-password" element={<ForgetPasswordAdmin />} />
      <Route path="/admin/signup" element={<SignupAdmin />} />
      <Route path="/admin/OTP" element={<OTPAdmin />} />
      <Route path="/admin/reset-password" element={<ResetPasswordAdmin />} />

      {/* User Dashboard */}
      <Route path="/dashboard" element={<MainLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="books" element={<Book />} />        
      </Route >
    </Routes>
  </BrowserRouter>,
)
