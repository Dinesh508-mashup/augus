"use client"

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <span className="inline-block px-3  w-1/2 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30 text-sm font-semibold mb-4">
            🚀   Introducing Professional AI Agents
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Smart AI Agents Built for <span className="text-blue-400">Your Work</span> — Not Just Work in General
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-lg">
            Say goodbye to generic AI tools. Augus delivers profession-specific agents for doctors, developers, HRs, freelancers & more—each built to tackle your unique daily tasks.
          </p>
          <button className="px-6 py-2 rounded-lg bg-blue-600 w-2/6  hover:bg-blue-700 text-white font-semibold text-base transition-colors">
            Watch Demo
          </button>
        </div>
        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
} 