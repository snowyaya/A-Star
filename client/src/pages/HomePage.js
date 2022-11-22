import { React, Suspense } from "react"
import { useGLTF, OrbitControls, Stage, BakeShadows } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Shoe from '../pages/Shoe'
import Truck from '../pages/Truck'

export default function HomePage() {

  return (
    
    <>
      <h1>HomePage</h1>
    </>
    
    // <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
    //   <color args={['#282A3A']} attach="background" />
    //   <Suspense fallback={null}>
    //     <Stage environment="city" intensity={0.6}> 
    //       <Shoe color="tomato" position={[0, 0, 0]} />
    //       <Shoe color="orange" scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
          
    //     </Stage>
    //     <BakeShadows />
    //   </Suspense>
    //   <OrbitControls autoRotate />
    // </Canvas>

    /* Display the 3D model */
    // <Canvas>
    //   <color args={['#282A3A']} attach="background" />
    //   <OrbitControls makeDefault />

    //   <mesh>
    //       <boxGeometry />
    //       <meshNormalMaterial />
    //   </mesh>
    // </Canvas>
  )
}

// class HomePage extends React.Component {
//   render() {
//     const car = useGLTF('/scene.gltf')
//     return (
//       // <div>
//       //   <h1>Home Page</h1>
//       // </div>

//       <Canvas>
//         <color args={['#282A3A']} attach="background" />
//         <OrbitControls makeDefault />

//         <mesh>
//           <boxGeometry />
//           <meshNormalMaterial />
//         </mesh>
//         <primitive object={car.scene} />
//       </Canvas>
//     )
//   }
// }

// export default HomePage