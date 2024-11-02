import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oralit from "./Pages/Oralit";
import Materi from "./Pages/Materi";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Oralit />} />
        <Route path="/materi" element={<Materi />} />
      </Routes>
    </Router>
  );
}

export default App