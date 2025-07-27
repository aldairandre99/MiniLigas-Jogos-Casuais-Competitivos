import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./features/auth/protectRoute";
import OnboardingFlow from "./pages/onboardingFlow";
import { LoginRPS } from "./pages/login-rps";
import HomeRPS from "./pages/home-rps";
import WaitingRPS from "./pages/waiting-rps";
import { SplashScreenRPS } from "./pages/splash-screen-rps";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <p>Rota protegida</p>
            </ProtectedRoute>
          }
        />
        <Route path="/onboarding" element={<OnboardingFlow />} />
        <Route path="/signup-rps" element={<LoginRPS />} />
        <Route path="/home-rps" element={<HomeRPS />} />
        <Route path="/waiting-rps" element={<WaitingRPS />} />
        <Route path="/splash-screen-rps" element={<SplashScreenRPS />} />

      </Routes>
    </>
  );
}

export default App;
