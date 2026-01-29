'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const fluidVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

const fluidFragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
varying vec2 vUv;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  return 130.0 * dot(m, vec3( dot(x0,p.x), dot(x12.xy,p.y), dot(x12.zw,p.z) ));
}

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st.x *= uResolution.x / uResolution.y;
  
  float time = uTime * 0.1; // Slower speed for calm aesthetic
  
  // Soft warping
  vec2 q = vec2(0.);
  q.x = snoise(st + vec2(time));
  q.y = snoise(st + vec2(time + 1.));
  
  vec2 r = vec2(0.);
  r.x = snoise(st + 1.0*q + vec2(1.7,9.2)+ 0.15*time);
  r.y = snoise(st + 1.0*q + vec2(8.3,2.8)+ 0.126*time);
  
  float f = snoise(st + r);
  
  // Palette (Aesthetic / Pastel / Dreamy)
  // Base: Soft White/Cream
  vec3 color = mix(vec3(0.98, 0.94, 0.90), vec3(1.0, 0.95, 0.95), clamp((f*f)*4.0, 0.0, 1.0));
  
  // Accents: Soft Pink & Lavender
  color = mix(color, vec3(0.96, 0.80, 0.85), clamp(length(q), 0.0, 1.0)); // Pink
  color = mix(color, vec3(0.85, 0.85, 1.0), clamp(length(r.x), 0.0, 1.0)); // Lavender
  
  // Mouse interaction (Soft glow)
  float dist = distance(st, uMouse * vec2(uResolution.x/uResolution.y, 1.0));
  float mouseEffect = smoothstep(0.4, 0.0, dist);
  color += vec3(0.1, 0.05, 0.1) * mouseEffect * 0.1; // Subtle darken on mouse

  // Gain/Noise (Film grain effect)
  float noise = fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453);
  color += noise * 0.03;

  gl_FragColor = vec4(color, 1.0);
}
`

export default function Fluids() {
    const mesh = useRef<THREE.Mesh>(null)

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(1, 1) },
            uMouse: { value: new THREE.Vector2(0, 0) },
        }),
        []
    )

    useFrame((state) => {
        if (mesh.current) {
            const material = mesh.current.material as THREE.ShaderMaterial
            material.uniforms.uTime.value = state.clock.getElapsedTime()
            material.uniforms.uResolution.value.set(state.size.width, state.size.height)
            material.uniforms.uMouse.value.set((state.pointer.x + 1) / 2, (state.pointer.y + 1) / 2)
        }
    })

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                fragmentShader={fluidFragmentShader}
                vertexShader={fluidVertexShader}
                uniforms={uniforms}
                depthWrite={false}
                depthTest={false}
            />
        </mesh>
    )
}
