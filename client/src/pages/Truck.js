import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

export default function Truck({ color, ...props }) {
    const { nodes, materials } = useGLTF('/truck.gltf')

    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.truck.geometry} material={materials.truck} material-envMapIntensity={0.8} >
            <meshStandardMaterial
                color={color}
                aoMap={materials.mesh.aoMap}
                normalMap={materials.mesh.normalMap}
                normalMap-encoding={THREE.LinearEncoding}
                roughnessMap={materials.mesh.roughnessMap}
                metalnessMap={materials.mesh.metalnessMap}
                envMapIntensity={0.8}
            />
            </mesh>
      
        </group>

    )
}

useGLTF.preload('/truck.gltf')