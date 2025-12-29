import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Themes from "./screens/Themes/Themes";
import RumorsScreen from "./screens/Themes/AllThemes/RumorsScreen/RumorsScreen";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/rumors" element={<RumorsScreen />} />
      </Routes>
    </Router>
  );
}

export default Main;
