import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MoviesRec from "./pages/MoviesRec";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* PUBLIC */}
          <Route
            path="/"
            element={
              <MainLayout>
                <Landing />
              </MainLayout>
            }
          />

          <Route
            path="/movies"
            element={
              <MainLayout>
                <MoviesRec />
              </MainLayout>
            }
          />

          <Route
            path="/profile"
            element={
              <MainLayout>
                <Profile />
              </MainLayout>
            }
          />

          {/* AUTH */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />

          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;