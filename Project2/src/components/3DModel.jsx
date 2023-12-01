import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';
//import {primitive} from '@react-three/fiber';
import {Canvas} from '@react-three/fiber';
import './3DModel.css';

const ModelCanvas = ({scale}) =>{
    const gltf = useLoader(GLTFLoader, "../src/assets/models/solarSystem/scene.gltf")
    const modelRef = useRef();

    return <primitive object={gltf.scene} ref={modelRef} scale={scale}/>;
    
};

export default ModelCanvas;