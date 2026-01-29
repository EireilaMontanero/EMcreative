'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Fluids from './Fluids'

export default function Scene() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-black">
            <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Fluids />
                </Suspense>
            </Canvas>
        </div>
    )
}
