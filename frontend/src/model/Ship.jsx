import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";



const Ship = () => {
    const { scene } = useGLTF("./ship/scene.gltf"); //import model from public
  
    return (
    //   <primitive
    //    object={scene}
    //    scale={2.5} 
    //    position-y={0} 
    //    rotation-y={0}
    //   />
    <mesh> {/*in 3d web site use mesh not div*/}
        {/*for extra info visit 'ract three fiber'*/}
      <hemisphereLight intensity={3} groundColor="black" /> {/*add light*/}
      <spotLight
        position={[-10, 50, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />{/*add point light*/}
      <primitive 
        object={scene}
        scale={1}
        position={[0, -100.25, -50.5]}
        // rotation={[0, 0, 0]}
      />
    </mesh>

      
    );
};

const ShipCanvas = () => {
  return (
    <Canvas
        shadows
        frameloop='demand'
        dpr={[2, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 30,
          near: 2,
          far: 600,
        //   position: [10, -100, 100],
        position: [0, 0, 500],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Ship />
          <Preload all />
        </Suspense>
      </Canvas>
  )
}

export default ShipCanvas;