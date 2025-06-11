"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function CardSpotlightDemo() {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative h-[400px] w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-8"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative h-full w-full">
        <h2 className="text-3xl font-bold text-white mb-4">Interactive Spotlight Card</h2>
        <p className="text-gray-300">
          Move your mouse over this card to see the spotlight effect. This component creates an engaging
          interactive experience with a dynamic spotlight that follows your cursor.
        </p>
      </div>
    </div>
  )
} 