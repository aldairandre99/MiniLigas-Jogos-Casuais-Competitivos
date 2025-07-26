import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./components/protectRoute";
import OnboardingFlow from "./pages/onboardingFlow";

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
      </Routes>
    </>
  );
}

export default App;
