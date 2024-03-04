import {
  Grid,
  OrbitControls,
  CameraControls,
  PresentationControls,
  ScrollControls,
  Scroll,
  useGLTF,
} from "@react-three/drei";
import leva from "leva";
import { useRef } from "react";
import { useControls, button, buttonGroup } from "leva";
import * as THREE from "three";
import Images from "./images";
import { useThree } from "@react-three/fiber";

// ---------------------Scroll Attributes-----------------------------------------------------------
// pages={k} this means in browser we will have k+1 page
// ------------------------------------------------------------------------------------------------
const Scrollcontrols = () => {
  const model = useGLTF("./model/model.gltf");
  return (
    <>
      <ambientLight intensity={9}></ambientLight>
      <ScrollControls pages={4} damping={0.3}  >
        {/* by default the  damping value will be 0.2 .this is it control the speed of scroll.we can
        increase or decrease the damping value  */}
        {/* infinite={true}->once we will reach to the end of the scroll and scroll down we will again
        reach to the start of the scroll */}
        {/* horizontal->to meke the scroll horizontal by it is vertical that horizontal={false} */}
        <Scroll>
          {/* here we can add 3d element or html element(in case of html we have to pass attribute html={true}) */}
          <Images></Images>
          <primitive
            object={model.scene}
            position={[1.5, -1, 0]}
            scale={0.5}
          ></primitive>
        </Scroll>
        <Scroll html={true}>
          <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "198.5vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scrollcontrols;
