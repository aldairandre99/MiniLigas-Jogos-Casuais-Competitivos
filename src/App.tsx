import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import { useState } from "react";
import { SplashScreen } from "./components/splash-screen";

function App() {
  
  const [splashDone, setSplashDone] = useState(false);



  return (
    <>
      {!splashDone ? (
        <SplashScreen onFinish={() => setSplashDone(true)} />
      ) : (
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      )}

    </>
  );
}

export default App;
