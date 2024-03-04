import { OrbitControls, PositionalAudio } from "@react-three/drei";
import { useState } from "react";

const AddingAudio = () => {
  const [play, setPlay] = useState(false);
  const clickHandler = () => {
    setPlay(!play);
  };

  return (
    <>
      <OrbitControls />
      {play && (
        <PositionalAudio url="./sound/sound.mp3"
         autoplay  //this is to automatically start the audio
         loop  //volume will be according to distance of the mesh 
         distance={5} //this is to  
         />
      )}
      <mesh onClick={clickHandler}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default AddingAudio;
