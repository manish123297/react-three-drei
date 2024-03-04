import * as THREE from "three";
import { useRef } from "react";
import {
  OrbitControls,
  useHelper,
  Sparkles,
  Stars,
  Cloud,
  Sky,
  Environment,
  PerspectiveCamera,
  CubeCamera
} from "@react-three/drei"; //useHelper hook provides us the controls
 import { useFrame } from "@react-three/fiber";
const Camera = () => {

    // to use perspective and cube camera(see documentation)--------------------------------------------------------------
    // 1.perspective we already know how to create
    //2.cubeCamera-used to show the reflection of an object on another object.here we are seeing 
    // the reflection of cube mesh on spherical mesh.

    const cubeRef=useRef();
    useFrame((_,delta)=>{
        cubeRef.current.rotation.x+=delta

    })

  return<>
  <OrbitControls></OrbitControls>
  <Environment background files={"./envMap/2.hdr"}></Environment>
  {/* <PerspectiveCamera makeDefault position={[0,0,15]}></PerspectiveCamera> */}
  <CubeCamera
  //here we can define frame={1} ifwe want to render it only  for one time.we can also define here the 
  //resolution={1024} or any resolution or frame we want
  >
  {(texture) => (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial envMap={texture} roughness={0} metalness={0.9} />
    </mesh>
  )}
</CubeCamera>
  <mesh ref={cubeRef} position-z={3}>
    <boxGeometry></boxGeometry>
    <meshStandardMaterial color="red" ></meshStandardMaterial>
  </mesh>
  </>
};

export default Camera;
