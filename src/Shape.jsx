import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import customImage from "./assets/text.png";

const Shape = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const height = window.innerHeight * 1;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / height,
      0.1,
      1000
    );

    scene.background = new THREE.Color("#4324FB");

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 1;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, height);
    renderer.setPixelRatio(window.devicePixelRatio); // test

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(2, 1, 30, 200);

    const loader = new THREE.TextureLoader();
    const texture = loader.load(customImage);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const shape = new THREE.Mesh(geometry, material);
    // shape.scale.set(1.1, 1.1, 1.1); // Adjust scale values as needed

    scene.add(shape);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1); // image repeat

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(5, 5, 5);
    // scene.add(pointLight);

    // texture.minFilter = THREE.LinearMipmapLinearFilter;
    // texture.magFilter = THREE.LinearFilter;
    // texture.generateMipmaps = true;
    // texture.needsUpdate = true; // Ensure the texture is updated with these settings

    camera.position.z = 5;

    camera.fov = 75; // Adjust FOV to change how much of the scene is visible
    camera.zoom = 1.8; // Adjust zoom to bring the torus closer or farther away
    camera.updateProjectionMatrix(); // Always update the projection matrix after changing camera properties

    const animate = () => {
      requestAnimationFrame(animate);

      shape.rotation.x += 0.01;
      shape.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default Shape;
