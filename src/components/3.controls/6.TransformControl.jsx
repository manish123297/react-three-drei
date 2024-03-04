import {
  OrbitControls,
  TransformControls,
  PivotControls,
} from "@react-three/drei";

const TransformControling = () => {
  // return (<>
  // <OrbitControls makeDefault>
  //   {/* makeDefault attribute is used to make orbitControl as default control. */}
  // </OrbitControls>
  //   <TransformControls mode="rotate" >
  //     {/* ir provides axes for a mesh so that we can transform and see the changes. */}
  //     {/* mode="rotate"/"translate"/"scale" */}
  //     <mesh>
  //       {/* as mesh is inside the transformControls so by draging by the axes of tranform control\
  //        we can move the mesh. */}
  //       <boxGeometry></boxGeometry>
  //       <meshBasicMaterial color="purple"></meshBasicMaterial>
  //     </mesh>
  //   </TransformControls>
  //        </>
  // );

  return (
    <>
      <PivotControls
      //this control provides both rotation and translation at a time.
        anchor={[0, 0, 0]}//to make pivot control axes origin at center of the mesh
        depthTest={false} //to make axes visible  in case of when axes will be behind the mesh
        axisColors={["red", "green", "cyan"]} //to provide the color to the x,y and z axes
        lineWidth={7}
        scale={2}
      >
        <mesh>
          <boxGeometry></boxGeometry>
          <meshBasicMaterial color="purple"></meshBasicMaterial>
        </mesh>
      </PivotControls>
    </>
  );
};

export default TransformControling;
