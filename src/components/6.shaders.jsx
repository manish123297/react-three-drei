import {
    OrbitControls,
    MeshReflectorMaterial,
    MeshWobbleMaterial,
    MeshDistortMaterial,
    GradientTexture,
    Environment,
    useCursor,
  } from "@react-three/drei";
  import { useState, useRef, useEffect } from "react";
  import * as THREE from "three";
  import { useFrame } from "@react-three/fiber";
  
  const ShadersInDrei = () => {
    const [hover, setHover] = useState(false);
    const planeRef = useRef();
    useCursor(hover); //when hover will be true then cursor becomes pointer.this hook is used to make
    //cursor pointer.
  
    const { lerp } = THREE.MathUtils;     //   Lerp, or Linear Interpolation, is a mathematical function
    //  in Unity that returns a value between two others at a point on a linear scale
  
    useFrame(() => {
      planeRef.current.material.distort = lerp(
        planeRef.current.material.distort,
        hover ? 0.4 : 0,
        hover ? 0.05 : 0.01
      );


    });
  
    useEffect(() => {
        //here we are conditionally distorting the material each time when will hover on the mesh
      if (hover) {
        planeRef.current.material.distort = 0.4;
      } else {
        planeRef.current.material.distort = 0;
      }
    }, [hover]);
  
    return (
      <>
        <OrbitControls />
        <ambientLight />
        <Environment background files="./envMap/1.hdr" />
  
         {/* <mesh>
          <boxGeometry args={[1, 1, 1, 32, 32, 32]} 
          //the last three numbers [32,32,32 ] are length .width and height material.
          />
          <MeshWobbleMaterial color="#F76E53"
        //    factor={3}
        //     speed={0.4} 
            />
        </mesh>  */}
  
        {/* <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
          <planeGeometry args={[6, 6]} />
          <MeshReflectorMaterial
          //this material is used to see the reflection of object which is infront of this mesh
            resolution={512}  //quality of reflection(default value is 256).increasing resolution decrease
            //the performance
            color="gray"
            blur={[1000, 1000]} //[blur the width of refelection,blur the height of reflection]
            mixBlur={1} //how much we want to blur
            mirror={1} //how clearly we want to see the reflection.
          />
        </mesh> */}
  
        <mesh
          ref={planeRef}
          onPointerOver={() => setHover(true)} //this method get called when we hover on mesh.
          onPointerOut={() => setHover(false)}  //this method will get run when will point out of the mesh.
        >
          <planeGeometry args={[2, 3, 64, 64]} />
          <MeshDistortMaterial
           speed={3} //speed in which we want to see the distortion
            distort={0} //amount of distortion
            >  
            <GradientTexture 
            colors={["aquamarine", "hotpink"]} //different colors with which we want to make gradient  
            stops={[0, 1]} //percentage cover of each color
             /> 
          </MeshDistortMaterial>
        </mesh>
      </>
    );
  };
  
  export default ShadersInDrei;
  