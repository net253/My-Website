import React, { useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';
import webdeveloper from '../asset/webdeveloper.json';
import pImg from "../asset/profile.jpg";

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [loaded, setLoaded] = useState({ display: "none" });

  return (
    <div className="home-container">
      <AnimatePresence exitBeforeEnter>
        {showContent ?
          <motion.div
            className="home-motion"
            key={"home"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <Card className="home-content" style={loaded}>
              <Card.Body className="p-3 text-white">
                <Image onLoad={() => setLoaded({})} className="home-img" src={pImg} thumbnail />
                <Card.Title className="mt-1">
                  <h1>Suttawee Chatpattanasiri (NET)</h1>
                </Card.Title>
                <Card.Subtitle className="mb-2">
                  <h2>Software Engineer</h2>
                </Card.Subtitle>
                <Card.Text className="home-text">
                    <p>
                        45 Phonrat Road,Muang Phon Sub-district,Phon district,Khonkaen, Thailand 40120
                      </p> 
                  (+66) 087 248 4343, Suttawee.net@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
          :
          <motion.div
            className="home-lottie"
            key={"lottie"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <Player
              autoplay
              speed={2}
              onEvent={event => event == "complete" ? setShowContent(true) : ""}
              src={webdeveloper}
              style={{ maxWidth: "600px", maxHeight: "600px" }}
            >
            </Player>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
}

export default Home;
