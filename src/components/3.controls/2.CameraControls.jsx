import {Grid, OrbitControls,CameraControls} from "@react-three/drei"
import leva from "leva"
import { useRef } from "react"
import { useControls,button,buttonGroup } from "leva"
import * as THREE from "three"

// -------------------------2.Camera Controls----------------------------------------------------------

// -------------------------------------------------------------------------------------------------------


const CameraControling=()=>{

    const cameraRef=useRef()
    const {DEG2RAD}=THREE.MathUtils

  const cameraControls=useControls("Camera Controls",{
    horizontalRotation:buttonGroup({
        label:"Horizontal R",
        opts:{
            //horizontalRotation-attribute name of cameraConyrols see documentation
            //for more controls attributes
            //label is the name which will be shown on leva panel
            //opts:different buttons which we want on leva under this label
            // 45deg-button name,and arrow function specify that what to 
            //do when clicked on button
            // rotation(angle,angle,)
            "45deg":()=>cameraRef.current.rotate(45*DEG2RAD,0,true),
            "-90deg":()=>cameraRef.current.rotate(-90*DEG2RAD,0,true),
            "360deg":()=>cameraRef.current.rotate(360*DEG2RAD,0,true)
            
        }
    }),
    verticalRotation:buttonGroup({
        label:"Vertical R",
        opts:{
            "20deg":()=>cameraRef.current.rotate(0,20*DEG2RAD,true),
            "-40deg":()=>cameraRef.current.rotate(0,-40*DEG2RAD,true),            
        }
    }),
    truckGroup:buttonGroup({
        label:"truck R",
        // this attribute is to move in straight line
        opts:{
            "(1,0)":()=>cameraRef.current.truck(1,0,true),
            "(0,1)":()=>cameraRef.current.truck(0,1,true),            
        }
    }),
    zoomGroup:buttonGroup({
        label:"zoom",
        opts:{
            "0.25":()=>cameraRef.current.zoom(0.25,true),
            "-0.25":()=>cameraRef.current.truck(-0.25,true),            
        }
    }),
    lookAtBox:button(()=>cameraRef.current.setLookAt(0,1,3,0,0,0,true))
  })

    return <>
    <OrbitControls></OrbitControls>
    <CameraControls ref={cameraRef} smoothTime={0.25}>
        {/* smoothTime is to make the transition(rotation,zoom,truck etc) smooth */}
    </CameraControls>
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

export default CameraControling;