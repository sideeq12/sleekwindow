import { useControls } from 'leva';
import React, {useRef} from 'react'
import { fragment, vertex } from './shader';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import { transform } from 'framer-motion';

const Model = ({scrollProgress}) => {
  // const {amplitude , wavelength } = useControls({
  //   amplitude : { value : 0.25, min : 0, max : 1.5, step : 0.05},
  //   wavelength : { value : 1, min : 0, max : 20, step : 0.1}
  // })
  const {viewport} = useThree();
  const texture =useTexture("/images/home.jpg");
const {width, height } = texture.image
  const plane = useRef();
  const scale = useAspect( width, height , 0.5)

// creating uniforms inorder to pass the valuie to glsl
  const uniforms  = useRef({
    uTexture : { value :texture},
    uTime :{ value : 0},
    uAmplitude : {value : 0.25},
    uWavelength : {value : 14.2}
  })

  useFrame(()=>{ 

    const scaleX = transform(scrollProgress.get(), [0,1], [scale[1],  viewport.width])
    const scaleY = transform(scrollProgress.get(), [0,1], [scale[1],  viewport.height])
    plane.current.scale.x = scaleX;
    plane.current.scale.y = scaleY;
    plane.current.material.uniforms.uTime.value +=0.04;
    plane.current.material.uniforms.uWavelength.value = 14.2;
    plane.current.material.uniforms.uAmplitude.value = 0.25;
  })
  return (
    <mesh  ref={plane} scale={scale}>
      <planeGeometry args={[1,1,45,45]} />
      <shaderMaterial  
      vertexShader={vertex}
      fragmentShader={fragment}
      wireframe={false} 
      uniforms={uniforms.current}
      />

    </mesh>
  )
}

export default  Model;

