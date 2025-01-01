import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const Scene = ({ scrollProgress }) => {
  return (
    <Canvas className='fixed -top-40 w-full'>
      <Model scrollProgress={scrollProgress} />
    </Canvas>
  );
};

export default Scene;