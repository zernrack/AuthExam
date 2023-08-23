import React from "react";
import ReactDOM from "react-dom";
import { isAuthenticated } from "./pages/auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AppRoutes } from "./pages/AppRoutes";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/account/login"
          element={
            isAuthenticated() ? <Navigate to="/" /> : <Login />
          }
        />
        <Route
          path="/home/index"
          element={
            isAuthenticated() ? <Homepage /> : <Navigate to="/account/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
