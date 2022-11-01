import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { themeSelect, rawSetTheme } from "./features/Theme/themeSlice";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import EmailVerificationConfirmation from "./pages/auth/EmailVerificationConfirmation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const theme = useSelector(themeSelect);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="verify-email/:id/:token"
          element={<EmailVerificationConfirmation />}
        />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
