import Sidebar from "./Components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import ChatBox from "./Components/ChatBox.jsx";
import Credits from "./Pages/Credits.jsx";
import Community from "./Pages/Community.jsx";
import { useState } from "react";
import { assets } from "./assets/assets.js";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isMenuOpen && (
        <img
          src={assets.menu_icon}
          alt="Menu"
          onClick={() => setIsMenuOpen(true)}
          className="w-8 cursor-pointer absolute top-3 left-3 h-8 md:hidden not-dark:invert"
        />
      )}
      <div className="dark:bg-linear-to-b from-[#242124] to-[#000000]">
        <div className="flex h-screen w-screen ">
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
