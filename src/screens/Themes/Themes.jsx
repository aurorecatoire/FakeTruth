import "./Themes.css";
import { useNavigate } from "react-router-dom";

export default function Themes() {
  const navigate = useNavigate();

  return (
    <div className="themes-page">
      <div className="themes-container">
        <p className="themes-intro">
          Dear <span>TruthPerson</span>,
          <br />
          Choose where you want to progress
        </p>

        <section className="themes-list">
          <button
            className="theme-card theme-rumors"
            onClick={() => navigate("/rumors")}
          >
            Rumors
          </button>

          <button
            className="theme-card theme-hoaxes"
            onClick={() => navigate("/hoaxes")}
          >
            Hoaxes
          </button>

          <button
            className="theme-card theme-clickbait"
            onClick={() => navigate("/clickbaits")}
          >
            Clickbaits
          </button>

          <button
            className="theme-card theme-quotes"
            onClick={() => navigate("/falsequotes")}
          >
            False Quotes
          </button>

          <button
            className="theme-card theme-context"
            onClick={() => navigate("/ImageOrVideo")}
          >
            Out of Context Media
          </button>

          <button
            className="theme-card theme-parodies"
            onClick={() => navigate("/parodies")}
          >
            Serious Parodies
          </button>
        </section>
      </div>
    </div>
  );
}
