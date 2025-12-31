import "./App.css";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Brain, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <section className="hero">
            <h1 className="title">BRAIN XP</h1>
            <p className="subtitle">
              Upgrade your intelligence like a video game.
              <br />
              3 minutes a day. No lectures. 100% active.
            </p>

            <div className="hero-buttons">
              <Button onClick={()=>{navigate("/themes")}}>Start the Challenge</Button>
            </div>
          </section>

          <section className="features">
            <Card className="feature-card">
              <CardContent>
                <Zap className="icon" />
                <h3>Micro-Challenges</h3>
                <p>2–5 minute challenges. No boredom.</p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent>
                <Brain className="icon" />
                <h3>XP & Levels</h3>
                <p>Each skill has its own progression tree.</p>
              </CardContent>
            </Card>

            <Card className="feature-card">
              <CardContent>
                <Target className="icon" />
                <h3>Useful Intelligence</h3>
                <p>Reason better. Spot fake news.</p>
              </CardContent>
            </Card>
          </section>

          <footer className="footer">
            BRAIN XP — train your brain, not your patience.
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
