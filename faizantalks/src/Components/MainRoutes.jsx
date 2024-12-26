import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import FaizanTalks from "../Pages/FaizanTalks";
export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faizan-talks" element={<FaizanTalks />} />
      </Routes>
    </div>
  );
}
