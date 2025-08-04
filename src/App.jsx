import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// src/index.js
import '@fontsource/space-grotesk'; // Regular (400)
import '@fontsource/space-grotesk/300.css'; // Light
import '@fontsource/space-grotesk/500.css'; // Medium
import '@fontsource/space-grotesk/600.css'; // SemiBold
import '@fontsource/space-grotesk/700.css'; // Bold

import HomePage from "./pages/HomePage/HomePage";

// import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    // <GlobalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Router>
    // </GlobalProvider>
  );
}

export default App;
