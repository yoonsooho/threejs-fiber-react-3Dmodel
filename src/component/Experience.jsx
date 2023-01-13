import React from "react"
import { OrbitControls } from "@react-three/drei"
import Dog from "./Scene"

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <Dog />
      </mesh>
    </>
  )
}

export default Experience
