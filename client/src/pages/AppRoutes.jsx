import { Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Login from "./Login";
import Homepage from "./Homepage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/account/login" element={<Login />} />
      <Route
        path="/"
        element={isAuthenticated() ? <Homepage /> : <Navigate to="/account/login" />}
      />
    </Routes>
  );
};
