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
} from "@react-three/drei"; //useHelper hook provides us the controls

const EnvironmentAndStaging = () => {
  const lightRef = useRef();
  useHelper(lightRef, THREE.DirectionalLightHelper, 1);
  //lightRef->node in which we want to add helpers
  //THREE.DirectionalLightHelper->type of helper we want to add in the node.this helper shows us that
  //from where exactly light is coming that is position of light source
  //1-helper size

  // ------------------------to create shadow of the one object on other object---------------------------------------------------
  //1.add "shadow" attribute in canvas
  // 2.add "castShadow" attribute in both source(here directionLight) and mesh which will create shadow
  // 3.add "receiveShadow" attribute in mesh on which we want to ass shadow

  // -----------------------to add sparkles,stars,cloud etc---------------------------------------------------------------------
  // 1.  <Sparkles count={700} opacity={5} scale={5} />
  //  we can add more attributes like position,color,scale(to increase area in which we will see sparkles) ,size(increase
  //      size of particles)
  //2. <Stars/> it can have attribute like radius,count,depth,factor,saturation,fade,speed(blinking speed)
  //3. <Cloud/> it can have properties like speed ,width ,depth ,depthTest etc
  // 4.<Sky/> have property like sunPosition(we can the different positions by using leva)
  // ------------------------Adding environment Map----------------------------------------------------
  // this is used to surround the env by using 6 pictulres which creates the environment
  //method-1: <Environment background ,files={[all files]}/> is used to create env using 6
  // images(top,bottom ,front,back,left,right).background is used to tell that env is for background.
  // method-2(by using HDRIs image get it from polyheaven.com).here instead of passing 6 img we
  // pass only one hdr img
  return (
    <>
      <OrbitControls></OrbitControls>
      <ambientLight></ambientLight>
      <directionalLight castShadow ref={lightRef}>
        {/* this lightRef is added to control the light position using useControls hook */}
      </directionalLight>
      {/* <Cloud opacity={0.5} color="white" ></Cloud> */}
      {/* <Stars speed={5}></Stars> */}
      {/* <Sky ></Sky> */}
      {/* <Environment background files={["./envMap/px.png","./envMap/nx.png","./envMap/py.png","./envMap/ny.png","./envMap/pz.png","./envMap/nz.png"]}></Environment> */}
      <Environment
      background //if we are using the ground attribute to make the env spherical then we can remove this
      //background attribute
        files={"./envMap/1.hdr"}
        ground={{ height: 6, radius: 60, scale: 70 }} //ground attribute is used to make the env like sphere
        //and we put the plane at ground which we have in scene.here again to adjust the value of 
        // height,radius and scale we can use leva
      ></Environment>
      <mesh castShadow>
        <boxGeometry position={[0, 1, 0]}></boxGeometry>
        <meshStandardMaterial color="#C7CAC"></meshStandardMaterial>
      </mesh>
      <mesh position={[0, -1, 0]} receiveShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]}></planeGeometry>
        <meshStandardMaterial color={"#CC3941"}></meshStandardMaterial>
      </mesh>
    </>
  );
};

export default EnvironmentAndStaging;
