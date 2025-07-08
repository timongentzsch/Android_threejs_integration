/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

import MODEL from '@/assets/DamagedHelmet.gltf';
import BACKGROUND from '@/assets/royal_esplanade_1k.hdr'


let camera, scene, model, renderer;

init();
render();

function init() {

  
  const container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.25, 20 );
  camera.position.set( - 1.8, 0.6, 2.7 );

  scene = new THREE.Scene();

  new RGBELoader()
    .load( BACKGROUND, function ( texture ) {

      texture.mapping = THREE.EquirectangularReflectionMapping;

      scene.background = texture;
      scene.environment = texture;

      render();

      // model

      const loader = new GLTFLoader();
      loader.load( MODEL, function ( gltf ) {

        model = gltf.scene
        scene.add( model );
        render();

      } );

    } );

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild( renderer.domElement );

  const controls = new OrbitControls( camera, renderer.domElement );
  // controls.addEventListener( 'change', render ); // use if there is no animation loop
  setTimeout(render, 3000);
  controls.minDistance = 2;
  controls.maxDistance = 10;
  controls.target.set( 0, 0, - 0.2 );
  controls.update();

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  render();

}

//

function render() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  if (model) {
    model.rotation.y += 0.01;
}
}

// dom
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
