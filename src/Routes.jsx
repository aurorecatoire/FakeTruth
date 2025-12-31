import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Themes from "./screens/Themes/Themes";
import RumorsScreen from "./screens/Themes/AllThemes/RumorsScreen/RumorsScreen";
import HoaxesScreen from "./screens/Themes/AllThemes/HoaxesScreen/HoaxesScreen";
import ClickbaitsScreen from "./screens/Themes/AllThemes/ClickbaitsScreen/ClickbaitsScreen";
import FalseQuotesScreen from "./screens/Themes/AllThemes/FalseQuotesScreen/FalseQuotesScreen";
import ImageOrVideoScreen from "./screens/Themes/AllThemes/ImageOrVideoScreen/ImageOrvideoScreen";
import ParodiesScreen from "./screens/Themes/AllThemes/ParodiesScreen/ParodiesScreen";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/rumors" element={<RumorsScreen />} />
        <Route path="/hoaxes" element={<HoaxesScreen />} />
        <Route path="/clickbaits" element={<ClickbaitsScreen />} />
        <Route path="/falsequotes" element={<FalseQuotesScreen />} />
        <Route path="/ImageOrVideo" element={<ImageOrVideoScreen/>} />
        <Route path="/parodies" element={<ParodiesScreen/>} />
      </Routes>
    </Router>
  );
}

export default Main;
