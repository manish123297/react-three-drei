// import EnvironmentAndStaging from "./components/1.Environments&staging";
// import Camera from "./components/2.camera";
// import GridControls from "./components/3.controls/1.GridControls";
// import CameraControling from "./components/3.controls/2.CameraControls";
// import OrbitControling from "./components/3.controls/3.OrbitControls";
// import PresentationControl from "./components/3.controls/4.PresentationControls";
// import Scrollcontrols from "./components/3.controls/5.ScrollControl";
// import TransformControling from "./components/3.controls/6.TransformControl";
// import TextHtml from "./components/4.text-html";
// import AddingAudio from "./components/5.addingAudio";
// import ShadersInDrei from "./components/6.shaders";
import MeshPortalMaterials from "./components/7.MeshPortalMaterials";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
function App() {
  return (
    <div className="root">
      <Canvas shadows camera={[0,0,5]} >
        <MeshPortalMaterials></MeshPortalMaterials>
      </Canvas>
    </div>
  );
}

export default App;
