import { useInView } from "../hooks/useInView"
import { useCountUp } from "../hooks/useCountUp"
import { useTranslation } from "react-i18next"
import { stats } from "../constants/data"

function StatTile({
  id,
  target,
  suffix,
  active,
  index,
  total,
}: {
  id: string
  target: number
  suffix: string
  active: boolean
  index: number
  total: number
}) {
  const { t } = useTranslation()
  const count = useCountUp(target, 1600 + index * 100, active)
  const display = count >= 1000 ? count.toLocaleString() : count

  const isLast = index === total - 1
  const isLeftCol = index % 2 === 0

  return (
    <div
      className={`relative flex flex-1 flex-col gap-1 items-start lg:items-start justify-center py-8 lg:py-6 px-4 md:px-8 lg:px-12 w-full border-white/20 
        ${isLast ? "col-span-2 items-center text-center lg:items-start lg:text-left" : ""} 
        ${isLeftCol && !isLast ? "border-r" : ""} 
        ${!isLast ? "border-b" : ""}
        lg:border-b-0 lg:border-r lg:last:border-r-0`}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <p
        className={`font-['Lora:Bold'] font-bold leading-none tabular-nums text-[#45c3f5] whitespace-nowrap ${isLast ? 'text-center lg:text-left w-full' : ''}`}
        style={{ fontSize: "clamp(26px,2.5vw,36px)" }}
      >
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className={`font-['Inter:Regular'] font-medium leading-[1.4] text-white/80 text-[11px] md:text-xs uppercase tracking-widest mt-2 ${isLast ? 'text-center lg:text-left w-full' : ''}`}>
        {t(`stats.${id}`)}
      </p>
    </div>
  )
}

export function StatsSection() {
  const { ref, inView } = useInView(0.2)

  return (
    <div className="bg-[#0d4f75] border-t border-white/10 w-full py-2 lg:py-6" ref={ref}>
      <div
        className="grid grid-cols-2 lg:flex lg:flex-row lg:items-center max-w-[1600px] mx-auto lg:px-12 w-full"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {stats.map((s, i) => (
          <StatTile key={s.label} {...s} active={inView} index={i} total={stats.length} />
        ))}
      </div>
    </div>
  )
}
