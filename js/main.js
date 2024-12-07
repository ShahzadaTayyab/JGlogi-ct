import * as THREE from 'https://unpkg.com/three@0.151.3/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.151.3/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, containerModel;

init();
animate();

function init() {
  const canvas = document.getElementById('containerCanvas');

  // Create scene
  scene = new THREE.Scene();

  // Camera setup
  camera = new THREE.PerspectiveCamera(
    50,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  // Load the GLTF model
  const loader = new GLTFLoader();
  loader.load(
    'models/container.glb',
    (gltf) => {
      containerModel = gltf.scene;
      scene.add(containerModel);
      containerModel.rotation.y = Math.PI / 4;
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );
}

function animate() {
  requestAnimationFrame(animate);
  if (containerModel) {
    containerModel.rotation.y += 0.005; // slow rotation
  }
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  const canvas = document.getElementById('containerCanvas');
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
});
