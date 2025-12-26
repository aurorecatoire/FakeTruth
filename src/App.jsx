import "./App.css";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import { Brain, Zap, Target } from "lucide-react";

export default function App() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        //Pour faire des animations fluides, le hero apparait doucement
      >
        {/* HERO */}
        <div className="Para1">
          <h1 className="title">BRAIN XP</h1>
          <p>
            Améliore ton intelligence comme dans un jeu vidéo.
            
            {/*  aller à la ligne suivante */}
            <br />
            3 minutes par jour. Zéro cours.
            100 % actif.
          </p>
          <div >
            <Button >Commencer</Button>
            <Button >
              Voir comment ça marche
            </Button>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <Card>
            <CardContent>
              <Zap />
              <h3>Micro-défis</h3>
              <p>
                Des défis de 2 à 5 minutes pour entraîner ton cerveau sans
                t’ennuyer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Brain/>
              <h3>XP & niveaux</h3>
              <p>
                Logique, esprit critique, créativité : chaque compétence a son
                arbre.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Target/>
              <h3>Intelligence utile</h3>
              <p>
                Apprends à raisonner, détecter les fake news et mieux
                argumenter.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FOOTER */}
        <div>
          BRAIN XP — entraîne ton cerveau, pas ta patience.
        </div>
      </motion.div>
    </div>
  );
}
