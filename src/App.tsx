import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./features/auth/protectRoute";
import OnboardingFlow from "./pages/onboardingFlow";
import { LoginRPS } from "./pages/login-rps";

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
        <Route path="/onBoardRPS" element={<OnboardingFlow />} />
        <Route path="/signup-rps" element={<LoginRPS />} />
      </Routes>
    </>
  );
}

export default App;
