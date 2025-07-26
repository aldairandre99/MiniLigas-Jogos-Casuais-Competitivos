import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { useState } from "react";
import { SplashScreen } from "./components/splash-screen";
import { LoginPage } from "./pages/login";
import { ProtectedRoute } from "./components/protectRoute";

function App() {

  //const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {/* {!splashDone ? (
        <SplashScreen onFinish={() => setSplashDone(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<IndexPage />}/>
        </Routes>
      )}                          
      )} */}
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
      </Routes>
    </>
  );
}

export default App;
