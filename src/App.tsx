import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";

import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./features/auth/protectRoute";
import { LoginRPS } from "./pages/login-rps";
import HomeRPS from "./pages/home-rps";
import WaitingRPS from "./pages/waiting-rps";
import { SplashScreenRPS } from "./pages/splash-screen-rps";
import FightRPS from "./pages/fight";
import { dummyUsers, useAuthStore } from "./store/auth-store";
import { OnboardingLoader } from "./components/loadings/onboardingflowLoader";
import Dashboard from "./pages/dashboard";

const IndexPage = lazy(() => import("@/pages/index"));
const Onboarding = lazy(() => import("@/pages/onboardingFlow"));

function App() {
  const users = useAuthStore((state) => state.users);
  const setUsers = useAuthStore((state) => state.setUsers);

  useEffect(() => {
    if (users.length === 0) {
      setUsers(dummyUsers);
    }
  }, [users.length, setUsers]);

  return (
    <>
      
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            path="/dashboard"
          />
          <Route element={
            <Suspense fallback={<OnboardingLoader/>}>
              <Onboarding />
            </Suspense>
          } path="/onboarding" />
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
