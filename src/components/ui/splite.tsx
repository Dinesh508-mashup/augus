import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export function SplineSceneBasic() {
  const splineRef = useRef<any>()

  useEffect(() => {
    if (splineRef.current) {
      // You can add any initialization logic here
    }
  }, [])

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Spline
        ref={splineRef}
        scene="https://prod.spline.design/your-scene-url/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
} 