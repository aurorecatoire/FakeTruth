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
            <h1 className="title">FakeTruth</h1>
            
            <p className="subtitle">
              Upgrade your intelligence by detectinf fake news.
              
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
                <p>5 minutes of challenge. No boredom.</p>
              </CardContent>
            </Card>
          </section>

          <footer className="footer">
            FakeTruth — train your brain, to detect the truth.
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
