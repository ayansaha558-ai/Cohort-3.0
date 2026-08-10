import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const Star = () => {
  const starRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(starRef.current, 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
  }, [])

  return (
    <section ref={starRef} className="relative min-h-screen w-full bg-[#080808] text-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">Star Section</h2>
        <p className="text-white/50">Your next section content here</p>
      </div>
    </section>
  )
}

export default Star