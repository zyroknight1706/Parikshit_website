// CANSATModelViewer.jsx
"use client";

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const CANSATModelViewer = ({ modelPath = '/models/cansat_sample.glb' }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.set(0, 0, 5);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 10;

    // Load the GLTF model
    const loader = new GLTFLoader();
    
    loader.load(
      modelPath,
      (gltf) => {
        // Center the model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);
        
        // Scale model to fit view
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        gltf.scene.scale.set(scale, scale, scale);
        
        scene.add(gltf.scene);
        setLoading(false);
      },
      (progress) => {
        const progressPercentage = (progress.loaded / progress.total) * 100;
        setLoadingProgress(progressPercentage);
      },
      (error) => {
        console.error('Error loading model:', error);
        setError('Failed to load 3D model. Please try again later.');
        setLoading(false);
      }
    );

    // Fallback model if the real model fails to load
    if (error) {
      // Create a simple 3D representation of a CanSat (cylindrical shape)
      const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
      const material = new THREE.MeshStandardMaterial({ 
        color: 0x1a75ff,
        metalness: 0.7,
        roughness: 0.2
      });
      const cansat = new THREE.Mesh(geometry, material);
      scene.add(cansat);
    }

    // Add grid for reference
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose of Three.js resources
      renderer.dispose();
      controls.dispose();
    };
  }, [modelPath, error]);

  return (
    <div className="cansat-model-container">
      <div 
        ref={containerRef} 
        style={{ 
          width: '100%', 
          height: '400px', 
          borderRadius: '10px', 
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
        }}
      >
        {loading && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 10
          }}>
            <div style={{marginBottom: '1rem'}}>Loading 3D Model... {Math.round(loadingProgress)}%</div>
            <div style={{
              width: '70%',
              height: '8px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${loadingProgress}%`,
                height: '100%',
                backgroundColor: '#007bff',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>
        )}
        {error && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'red',
            padding: '2rem',
            zIndex: 10
          }}>
            {error}
          </div>
        )}
      </div>
      <div style={{
        marginTop: '1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        Interactive 3D Model: Click and drag to rotate, scroll to zoom
      </div>
    </div>
  );
};

export default CANSATModelViewer;