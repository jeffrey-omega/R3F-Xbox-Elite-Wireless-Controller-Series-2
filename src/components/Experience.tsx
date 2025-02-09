import { Environment, OrbitControls } from "@react-three/drei";
import { XboxEliteWirelessControllerSeries2 } from "./XboxEliteWirelessControllerSeries2";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <Environment preset="studio" />
      <XboxEliteWirelessControllerSeries2 />
    </>
  );
};
