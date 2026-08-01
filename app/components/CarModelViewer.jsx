// "use client";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// function Model() {
//   const { scene } = useGLTF("/models/car-display.glb");
//   return <primitive object={scene} scale={1} />;
// }

// export default function CarModelViewer() {
//   return (
//     <div className="w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden relative">
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <Environment preset="city" />
//         <ambientLight intensity={0.5} />
//         <Model />
//         <OrbitControls enableZoom={true} />
//       </Canvas>
//       <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white pointer-events-none">
//         Drag to rotate 3D
//       </div>
//     </div>
//   );
// }

// useGLTF.preload("/models/car-display.glb");















// src/components/CarModelViewer.jsx
// src/components/CarModelViewer.jsx
"use client";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function Model({ ledColor }) {
  const { scene } = useGLTF("/models/car-display.glb");
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Check if the material name or mesh name relates to your lights/LEDs 
        // (You can also check child.name if your LED mesh has a specific name from Blender)
        const matName = child.material.name.toLowerCase();
        
        if (matName.includes('led') || matName.includes('light') || matName.includes('emission')) {
          // Clone the material so it doesn't affect other meshes
          child.material = child.material.clone();
          child.material.emissive.set(ledColor);
        }
      }
    });
  }, [scene, ledColor]);

  return (
    <group>
      <primitive object={scene} scale={1} />
      
      <pointLight position={[-0.8, 0.4, 0]} color={ledColor} intensity={0.8} distance={3} />
      <pointLight position={[0.8, 0.4, 0]} color={ledColor} intensity={0.8} distance={3} />
      <pointLight position={[0, 0.8, 0]} color={ledColor} intensity={0.5} distance={3} />
    </group>
  );
}

// Added the ledColor prop with your default warm yellow color
export default function CarModelViewer({ ledColor = "#ffcc00" }) {
  return (
    <div className="w-full h-[400px] bg-slate-950 rounded-2xl overflow-hidden relative">
      <Canvas 
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ toneMappingExposure: 0.3 }} 
      >
        <Environment preset="night" environmentIntensity={0.15} />
        <ambientLight intensity={0.4} />
        
        <Model ledColor={ledColor} />
        
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={0.2} />
        </EffectComposer>

        <OrbitControls enableZoom={true} />
      </Canvas>
      
      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white pointer-events-none">
        Drag to rotate 3D
      </div>
    </div>
  );
}

useGLTF.preload("/models/car-display.glb");