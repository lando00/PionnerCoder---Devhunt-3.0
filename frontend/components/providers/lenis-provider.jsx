"use client"

import { ReactLenis } from '@studio-freight/react-lenis'

export default function LenisProvider({children}) {

  return (
    <ReactLenis
    options={{
      lerp:0.08
    }}
    root
    >
      {children}
    </ReactLenis>
  )
}