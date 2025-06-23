import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// Pages
import Borrow from "./pages/Borrow";
import Portfolio from "./pages/Portfolio";

import { useAccount, useChainId } from "wagmi";

import Loop from "./pages/Loop";
import Markets from "./pages/Markets";



function App() {
  const [dropdown, setDropDown] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [overlay, setOverlay] = useState<React.ReactNode>();

  const appChainId = useChainId();

  return (
    <div className="app font-[Outfit] relative overflow-hidden ">
      <Toaster />
      <main className="px-4 lg:px-16">
        <Routes>
          <Route path="/markets" element={<Markets />} />
          <Route path="/loop" element={<Loop />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/my-positions" element={<Portfolio />} />
          <Route path="*" element={<Navigate to={"/borrow"} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

