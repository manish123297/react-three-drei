import {Grid, OrbitControls,CameraControls} from "@react-three/drei"
import leva from "leva"
import { useRef } from "react"
import { useControls,button,buttonGroup } from "leva"


// ------------------------------------------------------------------------------------------------------
// ---------------1.GRID and its controls-------------------------------------------------------------
// args={[30,30]}    -> no of sections in  length and width
// cellSize={0.25}   -> size of each cell which is inside the section
// cellColor="red"    -> color of cell (boundries not fill color)
// sectionSize={1.5}   -> size of each section
// sectionThickness={1.7} -> thickenss of each section (edges)
// sectionColor="green" -> color of section
// fadeDistance={10}     -> distance after which we want to make grid invisible
// fadeStrength={0.75}   -> fade strength 


const GridControls=()=>{

    const cameraRef=useRef()


    return <>
    <OrbitControls></OrbitControls>
    <CameraControls ref={cameraRef}></CameraControls>
    <Grid 
    args={[30,30]}
    cellSize={0.25}
    cellColor="red"
    sectionSize={1.5}
    sectionThickness={1.7}
    sectionColor="green"
    fadeDistance={10}
    fadeStrength={0.75}
    />
    <mesh>
     <boxGeometry></boxGeometry>
     <meshNormalMaterial></meshNormalMaterial>
    </mesh>
    </>

}

export default GridControls;