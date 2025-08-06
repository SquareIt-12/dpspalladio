import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Page/Login.jsx";
import Dashboard from "./Page/Dashboard.jsx";
import ThankYou from "./Page/Thanks.jsx";
import StaticProtectedRoute from "./Page/StaticProtected.jsx";
import TrackingPage from "./Page/TrackingPage.jsx";
import TrackingLogin from "./Page/trackingLogin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/thanks" element={<ThankYou />} />
        <Route path="/tracklogin" element={<TrackingLogin />} />
        <Route
          path="/tracking"
          element={
            <StaticProtectedRoute>
              <TrackingPage />
            </StaticProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
