import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";

function App() {

  return (
    <Canvas camera={{ position: [2.3, 1.5, 2.3], fov: 64 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}

export default App
