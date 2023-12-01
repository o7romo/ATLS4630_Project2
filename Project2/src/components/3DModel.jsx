import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader';
//import {primitive} from '@react-three/fiber';
import {Canvas} from '@react-three/fiber';

const ModelCanvas = () =>{
    const gltf = useLoader(GLTFLoader, "../src/assets/models/solarSystem/scene.gltf")
    const modelRef = useRef();

    return <primitive object={gltf.scene} ref={modelRef}/>;

};

export default ModelCanvas;