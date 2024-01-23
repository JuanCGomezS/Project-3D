import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

export function Plane() {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    planeRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 3;

    if (planeRef.current.position.x > camera.position.x + 10) {
      planeRef.current.rotation.y = Math.PI;
    } else if (planeRef.current.position.x < camera.position.x - 10) {
      planeRef.current.rotation.y = 0;
    }

    if (planeRef.current.rotation.y === 0) {
      planeRef.current.position.x += 0.01;
      planeRef.current.position.z -= 0.01;
    } else {
      planeRef.current.position.x += 0.01;
      planeRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={planeRef} position={[-5, 2, 1]} rotation={[3, 0, 3.5]} >
      <primitive object={scene} />
    </mesh>
  );
}
