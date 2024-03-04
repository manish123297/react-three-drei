import { Image, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
// this file is for the 5.ScrollControl.jsx
//here we have learnt 1.how we can implent scroll on webpage and used both mesh as well as html tag
//2.controlled the img attributes  and  viewport
//3. how to change IMG properties on scroll using useFrame. 
const Images = () => {
  const { width, height } = useThree((state) => state.viewport); //writing this is similar to
  //const three=useThree() and then extracting width like this three.viewport.width or three.viewport.height
  // this height is the height of one view port out of 5 viewports which we have as
  // we have added pages in <Scroll/> as 4.
  const scroll = useScroll();
  const groupRef = useRef();

  useFrame(() => {
    // console.log(groupRef.current.children[0])
    groupRef.current.children[0].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
    //groupRef.current.children[0]->means first img(<Image/>) of group tag. 
    //scroll.range(start position,distance)->it will return all the value between zero (when we will
    // be at start position) and 1 (when we will reach to 1/3  of the scroll) 
    groupRef.current.children[1].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);//here start position
    //is 1/3 and from there we will cover 1/3 of scroll.
    groupRef.current.children[2].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
    groupRef.current.children[3].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
    groupRef.current.children[4].material.zoom =
      1 + scroll.range(2 / 3, 1 / 3) / 3;
    groupRef.current.children[5].material.grayscale =
      1 - scroll.range(2 / 3, 1 / 3);
    groupRef.current.children[5].material.zoom = 2 - scroll.range(2 / 3, 1 / 3);
  });
  return (
    <>
      <group  ref={groupRef}>
        {/* since we have multiple images so we are using group tag  */}
        <Image
          url="./images/1.jpg"
        //   scale-y={height}
        //   scale={width}
        scale={[4,height,1]} //[x,y,z]
          position={[-2, 0, 0]}
          grayscale={0} //value ranges from 1(for black and white) to 0(color-bo grey scale)
          zoom={1.2} //default value 1
        ></Image>
        {/* this is how  we can add inmages */}
        <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url="./images/2.jpg"
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url="./images/3.jpg"
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="./images/4.jpg" />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url="./images/5.jpg"
        grayscale={1}
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url="./images/6.jpg"
      />
      </group>
    </>
  );
};

export default Images;
