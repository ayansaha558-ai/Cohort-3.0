import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import ayanIdImage from "../assets/ayanId.jpg";

extend({ MeshLineGeometry, MeshLineMaterial });

const BandCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
      <Suspense fallback={null}>
        <Canvas
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
          camera={{ position: isMobile ? [0, 0, 15] : [0, 0, 13], fov: isMobile ? 32 : 25 }}
          style={{ background: "transparent", width: "100%", height: "100%", pointerEvents: "auto", touchAction: "none" }}
        >
          <ambientLight intensity={1.5} />
          <Physics interpolate gravity={[0, -25, 0]} timeStep={1 / 60}>
            <Band isMobile={isMobile} />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      </Suspense>
    </div>
  );
};

function Band({ isMobile, maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(null);
  const fixed = useRef(null);
  const j1 = useRef(null);
  const j2 = useRef(null);
  const j3 = useRef(null);
  const card = useRef(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [imageTexture, setImageTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(ayanIdImage, (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      setImageTexture(texture);
    });
  }, []);

  const { width, height } = useThree((state) => state.size);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );

  const [dragged, drag] = useState(null);
  const [hovered, hover] = useState(false);
  const canDrag = true;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 0.9, 0]]);

  useEffect(() => {
    if (hovered && canDrag) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged !== null && card.current && canDrag) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());

      const newX = vec.x - dragged.x;
      let newY = vec.y - dragged.y;

      if (isMobile) {
        vec.multiplyScalar(0.92);
      }

      const limit = isMobile ? -0.05 : -0.2;

      if (state.pointer.y < limit) {
        newY = card.current.translation().y;
      }

      card.current.setNextKinematicTranslation({
        x: newX,
        y: newY,
        z: 0,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }

        const d = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));

        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + d * (maxSpeed - minSpeed))
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());

      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(32));
      }

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());

      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z,
      });
    }
  });

  curve.curveType = "chordal";

  // Smaller card dimensions
  const cardWidth = 1.2;   // Was 1.6
  const cardHeight = 1.7;  // Was 2.25

  return (
    <>
      <group position={isMobile ? [0.8, 2.5, 0] : [2.5, 3, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.4, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[0.8, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody position={[1.2, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.08]} />
        </RigidBody>
        <RigidBody
          position={[1.6, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[cardWidth / 2, cardHeight / 2, 0.01]} />
          <group
            scale={isMobile ? 1.5 : 2.0}
            position={[0, -0.9, -0.03]}
            onPointerOver={() => canDrag && hover(true)}
            onPointerOut={() => canDrag && hover(false)}
            onPointerUp={(e) => {
              if (!canDrag) return;
              e.stopPropagation();
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              if (!canDrag) return;
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {/* Card with ayanId.jpg */}
            <mesh>
              <planeGeometry args={[cardWidth, cardHeight]} />
              <meshPhysicalMaterial
                map={imageTexture}
                roughness={0.3}
                metalness={0.1}
                clearcoat={1}
                clearcoatRoughness={0.12}
              />
            </mesh>

            {/* Metallic Clip - smaller */}
            <mesh position={[0, cardHeight / 2 + 0.05, 0.02]}>
              <boxGeometry args={[0.35, 0.07, 0.03]} />
              <meshStandardMaterial metalness={0.9} roughness={0.1} color="#e2e8f0" />
            </mesh>

            {/* Clamp Ring - smaller */}
            <mesh position={[0, cardHeight / 2 + 0.1, 0.04]}>
              <torusGeometry args={[0.05, 0.012, 8, 16]} />
              <meshStandardMaterial metalness={0.9} roughness={0.1} color="#cbd5e1" />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Band/Lanyard */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          transparent
          opacity={0.9}
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={imageTexture}
          repeat={[-3, 1]}
          lineWidth={0.8}
        />
      </mesh>
    </>
  );
}

export default BandCard;