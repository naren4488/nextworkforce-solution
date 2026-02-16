import { type ReactNode } from "react"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/lib/utils"

type AnimateInType = "heading" | "cta" | "block"

const classMap: Record<AnimateInType, string> = {
  heading: "animate-scroll-heading",
  cta: "animate-scroll-cta",
  block: "animate-scroll-block",
}

type AnimateInProps = {
  type: AnimateInType
  children: ReactNode
  className?: string
}

export function AnimateIn({ type, children, className }: AnimateInProps) {
  const { ref, inView } = useInView()
  const animateClass = classMap[type]
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(animateClass, inView && "in-view", className)}
    >
      {children}
    </div>
  )
}
