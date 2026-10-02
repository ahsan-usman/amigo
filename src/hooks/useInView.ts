import { useState, useEffect, useRef } from "react"

export function useInView(threshold: number = 0) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold, rootMargin: "-5% 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}
