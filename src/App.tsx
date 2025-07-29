import { Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./features/auth/protectRoute";
import OnboardingFlow from "./pages/onboardingFlow";
import { LoginRPS } from "./pages/login-rps";
import HomeRPS from "./pages/home-rps";
import WaitingRPS from "./pages/waiting-rps";
import { SplashScreenRPS } from "./pages/splash-screen-rps";
import FightRPS from "./pages/fight";

import IndexPage from "@/pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route
          element={
            <ProtectedRoute>
              <p>Rota protegida</p>
            </ProtectedRoute>
          }
          path="/game"
        />
        <Route element={<OnboardingFlow />} path="/onboarding" />
        <Route element={<LoginRPS />} path="/signup-rps" />
        <Route
          element={
            <ProtectedRoute>
              <HomeRPS />
            </ProtectedRoute>
          }
          path="/home-rps"
        />
        <Route
          element={
            <ProtectedRoute>
              <WaitingRPS />
            </ProtectedRoute>
          }
          path="/waiting-rps"
        />
        <Route
          element={
            <ProtectedRoute>
              <SplashScreenRPS />
            </ProtectedRoute>
          }
          path="/splash-screen-rps"
        />
        <Route
          element={
            <ProtectedRoute>
              <FightRPS />
            </ProtectedRoute>
          }
          path="/fight-rps"
        />
      </Routes>
    </>
  );
}

export default App;
