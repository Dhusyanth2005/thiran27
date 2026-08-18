import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/Homepage/Homepage";
import "./index.css";

// Add further routes (Hackathons, TechFest, etc.) as pages get built —
// they'll automatically inherit the Navbar + Footer via the Layout route.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}