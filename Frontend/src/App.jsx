import Sidebar from "./Components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import ChatBox from "./Components/ChatBox.jsx";
import Credits from "./Components/Credits.jsx";
import Community from "./Components/Community.jsx";

function App() {
  return (
    <>
      <div className="dark:bg-linear-to-b from-[#242124] to-[#000000]">
        <div className="flex h-screen w-screen ">
          <Sidebar />
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
