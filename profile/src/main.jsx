import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ResumePage from "./components/Resume";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </StrictMode>
);
