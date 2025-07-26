import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import { useState } from "react";
import { SplashScreen } from "./components/splash-screen";

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
      </Routes>
    </>
  );
}

export default App;
