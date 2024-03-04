import {Grid, OrbitControls,CameraControls,PresentationControls} from "@react-three/drei"
import leva from "leva"
import { useRef } from "react"
import { useControls,button,buttonGroup } from "leva"
import * as THREE from "three"
// PresentationControls-it helps us to rotate mesh insted of rotation camera 

const PresentationControl = () => {
  return (<>
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
    {/* <OrbitControls></OrbitControls> */}
    <PresentationControls
      global //this is defined to tell that when we are on cube then only we can rotate mesh
      polar={[-Math.PI / 3, Math.PI / 3]}   //this is to restrict vertical rotation(min,max) 
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}  //to restrict  horizontal rotation (min max)
      config={{ mass: 2, tension: 500 }}  //as presentation control using the react spring so it 
      // can take properties of spring like mass and tension to control the animation 
      snap={{ mass: 4, tension: 1500 }} //to get back to its original position
      >
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </PresentationControls>
        </>
  );
};

export default PresentationControl;
