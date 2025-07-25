import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import { useState, useEffect } from "react";
import { SplashScreen } from "./components/splash-screen";

function App() {
  const [showApp, setShowApp] = useState(false);

  const [splashDone, setSplashDone] = useState(false);

  /* useEffect(() => {
    const timeout = setTimeout(() => setShowApp(true), 2600);
    return () => clearTimeout(timeout);
  }, []); */


  return (
    <>
      {/*  {showApp ? (
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      ) : (
        <SplashScreen />
      )} */}

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
