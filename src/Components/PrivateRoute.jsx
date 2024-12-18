// PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./authService";

export default function PrivateRoute({ children }) {
  const user = isAuthenticated();
  return user ? children : <Navigate to="/login" />;
}
