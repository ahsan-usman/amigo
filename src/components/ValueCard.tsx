import { useInView } from "../hooks/useInView";

export function ValueCard({ accentFront, accentBack, iconBgFront, icon, num, title, text, delay = 0 }: {
  accentFront: string; accentBack: string; iconBgFront: string; icon: string;
  num: string; title: string; text: string; delay?: number;
}) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="w-full lg:flex-1 h-[260px] relative"
      style={{
        perspective: "1000px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {/* flip inner */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "rotateY(180deg)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "rotateY(0deg)"; }}
      >
        {/* FRONT — light card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0px_8px_24px_-4px_rgba(18,52,67,0.07)] bg-white border border-[#dce3e3] flex flex-col items-start"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-1 w-full shrink-0" style={{ background: accentFront }} />
          <div className="flex flex-1 flex-col gap-5 items-start p-7 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center rounded-[10px] shrink-0 size-11" style={{ background: iconBgFront }}>
                <img alt="" className="size-[22px]" src={icon} />
              </div>
              <p className="font-['Lora:Bold'] font-bold leading-none text-5xl whitespace-nowrap" style={{ color: "rgba(5,101,143,0.10)" }}>{num}</p>
            </div>
            <div className="flex flex-col gap-2.5 items-start w-full">
              <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-[22px]">{title}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-sm">{text}</p>
            </div>
          </div>
        </div>

        {/* BACK — dark navy card */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0px_16px_40px_-8px_rgba(7,58,85,0.35)] flex flex-col items-start"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#07668C" }}
        >
          <div className="h-1 w-full shrink-0" style={{ background: accentBack }} />
          <div className="flex flex-1 flex-col gap-5 items-start p-7 w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center rounded-[10px] shrink-0 size-11" style={{ background: "rgba(255,255,255,0.10)" }}>
                <img alt="" className="size-[22px] brightness-0 invert" src={icon} />
              </div>
              <p className="font-['Lora:Bold'] font-bold leading-none text-5xl whitespace-nowrap" style={{ color: "rgba(255,255,255,0.09)" }}>{num}</p>
            </div>
            <div className="flex flex-col gap-3 items-start w-full">
              <p className="font-['Lora:Bold'] font-bold text-white text-[22px]">{title}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#d5e4ea] text-sm">{text}</p>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-px flex-1 bg-[rgba(255,255,255,0.15)]" />
                <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-[11px] uppercase tracking-widest">Our value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}