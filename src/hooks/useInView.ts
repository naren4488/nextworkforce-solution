import { useEffect, useRef, useState } from "react"

const defaultOptions: IntersectionObserverInit = {
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
}

export function useInView(options: Partial<IntersectionObserverInit> = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduceMotion) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { ...defaultOptions, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduceMotion, options.rootMargin, options.threshold])

  return { ref, inView }
}
