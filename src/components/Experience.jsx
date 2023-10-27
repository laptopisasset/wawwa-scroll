import { Environment, OrbitControls } from "@react-three/drei";

export function Experience() {
    return (
        <>
            <OrbitControls />
            <Environment preset="sunset"/>
            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )    
}