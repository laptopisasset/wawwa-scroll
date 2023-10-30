import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
