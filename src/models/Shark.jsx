import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import sharkScene from "../assets/3d/shark.glb";

export function Shark({ isRotating, ...props }) {
  const sharkRef = useRef();
  const { scene, animations } = useGLTF(sharkScene);
  const { actions } = useAnimations(animations, sharkRef);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  useFrame(({ clock, camera }) => {
    sharkRef.current.position.y = -9;
    sharkRef.current.position.z = -15;

    /* if (ref.current.position.x < 10 && ref.current.rotation.y < 22) {
      //console.log("1Y", ref.current.rotation.y);
      //console.log("1X", ref.current.position.x);
      ref.current.position.x += 0.01;
      if (ref.current.position.x > 4 && ref.current.rotation.y < 22.5) {
        ref.current.rotation.y += 0.01;
      }
    } else if (ref.current.position.x > -10 && ref.current.rotation.y > 22) {
      //console.log("2Y", ref.current.rotation.y);
      //console.log("2X", ref.current.position.x);
      ref.current.position.x -= 0.01;
      if (ref.current.position.x < -3 && ref.current.rotation.y > 0.1) {
        ref.current.rotation.y -= 0.01;
      }
    } */

    const speed = 0.01;
    const limitR = 5;

    if (Math.abs(sharkRef.current.position.x) >= limitR) {
      sharkRef.current.position.x = Math.sign(sharkRef.current.position.x) * limitR;
    }

    sharkRef.current.position.x += speed;
  });

  return (
    <mesh {...props} ref={sharkRef}>
      <primitive object={scene} />
    </mesh>
  );
}
