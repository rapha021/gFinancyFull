import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewTransaction from "./pages/NewTransaction";
import Stats from "./pages/Stats";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-4 py-24 font-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<NewTransaction />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
