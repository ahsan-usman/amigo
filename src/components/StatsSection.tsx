import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { useTranslation } from "react-i18next";
import { stats } from "../constants/data";

function StatTile({ id, icon, target, suffix, label, accent, highlight, active, index }: {
  id: string; icon: string; target: number; suffix: string; label: string; accent: string; highlight: boolean; active: boolean; index: number;
}) {
  const { t } = useTranslation();
  const count = useCountUp(target, 1600 + index * 100, active);
  const display = count >= 1000 ? count.toLocaleString() : count;
  return (
    <div
      className="relative flex flex-1 flex-col gap-4 items-start justify-center py-8 px-7"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div
        className="flex items-center justify-center size-11 rounded-xl"
        style={{ background: highlight ? `${accent}22` : "#f0f5f7" }}
      >
        <img alt="" className="size-6" src={icon} />
      </div>

      <div className="flex flex-col gap-1">
        <p
          className="font-['Lora:Bold'] font-bold leading-none tabular-nums"
          style={{ fontSize: "clamp(26px,2.2vw,36px)", color: highlight ? accent : "#17242a" }}
        >
          {display.toLocaleString()}{suffix}
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[1.4] text-[#47545a] text-[13px]">{t(`stats.${id}`)}</p>
      </div>
    </div>
  );
}

export function StatsSection() {
  const { ref, inView } = useInView(0.2);
  const { t } = useTranslation();
  return (
    <div className="bg-[#faf7f2] flex flex-col items-start pt-8 pb-8 px-6 md:px-12 lg:px-20 w-full">
      <div
        ref={ref}
        className="bg-white overflow-hidden rounded-2xl shadow-[0px_20px_60px_-12px_rgba(18,52,67,0.14)] w-full"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* top accent stripe */}
        <div className="h-1 w-full bg-gradient-to-r rtl:bg-gradient-to-l from-[#07668C] via-[#07668c] to-[#f0a23a]" />

        <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#e8eeef]">
          {stats.map((s, i) => (
            <StatTile key={s.label} {...s} active={inView} index={i} />
          ))}
        </div>

        {/* bottom label */}
        <div className="border-t border-[#f0f4f5] px-7 py-3 flex items-center gap-2">
          <div className="size-1.5 rounded-full bg-[#f0a23a] animate-pulse" />
          <p className="font-['Inter:Semi_Bold'] font-semibold text-[#748087] text-[11px] uppercase tracking-widest">
            {t('stats.live_figures')}
          </p>
        </div>
      </div>
    </div>
  );
}