import {Grid, OrbitControls,CameraControls} from "@react-three/drei"
import leva from "leva"
import { useRef } from "react"
import { useControls,button,buttonGroup } from "leva"
import * as THREE from "three"
//  ----------------------------------------------------------------------------------
        // enableDamping={true}->to make transition smooth
        // dampingFactor={0.05}->default value is 0.05 we can increase or decrease to get requires damping
        // autoRotate={true}->to rotate the camera in orbit
        // autoRotateSpeed={8}->camera rotation speed
        // maxAzimuthAngle={Math.PI / 2}  ->maximum angle to which we can rotate horizontly
        // minAzimuthAngle={-Math.PI / 2} ->mimimum angle to which we can rotate horizontly
        // maxPolarAngle={Math.PI / 4}  ->maximum angle to which we can rotate vertically
        // minPolarAngle={-Math.PI / 4}  ->mimimum angle to which we can rotate vertically
//-------------------------------------------------------------------------------------



const OrbitControling=()=>{

    const orbitRef=useRef()
    const {DEG2RAD}=THREE.MathUtils

 

    return <>
    <OrbitControls
        // enableDamping={true}
        // dampingFactor={0.05}
        // autoRotate={true}
        // autoRotateSpeed={8}
        maxAzimuthAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 4}
        minPolarAngle={-Math.PI / 4}
      />
   
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

export default OrbitControling;