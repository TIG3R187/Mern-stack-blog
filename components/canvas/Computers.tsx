import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={[0.6, 0.6, 0.6]}
        position={[-2, -5, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [controlsActive, setControlsActive] = useState(false);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Camera animation handler (optional, can be removed if not needed)
  // const handleDemoCamera = ...

  // Handler to activate/deactivate controls
  const handleActivateControls = () => {
    setControlsActive(true);
    // Prevent text selection when controls are active
    document.body.style.userSelect = "none";
  };
  const handleDeactivateControls = () => {
    setControlsActive(false);
    // Restore text selection when controls are inactive
    document.body.style.userSelect = "";
  };

  return (
    <>
      {isMobile ? (
        <></>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10, // Increase z-index to ensure canvas is above text
              width: "100%",
              height: "100%",
              pointerEvents: controlsActive ? "auto" : "none",
              transition: "pointer-events 0.2s",
              border: controlsActive ? "2px solid #915EFF" : undefined,
              boxShadow: controlsActive ? "0 0 12px 2px #915EFF55" : undefined,
            }}
          >
            <Canvas
              style={{ width: '100%', height: '100%', background: 'transparent', cursor: controlsActive ? 'grab' : 'default' }}
              frameloop="demand"
              shadows
              dpr={[1, 2]}
              camera={{ position: [20, 3, 5], fov: 25 }}
              gl={{ preserveDrawingBuffer: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                  ref={controlsRef}
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  zoomSpeed={1}
                  panSpeed={1}
                  rotateSpeed={1.2}
                  maxPolarAngle={Math.PI}
                  minPolarAngle={0}
                  makeDefault
                />
                <Computers isMobile={isMobile} />
              </Suspense>
              <Preload all />
            </Canvas>
          </div>
          {/* Smart pulsating round button for user guidance */}
          {!controlsActive && (
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 40,
                left: "auto",
                transform: "none",
                zIndex: 1001, // Ensure button is above canvas
                pointerEvents: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 30% 30%, #915EFF 70%, #6a3fdc 100%)",
                  border: "none",
                  boxShadow: "0 0 0 0 rgba(145,94,255,0.7)",
                  animation: "pulse 1.5s infinite",
                  cursor: "pointer",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1002, // Ensure button is above all
                  position: "relative"
                }}
                title="Activate 3D controls"
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleActivateControls();
                }}
                tabIndex={0}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M14 7V21M7 14H21" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span style={{
                color: "#fff",
                fontSize: 14,
                marginTop: 8,
                textShadow: "0 1px 4px #000",
                background: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                padding: "2px 8px"
              }}>
                Click to interact with 3D scene
              </span>
            </div>
          )}
          {/* Deactivate button when controls are active */}
          {controlsActive && (
            <div
              style={{
                position: "absolute",
                bottom: 40,
                right: 40,
                left: "auto",
                transform: "none",
                zIndex: 1001, // Ensure button is above canvas
                pointerEvents: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#222",
                  border: "2px solid #915EFF",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: "pointer",
                  outline: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 6,
                  zIndex: 1002,
                  position: "relative"
                }}
                title="Deactivate 3D controls"
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleDeactivateControls();
                }}
                tabIndex={0}
              >
                ✕
              </button>
              <span style={{
                color: "#fff",
                fontSize: 13,
                textShadow: "0 1px 4px #000",
                background: "rgba(0,0,0,0.3)",
                borderRadius: 8,
                padding: "2px 8px"
              }}>
                Click to exit 3D controls
              </span>
            </div>
          )}
          <style>{`
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 rgba(145,94,255,0.7); }
              70% { box-shadow: 0 0 0 20px rgba(145,94,255,0); }
              100% { box-shadow: 0 0 0 0 rgba(145,94,255,0); }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default ComputersCanvas;
