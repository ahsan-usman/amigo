import { useState, useEffect, useRef } from "react";

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const assetPathPrefix = "/assets";
const imgHero = `${assetPathPrefix}/e3a2e.png`;
const imgLogoArtwork = `${assetPathPrefix}/fc9a6.png`;
const imgEggQualityPhotography = `${assetPathPrefix}/64cb4.png`;
const imgHealthyChicksPhotography = `${assetPathPrefix}/40747.png`;
const imgFeedPhotography = `${assetPathPrefix}/86b2c.png`;
const imgPhotography = `${assetPathPrefix}/4786e.png`;
const imgPhotography1 = `${assetPathPrefix}/1b1a6.png`;
const imgPhotography2 = `${assetPathPrefix}/ae0e6.png`;
const imgPhotography3 = `${assetPathPrefix}/33217.png`;
const imgPhotography4 = `${assetPathPrefix}/0f430.png`;
const imgMap = `${assetPathPrefix}/61f21.png`;
const imgLogoArtwork1 = `${assetPathPrefix}/acaf0.png`;
const imgArrowUpRight = `${assetPathPrefix}/5e74a.svg`;
const imgArrowUpRight1 = `${assetPathPrefix}/6b1e4.svg`;
const imgEgg = `${assetPathPrefix}/25410.svg`;
const imgWarehouse = `${assetPathPrefix}/426b3.svg`;
const imgWheat = `${assetPathPrefix}/0d704.svg`;
const imgBird = `${assetPathPrefix}/1466e.svg`;
const imgCalendarRange = `${assetPathPrefix}/3a9b0.svg`;
const imgCircleCheck = `${assetPathPrefix}/cb810.svg`;
const imgEye = `${assetPathPrefix}/f7e1d.svg`;
const imgShieldCheck = `${assetPathPrefix}/63828.svg`;
const imgHeartPulse = `${assetPathPrefix}/676ce.svg`;
const imgSettings = `${assetPathPrefix}/c272e.svg`;
const imgNetwork = `${assetPathPrefix}/82098.svg`;
const imgHandshake = `${assetPathPrefix}/9b6d5.svg`;
const imgShield = `${assetPathPrefix}/3fb24.svg`;
const imgStar = `${assetPathPrefix}/edd7c.svg`;
const imgHeart = `${assetPathPrefix}/f26b2.svg`;
const imgZap = `${assetPathPrefix}/8a2e0.svg`;
const imgLeaf = `${assetPathPrefix}/590ea.svg`;
const imgHandshake1 = `${assetPathPrefix}/a200b.svg`;
const imgShield1 = `${assetPathPrefix}/5efbc.svg`;
const imgStethoscope = `${assetPathPrefix}/66c7d.svg`;
const imgFlaskConical = `${assetPathPrefix}/23942.svg`;
const imgScanBarcode = `${assetPathPrefix}/2d641.svg`;
const imgChevronDown = `${assetPathPrefix}/95364.svg`;
const imgMapPin = `${assetPathPrefix}/93f46.svg`;
const imgMail = `${assetPathPrefix}/60bd1.svg`;
const imgPhone = `${assetPathPrefix}/19227.svg`;
const imgSmartphone = `${assetPathPrefix}/c7623.svg`;
const imgRoute = `${assetPathPrefix}/d85f8.svg`;
const imgMessageCircle = `${assetPathPrefix}/30fbf.svg`;
const imgMessageCircle1 = `${assetPathPrefix}/47a51.svg`;
const imgArrowUp = `${assetPathPrefix}/77693.svg`;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const valueCards = [
  { accentFront: "#073a55", accentBack: "#f0a23a", iconBgFront: "#e6f2f5", icon: imgShield, num: "01", title: "Integrity", text: "Conducting all operations with honesty, transparency, and high ethical responsibility." },
  { accentFront: "#f0a23a", accentBack: "#f0a23a", iconBgFront: "#fff1d8", icon: imgStar, num: "02", title: "Quality Excellence", text: "Upholding uncompromising standards across flock management, feed, and distribution." },
  { accentFront: "#05658f", accentBack: "#f0a23a", iconBgFront: "#e6f2f5", icon: imgHeart, num: "03", title: "Animal Welfare", text: "Prioritizing bird health and comfort through responsible, veterinarian-supervised management." },
  { accentFront: "#f0a23a", accentBack: "#f0a23a", iconBgFront: "#fff1d8", icon: imgZap, num: "04", title: "Innovation", text: "Continuously upgrading infrastructure, production methods, and technological systems." },
  { accentFront: "#073a55", accentBack: "#f0a23a", iconBgFront: "#e6f2f5", icon: imgLeaf, num: "05", title: "Sustainability", text: "Utilizing natural resources responsibly to minimize environmental impact." },
  { accentFront: "#05658f", accentBack: "#f0a23a", iconBgFront: "#e6f2f5", icon: imgHandshake1, num: "06", title: "Customer Commitment", text: "Delivering consistent product quality, competitive value, and dependable logistics." },
];

function ValueCard({ accentFront, accentBack, iconBgFront, icon, num, title, text, delay = 0 }: {
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
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "#073a55" }}
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

const stats = [
  { icon: imgEgg, target: 400000, suffix: "+", label: "Commercial layer birds", accent: "#05658f", highlight: false },
  { icon: imgWarehouse, target: 500000, suffix: "+", label: "Broiler capacity", accent: "#05658f", highlight: false },
  { icon: imgWheat, target: 1500, suffix: "+ MT", label: "Feed output / month", accent: "#f0a23a", highlight: true },
  { icon: imgBird, target: 500000, suffix: "+", label: "Commercial broiler breeders", accent: "#05658f", highlight: false },
  { icon: imgCalendarRange, target: 50, suffix: "+ Yrs", label: "Heritage since the 1970s", accent: "#073a55", highlight: false },
];

function StatTile({ icon, target, suffix, label, accent, highlight, active, index }: {
  icon: string; target: number; suffix: string; label: string; accent: string; highlight: boolean; active: boolean; index: number;
}) {
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
        <p className="font-['Inter:Regular'] font-normal leading-[1.4] text-[#47545a] text-[13px]">{label}</p>
      </div>
    </div>
  );
}

function StatsSection() {
  const { ref, inView } = useInView(0.2);
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
        <div className="h-1 w-full bg-gradient-to-r from-[#073a55] via-[#05658f] to-[#f0a23a]" />

        <div className="flex flex-col lg:flex-row items-stretch divide-y lg:divide-y-0 lg:divide-x divide-[#e8eeef]">
          {stats.map((s, i) => (
            <StatTile key={s.label} {...s} active={inView} index={i} />
          ))}
        </div>

        {/* bottom label */}
        <div className="border-t border-[#f0f4f5] px-7 py-3 flex items-center gap-2">
          <div className="size-1.5 rounded-full bg-[#f0a23a] animate-pulse" />
          <p className="font-['Inter:Semi_Bold'] font-semibold text-[#748087] text-[11px] uppercase tracking-widest">
            Live operational figures — Amigo Farms (Pvt.) Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}

const navLinks: { label: string; id: string }[] = [
  { label: "About", id: "about" },
  { label: "Heritage", id: "heritage" },
  { label: "Values", id: "values" },
  { label: "Operations", id: "operations" },
  { label: "Quality", id: "quality" },
  { label: "Contact Us", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function AmigoFarms() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", interest: "", message: "" });
  const [activeSection, setActiveSection] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Highlight active nav link on scroll
  useEffect(() => {
    const ids = navLinks.map((n) => n.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#faf7f2] flex flex-col items-start relative w-full min-h-screen">
      {/* Hero */}
      <div className="relative flex flex-col gap-6 w-full min-h-[100dvh] md:min-h-[800px] pb-24 pt-32 md:pt-44 px-6 md:px-16 lg:px-24 overflow-hidden items-start">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
          <div className="absolute bg-gradient-to-r from-[rgba(6,29,43,0.91)] inset-0 to-[82%] to-[rgba(9,39,56,0.13)] via-[50.84%] via-[rgba(9,39,56,0.61)]" />
        </div>

        {/* Header */}
        <div className="absolute bg-[rgba(255,255,255,0.98)] flex h-22 items-center justify-between left-0 right-0 top-0 px-6 md:px-16 shadow-[0px_4px_16px_0px_rgba(7,58,85,0.12)] z-10">
          <button onClick={scrollToTop} className="flex h-15 items-center justify-center rounded-lg shrink-0 w-32 md:w-40 overflow-hidden">
            <img alt="Amigo Farms" className="object-contain size-full" src={imgLogoArtwork} />
          </button>
          <nav className="flex gap-4 md:gap-6 items-center">
            <div className="hidden lg:flex gap-6 items-center">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`font-['Inter:Semi_Bold'] font-semibold text-sm whitespace-nowrap transition-colors ${
                    activeSection === id ? "text-[#05658f]" : "text-[#17242a] hover:text-[#05658f]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#f0a23a] border border-[#f0a23a] flex gap-2 md:gap-3 h-10 md:h-13 items-center justify-center px-4 md:px-6 rounded-full shrink-0 hover:bg-[#e8952e] transition-colors"
            >
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs md:text-sm whitespace-nowrap">Get In Touch</p>
              <img alt="" className="size-3 md:size-4" src={imgArrowUpRight} />
            </button>
          </nav>
        </div>

        {/* Hero content */}
        <div className="flex flex-col gap-6 items-start relative max-w-full lg:max-w-3xl w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">
            Heritage since the mid-1970s · Gujranwala, Pakistan
          </p>
          <p className="font-['Lora:Bold'] font-bold leading-[0.98] text-5xl md:text-[72px] text-white">
            Amigo Farms
          </p>
          <p className="font-['Inter:Bold'] font-bold leading-[1.4] text-[#f0a23a] text-lg md:text-xl">
            Amigo Layer Farms · Amigo Chicks · Amigo Feed Mill
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#edf5f7] text-sm md:text-base">
            Amigo Farms (Pvt.) Ltd. is a leading semi-integrated poultry enterprise supplying high-quality, hygienic, and safe table eggs, day-old chicks, and poultry feed across Pakistan. Driven by modern farming practices, strict biosecurity, and a deep-rooted commitment to national food security, we consistently set benchmark standards in operational excellence and animal welfare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start w-full sm:w-auto">
            <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Get In Touch</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
            <button onClick={() => scrollTo("heritage")} className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,0.53)] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:border-white transition-colors">
              <p className="font-['Inter:Bold'] font-bold text-sm text-white whitespace-nowrap">Our Heritage</p>
              <img alt="" className="size-4" src={imgArrowUpRight1} />
            </button>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <StatsSection />

      {/* About Us */}
      <div id="about" className="bg-[#faf7f2] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 pt-12 pb-16 lg:pb-26 w-full">
        <FadeIn className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">
          <div className="flex flex-1 flex-col gap-6 items-start">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">About us</p>
              <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">A semi-integrated poultry network, built to last</p>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              Amigo Farms (Pvt.) Ltd. is a leading, semi-integrated poultry enterprise dedicated to supplying high-quality, hygienic, and safe table eggs, day-old chicks, and poultry feed across Pakistan.
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              Our heritage traces back to the mid-1970s. With over five decades of experience, we have built deep industry expertise, robust operational capabilities, and an enduring reputation grounded in trust and quality.
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              {`Today, Amigo Layer Farms maintains a flock of over 400,000 commercial layer birds, making us one of the region's primary egg producers. Through continuous investment in automated climate-controlled housing, scientifically formulated feed, and veterinary management, we deliver fresh, nutritious eggs to wholesalers, retailers, food service providers, and consumers nationwide.`}
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 items-start">
            <div className="h-[330px] relative rounded-2xl w-full overflow-hidden">
              <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgEggQualityPhotography} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <div className="w-full sm:flex-1 h-[200px] relative rounded-2xl overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgHealthyChicksPhotography} />
              </div>
              <div className="w-full sm:flex-1 h-[200px] relative rounded-2xl overflow-hidden">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgFeedPhotography} />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Under one roof */}
        <FadeIn delay={100} className="w-full">
          <div className="bg-[#e6f2f5] flex flex-col md:flex-row gap-6 items-start p-6 md:p-8 rounded-2xl w-full">
            <div className="flex flex-col gap-2 items-start shrink-0 w-full md:w-[280px]">
              <p className="font-['Lora:Bold'] font-bold text-[#073a55] text-2xl whitespace-nowrap">Under one roof</p>
              <p className="font-['Inter:Regular'] font-normal text-[#47545a] text-sm">One coordinated network, quality controlled end to end.</p>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start">
              {[
                "Amigo Layer Farms: commercial table egg production",
                "Amigo Chicks: day-old broiler chick hatcheries",
                "Amigo Feed Mill: pellet feed for layer, breeder & broiler",
                "In-house distribution & logistics from farm to client",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center w-full">
                  <img alt="" className="size-5 shrink-0" src={imgCircleCheck} />
                  <p className="font-['Inter:Semi_Bold'] font-semibold text-[#17242a] text-sm flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-[#faf7f2] h-4 opacity-70 shrink-0 to-[#faf7f2] via-1/2 via-[#efe8dd] w-full" />

      {/* History & Heritage */}
      <div id="heritage" className="bg-white flex flex-col items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <FadeIn className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full">
          <div className="flex flex-col gap-8 items-start shrink-0 w-full lg:w-[420px]">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">{`History & heritage`}</p>
              <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Five decades of purposeful progress</p>
            </div>
            <div className="bg-[#073a55] flex flex-col gap-4 items-start p-6 md:p-8 rounded-2xl w-full">
              <p className="font-['Lora:Regular'] font-normal text-[#f0a23a] text-5xl whitespace-nowrap">"</p>
              <p className="font-['Lora:Bold'] font-bold leading-[1.25] text-white text-2xl md:text-[28px]">A Legacy Built on Vision, Quality, and Innovation.</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start">
            {[
              {
                era: "Mid-1970s",
                title: "The Early Foundation",
                text: `The story began with Mr. Sajjad Haider Rana, who started a modest backyard poultry venture. His entrepreneurial spirit led to expanding into commercial broiler and layer farming during the industry's early days in Pakistan, a leadership recognized when he was elected Chairman of the Pakistan Poultry Association (Punjab) in 1982–83. By the mid-1980s, the company established parent stock (PS) breeder farms and installed its first hatcheries, launching day-old broiler chicks under the iconic 'Ahsan Chicks' brand, a name that remains trusted by poultry farmers for over five decades.`,
                last: false,
              },
              {
                era: "1990s–2000s",
                title: "Expansion & Innovation",
                text: `The business strengthened its position in the poultry value chain by introducing layer breeder stock and importing one of Pakistan's earliest Grandparent (GP) broiler flocks, operated between 2000–2007. To ensure complete control over feed quality, Amigo Feeds was later established, developing specialized pellet feed tailored for internal breeder, layer, and broiler operations.`,
                last: false,
              },
              {
                era: "2004–Present",
                title: "The Next Generation & Modernization",
                text: `Under the leadership of Usman Anwar Rana, who joined in 2004, the enterprise entered a new era with the formal establishment of Amigo Farms (Pvt.) Ltd. Modernization became the central focus, integrating operations into a technology-driven system capable of meeting modern market demands. Today, Mr. Sajjad Haider Rana continues his agricultural legacy through his dairy venture, while his foundational vision inspires Amigo Farms' continued growth.`,
                last: true,
              },
            ].map(({ era, title, text, last }) => (
              <div key={era} className="flex gap-6 items-start w-full">
                <div className="flex flex-col gap-2 items-center self-stretch shrink-0 w-6">
                  <div className="bg-[#f0a23a] border-4 border-[#073a55] rounded-full shrink-0 size-4" />
                  {!last && <div className="bg-[#dce3e3] flex-1 min-h-[130px] w-0.5" />}
                </div>
                <div className="flex flex-1 flex-col gap-3 items-start pb-8">
                  <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">{era}</p>
                  <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">{title}</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Vision & Mission */}
      <div className="bg-[#e6f2f5] flex flex-col items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full"> {/* part of heritage */}
        <FadeIn className="flex flex-col lg:flex-row gap-6 items-start w-full">
          {/* Vision */}
          <div className="bg-[#073a55] flex flex-1 flex-col gap-8 items-start min-h-[auto] lg:min-h-[620px] p-8 md:p-12 rounded-2xl overflow-hidden">
            <img alt="" className="size-9" src={imgEye} />
            <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">Our vision</p>
            <p className="font-['Lora:Bold'] font-bold leading-[1.3] text-white text-3xl lg:text-[38px]">{`To be recognized as Pakistan's most trusted and innovative poultry farming enterprise, delivering superior-quality eggs and poultry products while advancing sustainable agricultural practices and strengthening national food security.`}</p>
          </div>

          {/* Mission */}
          <div className="bg-white flex flex-1 flex-col gap-6 items-start p-8 md:p-12 rounded-2xl overflow-hidden">
            <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">Our mission</p>
            {[
              { icon: imgShieldCheck, title: "Product Safety", text: "Produce safe, nutritious, high-quality eggs and healthy day-old chicks that consistently exceed customer expectations." },
              { icon: imgHeartPulse, title: "Flock Welfare", text: "Maintain the highest standards of poultry health, housing comfort, and biosecurity protocols." },
              { icon: imgSettings, title: "Modernization", text: "Adopt cutting-edge technologies and automated systems for maximum operational efficiency." },
              { icon: imgNetwork, title: "Supply Chain Impact", text: `Positively contribute to Pakistan's agricultural economy and food supply chain.` },
              { icon: imgHandshake, title: "Ethical Relationships", text: "Build long-lasting partnerships with customers, suppliers, and stakeholders rooted in integrity and reliability." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="border-[#dce3e3] border-b flex gap-4 items-start pb-4 w-full">
                <div className="bg-[#fff1d8] flex items-center justify-center rounded-lg shrink-0 size-[42px]">
                  <img alt="" className="size-[21px]" src={icon} />
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start">
                  <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-lg">{title}</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#47545a] text-sm">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Core Values */}
      <div id="values" className="bg-[#faf7f2] flex flex-col gap-10 lg:gap-16 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <FadeIn className="flex flex-col gap-4 items-start w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-[#f0a23a] h-[3px] rounded-sm shrink-0 w-8" />
            <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase whitespace-nowrap">Core values</p>
          </div>
          <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Six principles, one carton</p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">The standards behind every bird, every batch, and every delivery.</p>
        </FadeIn>

        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            {valueCards.slice(0, 3).map((card, i) => <ValueCard key={card.num} {...card} delay={i * 80} />)}
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            {valueCards.slice(3).map((card, i) => <ValueCard key={card.num} {...card} delay={i * 80} />)}
          </div>
        </div>

        {/* Values banner */}
        <div className="bg-[#073a55] flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-between px-6 md:px-10 py-8 rounded-2xl w-full">
          <div className="flex flex-1 flex-col gap-1.5 items-start">
            <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-[11px] uppercase">Our commitment</p>
            <p className="font-['Lora:Bold'] font-bold leading-[1.3] text-white text-xl md:text-[22px]">Every principle is lived daily — from the feed mill to the delivery van.</p>
          </div>
          <div className="flex flex-col gap-1 items-start md:items-end shrink-0">
            <p className="font-['Lora:Bold'] font-bold text-[#f0a23a] text-[40px]">50+</p>
            <p className="font-['Inter:Semi_Bold'] font-semibold text-[#d5e4ea] text-[13px]">Years of practice</p>
          </div>
        </div>
      </div>

      {/* Operations */}
      <div id="operations" className="bg-white flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">{`Operations & infrastructure`}</p>
          <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">A semi-integrated network across five verticals</p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">Control at every critical stage keeps quality measurable, welfare protected, and supply dependable.</p>
        </div>

        <div className="flex flex-col gap-6 items-start w-full">
          {/* Primary row */}
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            <div className="bg-white flex flex-1 flex-col h-auto lg:h-[590px] items-start rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
              <div className="h-[200px] md:h-[290px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotography} />
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start p-6 w-full">
                <div className="bg-[#fff1d8] flex items-start px-3 py-2 rounded-full shrink-0">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs whitespace-nowrap">~400,000 commercial layers</p>
                </div>
                <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">01 Commercial Layer Farming</p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#47545a] text-sm">Fully automated environmental control housing, automated egg collection, hygienic grading, and temperature-controlled storage.</p>
              </div>
            </div>
            <div className="bg-white flex flex-1 flex-col h-auto lg:h-[460px] items-start rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
              <div className="h-[160px] md:h-[190px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotography1} />
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start p-6 w-full">
                <div className="bg-[#fff1d8] flex items-start px-3 py-2 rounded-full shrink-0">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs whitespace-nowrap">~500,000 broiler capacity | 10 farm locations</p>
                </div>
                <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">{`02 Breeder & Broiler Farming`}</p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#47545a] text-sm">Environmentally controlled dark houses spread across 10 strategic farm locations, managed by specialized production teams using internal day-old chicks and feed.</p>
              </div>
            </div>
            <div className="bg-white flex flex-1 flex-col h-auto lg:h-[460px] items-start rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
              <div className="h-[160px] md:h-[190px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotography2} />
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start p-6 w-full">
                <div className="bg-[#fff1d8] flex items-start px-3 py-2 rounded-full shrink-0">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs whitespace-nowrap">Amigo Feed Mill, 1,500+ MT / month</p>
                </div>
                <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">03 Feed Milling</p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#47545a] text-sm">High-grade pellet feed formulated specifically for Layer, Breeder, and Broiler nutrition, produced on independent, company-owned land with in-house testing protocols.</p>
              </div>
            </div>
          </div>
          {/* Supporting row */}
          <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
            <div className="bg-white flex flex-1 flex-col h-auto lg:h-[460px] items-start rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
              <div className="h-[160px] md:h-[190px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotography3} />
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start p-6 w-full">
                <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">04 Hatchery Operations</p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#47545a] text-sm">Strategic multi-location hatcheries housing top-tier commercial equipment, supplying day-old chicks.</p>
              </div>
            </div>
            <div className="bg-white flex flex-1 flex-col h-auto lg:h-[460px] items-start rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
              <div className="h-[160px] md:h-[190px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgPhotography4} />
              </div>
              <div className="flex flex-1 flex-col gap-3 items-start p-6 w-full">
                <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">{`05 Distribution & Logistics`}</p>
                <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#47545a] text-sm">All marketing and sales operations are managed in-house to guarantee quality from farm to client, with a specialized delivery fleet for feed transport, plus temperature-regulated vans dedicated to day-old chick delivery, coordinated through the Marketing Desk at the Head Office in Gujranwala.</p>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => scrollTo("contact")} className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full shrink-0 hover:bg-[#e8952e] transition-colors">
          <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Get In Touch</p>
          <img alt="" className="size-4" src={imgArrowUpRight} />
        </button>
      </div>

      {/* Quality Assurance */}
      <div id="quality" className="bg-[#073a55] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">{`Quality assurance & biosecurity`}</p>
          <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-white text-3xl md:text-4xl lg:text-5xl">Trust, protected at every gate</p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#d5e4ea] text-base">Layered controls protect flock health, product safety, and every customer we serve.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
          {[
            { icon: imgShield1, title: "Strict Biosecurity Protocols", text: "Rigid farm-entry controls, vehicular sanitation, and strict disease prevention safeguards." },
            { icon: imgStethoscope, title: "Veterinary Supervision", text: "Ongoing health assessments, strict vaccination schedules, and specialized farm veterinarians." },
            { icon: imgFlaskConical, title: "Scientific Nutrition", text: "In-house laboratory analysis of raw ingredients and custom-formulated diets." },
            { icon: imgScanBarcode, title: "Hygienic Handling & Traceability", text: "Automated grading and comprehensive batch record-keeping for complete supply-chain accountability." },
          ].map(({ icon, title, text }) => (
            <div key={title} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.14)] flex flex-1 flex-col gap-4 items-start p-6 rounded-xl w-full">
              <img alt="" className="size-[30px]" src={icon} />
              <p className="font-['Lora:Bold'] font-bold text-white text-xl">{title}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#d5e4ea] text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Quote */}
      <div className="bg-[#05658f] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-12 lg:py-16 w-full">
        <p className="font-['Lora:Bold'] font-bold leading-[1.2] text-3xl md:text-4xl lg:text-[54px] text-center text-white w-full">
          "A Legacy Built on Vision, Quality, and Innovation, from a backyard poultry venture in the 1970s to a semi-integrated enterprise spanning layers, breeders, feed, and hatcheries."
        </p>
        <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-lg md:text-xl text-center w-full">
          Amigo Farms · Amigo Layer Farms · Amigo Chicks · Amigo Feed Mill
        </p>
        <div className="flex items-start justify-center w-full">
          <button onClick={() => scrollTo("contact")} className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
            <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Get In Touch</p>
            <img alt="" className="size-4" src={imgArrowUpRight} />
          </button>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-[#faf7f2] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#05658f] text-xs uppercase">Contact us</p>
          <p className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Start a conversation with our team</p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">Tell us what you need. Our Gujranwala team will connect you with the right department.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          {/* Contact form */}
          <div className="bg-white flex flex-1 flex-col gap-4 items-start p-6 md:p-8 rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              {[
                { label: "Name", key: "name" as const, placeholder: "Your full name" },
                { label: "Company", key: "company" as const, placeholder: "Company name" },
              ].map(({ label, key, placeholder }) => (
                <div key={key} className="flex w-full sm:flex-1 flex-col gap-2 items-start">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{label}</p>
                  <input
                    className="bg-white border border-[#dce3e3] flex h-13 items-center px-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#05658f] transition-colors"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              {[
                { label: "Phone", key: "phone" as const, placeholder: "+92 300 0000000" },
                { label: "Email", key: "email" as const, placeholder: "name@company.com" },
              ].map(({ label, key, placeholder }) => (
                <div key={key} className="flex w-full sm:flex-1 flex-col gap-2 items-start">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{label}</p>
                  <input
                    className="bg-white border border-[#dce3e3] flex h-13 items-center px-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#05658f] transition-colors"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{"I'm interested in"}</p>
              <div className="bg-white border border-[#dce3e3] flex h-13 items-center justify-between px-4 rounded-lg w-full relative">
                <select
                  className="appearance-none bg-transparent flex-1 font-['Inter:Regular'] text-sm text-[#748087] outline-none cursor-pointer"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                >
                  <option value="">Table Eggs · Day-Old Chicks · Poultry Feed · Other</option>
                  <option value="eggs">Table Eggs</option>
                  <option value="chicks">Day-Old Chicks</option>
                  <option value="feed">Poultry Feed</option>
                  <option value="other">Other</option>
                </select>
                <img alt="" className="size-[18px] shrink-0 pointer-events-none" src={imgChevronDown} />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">Message</p>
              <textarea
                className="bg-white border border-[#dce3e3] flex h-[120px] items-start p-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#05658f] transition-colors resize-none"
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Submit</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <div className="bg-[#073a55] flex flex-col gap-6 items-start p-6 md:p-8 rounded-2xl w-full">
              <p className="font-['Lora:Bold'] font-bold text-white text-2xl whitespace-normal md:whitespace-nowrap">Head Office · Gujranwala</p>
              {[
                { icon: imgMapPin, text: "G.T. Road, Ghakhar Mandi, District Gujranwala, Punjab." },
                { icon: imgMail, text: "amigofarmspvtltd@gmail.com" },
                { icon: imgPhone, text: "+92 55 3882472" },
                { icon: imgSmartphone, text: "+92 336 4688494" },
                { icon: imgRoute, text: "45 km from Lahore, Punjab, Pakistan" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 items-center w-full">
                  <img alt="" className="size-5 shrink-0" src={icon} />
                  <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#e6f1f4] text-sm flex-1">{text}</p>
                </div>
              ))}
              <button className="bg-[#20b75a] border border-[#dce3e3] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#1aa050] transition-colors">
                <img alt="" className="size-[18px]" src={imgMessageCircle} />
                <p className="font-['Inter:Bold'] font-bold text-sm text-white whitespace-nowrap">Chat on WhatsApp</p>
              </button>
            </div>

            <div className="flex flex-col h-[260px] items-end justify-end overflow-hidden p-6 relative rounded-2xl w-full">
              <img alt="" className="absolute inset-0 max-w-none object-cover rounded-2xl size-full" src={imgMap} />
              <div className="bg-white flex items-start px-4 py-3 relative rounded-lg shadow-[0px_8px_20px_-4px_rgba(0,28,43,0.2)] shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs whitespace-nowrap">Amigo Farms · G.T. Road</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-start w-full">
              {["Executive Board", "Marketing", "Purchasing", "Accounts", "Logistics", "Veterinary Operations"].map((dept) => (
                <div key={dept} className="bg-[#e6f2f5] flex items-start px-3 py-2 rounded-full shrink-0">
                  <p className="font-['Inter:Semi_Bold'] font-semibold text-[#073a55] text-xs whitespace-nowrap">{dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#052e43] flex flex-col gap-8 items-start overflow-hidden px-6 md:px-12 lg:px-20 py-12 lg:py-[72px] w-full">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start w-full">
          <div className="flex flex-col gap-4 items-start shrink-0 w-full lg:w-[320px]">
            <div className="bg-white flex h-16 items-center justify-center overflow-hidden p-1 rounded-lg shrink-0 w-44">
              <img alt="Amigo Farms" className="object-contain size-full" src={imgLogoArtwork1} />
            </div>
            <p className="font-['Lora:Regular'] font-normal leading-[1.4] text-white text-xl">Trusted poultry. Scientific care. Nourishing Pakistan since the 1970s.</p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-8 items-start w-full lg:flex-1">
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto whitespace-normal md:whitespace-nowrap">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase">Quick links</p>
              {navLinks.map(({ label, id }) => (
                <button key={id} onClick={() => scrollTo(id)} className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm hover:text-white transition-colors text-left">{label}</button>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase whitespace-nowrap">Contact</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#d5e4ea] text-sm">G.T. Road, Ghakhar Mandi, District Gujranwala, Punjab.</p>
              <p className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm">amigofarmspvtltd@gmail.com</p>
              <p className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm">+92 55 3882472 · +92 336 4688494</p>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase whitespace-nowrap">Departments</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#d5e4ea] text-sm">Executive Board · Marketing · Purchasing · Accounts · Logistics · Veterinary Operations</p>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.13)] h-px w-full" />
        <p className="font-['Inter:Regular'] font-normal text-[#9eb4bd] text-xs w-full">© 2026 Amigo Farms (Pvt.) Ltd. All rights reserved.</p>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bg-[#20b75a] flex items-center justify-center overflow-hidden right-6 rounded-full shadow-[0px_8px_20px_-4px_rgba(0,28,43,0.2)] size-14 bottom-24 cursor-pointer hover:bg-[#1aa050] transition-colors z-50">
        <img alt="WhatsApp" className="size-[26px]" src={imgMessageCircle1} />
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="fixed bg-white border border-[#dce3e3] flex items-center justify-center overflow-hidden right-6 rounded-full shadow-[0px_8px_20px_-4px_rgba(0,28,43,0.2)] size-12 bottom-8 cursor-pointer hover:bg-[#f5f5f5] transition-colors z-50"
      >
        <img alt="Back to top" className="size-[22px]" src={imgArrowUp} />
      </button>
    </div>
  );
}
