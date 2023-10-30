import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export function Experience() {
    return (
        <>
            <OrbitControls enableZoom={false} />
            <Environment preset="sunset" />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <Office />
            </ScrollControls>
        </>
    )
}