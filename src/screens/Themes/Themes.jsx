import "./Themes.css";
import { useNavigate } from "react-router-dom";

export default function Themes() {
  const navigate = useNavigate();
  return (
    <div className="themes-page">
      <p className="themes-intro">
        Dear TruthPerson. <br />
        Choose where you want to progress
      </p>

      <section className="themes-list">
        <button
          className="theme-card theme-rumors"
          onClick={()=>{navigate("/rumors")}}
        >
          Rumors
        </button>
        <button className="theme-card theme-hoaxes">Hoaxes</button>
        <button className="theme-card theme-clickbait">Clickbait</button>
        <button className="theme-card theme-quotes">False quotes</button>
        <button className="theme-card theme-context">
          Images or videos taken out of context
        </button>
        <button className="theme-card theme-parodies">
          Parodies taken seriously
        </button>
      </section>
    </div>
  );
}
