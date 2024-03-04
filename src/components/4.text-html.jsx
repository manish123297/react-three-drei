import {
    OrbitControls,
    Text,
    Text3D,
    Center,
    Float,
    Html,
  } from "@react-three/drei";
  import { useRef } from "react";

//   <Center> -> center is  used to center the text
//   <Float speed={5} floatIntensity={4}>  ->float is used to make 3D text floating 
// <meshNormalMaterial />  -> this is hw we can add material 
            
  
  const TextHtml = () => {
    const cubeRef = useRef();
  
    return (
      <>
        <OrbitControls />
  
       {/* <Text
          fontSize={0.4} //to increase the font size of the text
          color="orange" //to provide the color
          font="./fonts/1.ttf" //thisn is how we can use the font
          position-y={1.5}
          rotation-y={Math.PI * 0.1} //to rotate the text
          maxWidth={2} //to provide the width
          textAlign="center"
        >
          This is a Text
        </Text> */}
  
         {/* <Center>
          <Float speed={5} floatIntensity={4}>
            <Text3D
              font="./fonts/2.json"
              height={1} //to increase the heigh
              size={1.1} //to increaset the height
              letterSpacing={-0.1} //space between two character
              bevelEnabled //to extend iy backward (see this by doing not able to write what t say)
              bevelSegments={20} //control bevel
            >
              Hello
              <meshNormalMaterial /> 
            </Text3D>
          </Float>
        </Center>   */}
  
        <mesh position-x={1} ref={cubeRef}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
          <Html
            position={[-0.7, 0.5, 0.5]}
            wrapperClass="text" // we can target in style.css by this wrapperClass to provide  styles.
            distanceFactor={5} //this is ised to make html text also zoom in or out when we will zoom the
            //mesh 
            occlude={[cubeRef]} //this is to hide the text if this cubRef object comes completly infron 
            //of text.we can add multiple ref here for which we want to hide text.
          >
            R3F
          </Html>
        </mesh>
  
         <mesh position-x={-1}>
          <boxGeometry />
          <meshBasicMaterial color="purple" />
        </mesh> 
      </> 
    );
  };
  
  export default TextHtml;
  