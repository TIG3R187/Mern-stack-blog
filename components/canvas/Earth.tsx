import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF(import.meta.env.BASE_URL + "planet/scene.gltf");
  const ref = useRef();

  // Optional: Center the model using bounding box
  useEffect(() => {
    if (earth.scene) {
      earth.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.geometry) {
          child.geometry.computeBoundingBox();
          const box = child.geometry.boundingBox;
          if (box) {
            const center = [
              (box.max.x + box.min.x) / 2,
              (box.max.y + box.min.y) / 2,
              (box.max.z + box.min.z) / 2,
            ];
            child.position.x -= center[0];
            child.position.y -= center[1];
            child.position.z -= center[2];
          }
        }
      });
    }
  }, [earth.scene]);

  return (
    <primitive
      ref={ref}
      object={earth.scene}
      scale={9} // Increase scale as needed
      position={[-2, -17, -1]} // Move further down on Y axis
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 40], // Move camera further back for larger scale
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7.5]} intensity={1.5} />
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false} // Disable zoom in/out
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
