import { motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewTransaction from "./pages/NewTransaction";
import Stats from "./pages/Stats";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCards from "./pages/MyCards";
import { AnimatePresence } from "motion/react";
import React from "react";

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const appRoute = [
    { path: "/", element: Dashboard },
    { path: "/add", element: NewTransaction },
    { path: "/stats", element: Stats },
    { path: "/cards", element: MyCards },
  ];
  return (
    <>
      <Header />

      <main className="flex flex-col gap-4 pt-24 pb-20 font-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {appRoute.map((r) => (
              <Route
                path={r.path}
                key={r.path}
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    {React.createElement(r.element)}
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}

export default App;
