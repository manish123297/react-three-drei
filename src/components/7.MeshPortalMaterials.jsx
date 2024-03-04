import {
  OrbitControls,
  useGLTF,
  useTexture,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  CameraControls
} from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

const MeshPortalMaterials = () => {
  const [active, setActive] = useState(false);
  const model = useGLTF("./model/1.glb");
  const texture = useTexture("./texture/1.png"); //this is how we can load the texture by using map={texture}
  //we can apply these textures on the objects
  const portalRef = useRef();
  const cameraRef=useRef()

  const doubleClickHandler = () => {
    //this method is to set the blend value to the meshPirtalMaterial
    setActive(!active);
  };
  useFrame((_, delta) => {
    easing.damp(portalRef.current, "blend", active ? 1 : 0, 0.2, delta);
    //0.2->animation speed
    //deltaTime->time spend
  });

  useEffect(()=>{
    //we want to move camera each time  we will do doubleClick on
    //the plane
    if(active){
      //when we will move outside to inside the wall
      cameraRef.current.setLookAt(0,0,3,0,0,0,true)
    }else{
      //when we will move inside to outside the wall
      cameraRef.current.setLookAt(0,0,5,0,0,0,true)

    }

  },[active])

  return (
    <>
      {/* <OrbitControls></OrbitControls> */}
      <CameraControls ref={cameraRef}></CameraControls>
      <Text font="./fonts/1.ttf" position={[0, 1.5, 0.1]} fontSize={0.6}>
        Break
        <meshBasicMaterial toneMapped={false}></meshBasicMaterial>
      </Text>
      <RoundedBox
        //rounded box is used to get a box geometry having corners
        //circular (radius we can control)
        args={[3, 4, 0.1]} //3->width,4->height,0.1->corner radius
        onDoubleClick={doubleClickHandler}
      >
        <MeshPortalMaterial
          //A material that creates a portal into another scene.
          //  It is drawn onto the geometry of the mesh that it is applied to.
          //below we are showing the model inside the sphereGeometry.
          // It is also possible to enter the portal. If blend is 0 your scene will render as usual,
          //  if blend is higher it will start to blend the root scene and the portal scene,
          //  if blend is 1 it will only render the portal scene.
          // blend={active?1:0} //0->means we are outside the wall of meshPoratlMaterial.when 1->that means we
          // are inside the meshPortal material.and it can take any value between 0 to 1.
          ref={portalRef}
        >
          <primitive
            object={model.scene}
            //this is how we can load the model in the scene using useGLTF hook and primitive tag.
            position-y={1}
          ></primitive>
          <mesh>
            <sphereGeometry
              args={[5, 64, 64]}
              //here 64,64 is width and height segments so that sphere can look like more spherical
            ></sphereGeometry>
            <meshBasicMaterial
              map={texture}
              side={THREE.BackSide}
              //three.BackSide is added to apply the texture on the backside of the sphere.
            ></meshBasicMaterial>
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
};

export default MeshPortalMaterials;
