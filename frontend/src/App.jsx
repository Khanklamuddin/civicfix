import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import ReportProblem from "./pages/ReportProblem";
import MyComplaints from "./pages/MyComplaints";
import AdminComplaints from "./pages/AdminComplaints";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Public Routes */}
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Report Problem */}
        <Route
          path="/report-problem"
          element={
            <ProtectedRoute>
              <ReportProblem />
            </ProtectedRoute>
          }
        />

        {/* Protected My Complaints */}
        <Route
          path="/my-complaints"
          element={
            <ProtectedRoute>
              <MyComplaints />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/admin-complaints"
          element={
            <AdminProtectedRoute>
              <AdminComplaints />
            </AdminProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;