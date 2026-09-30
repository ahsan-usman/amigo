import { useState, useEffect } from "react";
import { FadeIn } from "./components/FadeIn";
import { ValueCard } from "./components/ValueCard";
import { StatsSection } from "./components/StatsSection";
import { navLinks, valueCards } from "./constants/data";
import { 
  imgHero, imgLogoArtwork, imgEggQualityPhotography, imgHealthyChicksPhotography, 
  imgFeedPhotography, imgPhotography, imgPhotography1, imgPhotography2, imgPhotography3,
  imgCircleCheck, imgEye, imgShieldCheck, imgHeartPulse, 
  imgSettings, imgNetwork, imgHandshake, imgShield1, imgStethoscope, 
  imgFlaskConical, imgScanBarcode, imgChevronDown, imgMap, imgMapPin, imgMail, imgPhone, 
  imgSmartphone, imgRoute, imgMessageCircle, imgMessageCircle1, imgArrowUp, 
  imgArrowUpRight, imgArrowUpRight1, imgLogoArtwork1 
} from "./constants/assets";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function AmigoFarms() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", interest: "", message: "" });
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

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
          <img alt="Amigo Farms Hero Background" className="absolute max-w-none object-cover size-full" src={imgHero} />
          <div className="absolute bg-gradient-to-r from-[#07668C] inset-0 to-[100%] to-transparent via-[60%] via-[#07668C]/80" />
        </div>

        {/* Header */}
        <div className="fixed bg-white/70 backdrop-blur-md flex h-22 items-center justify-between left-0 right-0 top-0 px-6 md:px-16 shadow-[0px_4px_16px_0px_rgba(7,58,85,0.12)] z-[100] transition-colors duration-300">
          <button onClick={scrollToTop} className="flex h-15 items-center justify-center rounded-lg shrink-0 w-32 md:w-40 overflow-hidden">
            <img alt="Amigo Farms" className="object-contain size-full" src={imgLogoArtwork} />
          </button>
          <nav className="flex gap-4 md:gap-6 items-center">
            <div className="hidden lg:flex gap-6 items-center">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`font-['Inter:Semi_Bold'] font-semibold text-sm whitespace-nowrap transition-colors ${activeSection === id ? "text-[#07668c]" : "text-[#17242a] hover:text-[#07668c]"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-[#f0a23a] border border-[#f0a23a] flex gap-2 md:gap-3 h-10 md:h-13 items-center justify-center px-4 md:px-6 rounded-full shrink-0 hover:bg-[#e8952e] hover:scale-105 active:scale-95 transition-all"
            >
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs md:text-sm whitespace-nowrap">Get In Touch</p>
              <img alt="" className="size-3 md:size-4" src={imgArrowUpRight} />
            </button>
            <button onClick={() => setMobileMenuOpen(true)} className="flex lg:hidden flex-col gap-1.5 p-2 items-center justify-center cursor-pointer">
              <div className="w-6 h-0.5 bg-[#17242a] rounded-full" />
              <div className="w-6 h-0.5 bg-[#17242a] rounded-full" />
              <div className="w-4 h-0.5 bg-[#17242a] rounded-full self-end" />
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#07668C]/95 backdrop-blur-xl z-[200] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col h-full p-6 pt-8">
            <div className="flex justify-between items-center h-15">
              <img alt="Amigo Farms" className="h-10 brightness-0 invert" src={imgLogoArtwork} />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 relative w-10 h-10 flex items-center justify-center cursor-pointer">
                <div className="absolute w-6 h-0.5 bg-white rotate-45 rounded-full" />
                <div className="absolute w-6 h-0.5 bg-white -rotate-45 rounded-full" />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-start mt-16 px-4">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => { setMobileMenuOpen(false); scrollTo(id); }}
                  className={`font-['Lora:Bold'] text-3xl transition-colors ${activeSection === id ? "text-[#f0a23a]" : "text-white"
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="flex flex-col gap-6 items-start relative max-w-full lg:max-w-3xl w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">
            Heritage since the mid-1970s · Gujranwala, Pakistan
          </p>
          <h1 className="font-['Lora:Bold'] font-bold leading-[0.98] text-5xl md:text-[72px] text-white">
            Amigo Farms
          </h1>
          <p className="font-['Inter:Bold'] font-bold leading-[1.4] text-[#f0a23a] text-lg md:text-xl">
            Amigo Layer Farms · Amigo Chicks · Amigo Feed Mill
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#edf5f7] text-sm md:text-base">
            Amigo Farms (Pvt.) Ltd. is a leading semi-integrated poultry enterprise supplying high-quality, hygienic, and safe table eggs, day-old chicks, and poultry feed across Pakistan. Driven by modern farming practices, strict biosecurity, and a deep-rooted commitment to national food security, we consistently set benchmark standards in operational excellence and animal welfare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start w-full sm:w-auto">
            <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] hover:scale-105 active:scale-95 transition-all duration-300">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Get In Touch</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
            <button onClick={() => scrollTo("heritage")} className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,0.53)] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:border-white hover:scale-105 active:scale-95 transition-all duration-300">
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
              <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">About us</p>
              <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">A semi-integrated poultry network, built to last</h2>
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
          <div className="hidden lg:flex flex-1 flex-col gap-4 items-start">
            <div className="h-[330px] relative rounded-2xl w-full overflow-hidden">
              <img alt="Egg Quality Photography" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgEggQualityPhotography} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              <div className="w-full sm:flex-1 h-[200px] relative rounded-2xl overflow-hidden">
                <img alt="Healthy Chicks" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgHealthyChicksPhotography} />
              </div>
              <div className="w-full sm:flex-1 h-[200px] relative rounded-2xl overflow-hidden">
                <img alt="Poultry Feed" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgFeedPhotography} />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Under one roof */}
        <FadeIn delay={100} className="w-full">
          <div className="bg-[#e6f2f5] flex flex-col md:flex-row gap-6 items-start p-6 md:p-8 rounded-2xl w-full">
            <div className="flex flex-col gap-2 items-start shrink-0 w-full md:w-[280px]">
              <p className="font-['Lora:Bold'] font-bold text-[#07668C] text-2xl whitespace-nowrap">Under one roof</p>
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

      {/* Farm Tour Video Section */}
      <div className="bg-[#faf7f2] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 pb-16 lg:pb-26 w-full">
        <FadeIn className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">Take a tour</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Experience Amigo Farms</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base max-w-3xl">Step inside our state-of-the-art facilities and see our commitment to quality, health, and automation firsthand.</p>
        </FadeIn>
        
        <FadeIn delay={100} className="w-full">
          <div className="w-full rounded-2xl overflow-hidden shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] bg-black relative flex items-center justify-center">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              controls
              className="w-full h-auto max-h-[80vh] object-contain"
              src="/assets/video/video.mp4"
            />
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
              <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{`History & heritage`}</p>
              <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Five decades of purposeful progress</h2>
            </div>
            <div className="bg-[#07668C] flex flex-col gap-4 items-start p-6 md:p-8 rounded-2xl w-full">
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
                  <div className="bg-[#f0a23a] border-4 border-[#07668C] rounded-full shrink-0 size-4" />
                  {!last && <div className="bg-[#dce3e3] flex-1 min-h-[130px] w-0.5" />}
                </div>
                <div className="flex flex-1 flex-col gap-3 items-start pb-8">
                  <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{era}</p>
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
          <div className="bg-[#07668C] flex flex-1 flex-col gap-8 items-start min-h-[auto] lg:min-h-[620px] p-8 md:p-12 rounded-2xl overflow-hidden">
            <img alt="" className="size-9" src={imgEye} />
            <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">Our vision</p>
            <p className="font-['Lora:Bold'] font-bold leading-[1.3] text-white text-3xl lg:text-[38px]">{`To be recognized as Pakistan's most trusted and innovative poultry farming enterprise, delivering superior-quality eggs and poultry products while advancing sustainable agricultural practices and strengthening national food security.`}</p>
          </div>

          {/* Mission */}
          <div className="bg-white flex flex-1 flex-col gap-6 items-start p-8 md:p-12 rounded-2xl overflow-hidden">
            <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">Our mission</p>
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
            <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase whitespace-nowrap">Core values</p>
          </div>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Six principles, one carton</h2>
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
        <div className="bg-[#07668C] flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-between px-6 md:px-10 py-8 rounded-2xl w-full">
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
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{`Operations & infrastructure`}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">A semi-integrated network across five verticals</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">Control at every critical stage keeps quality measurable, welfare protected, and supply dependable.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Card 1: Horizontal featured card */}
          <div className="lg:col-span-8 bg-white flex flex-col md:flex-row rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[240px] md:h-auto md:w-[45%] lg:w-[50%] relative shrink-0 overflow-hidden">
              <img alt="Commercial Layer Farming" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography} />
            </div>
            <div className="flex flex-col gap-4 items-start justify-center p-8 lg:p-12 w-full md:w-[55%] lg:w-[50%]">
              <div className="bg-[#fff1d8] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs whitespace-nowrap">~400,000 commercial layers</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-3xl lg:text-4xl">01 Commercial Layer Farming</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">Fully automated environmental control housing, automated egg collection, hygienic grading, and temperature-controlled storage.</p>
            </div>
          </div>

          {/* Card 2: Vertical featured card */}
          <div className="lg:col-span-4 bg-[#07668C] flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] md:h-[240px] relative shrink-0 w-full overflow-hidden">
              <img alt="Breeder & Broiler Farming" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography1} />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <div className="bg-[rgba(255,255,255,0.1)] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-white text-xs whitespace-nowrap">~500,000 broiler capacity</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-white text-2xl">{`02 Breeder & Broiler Farming`}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#d5e4ea] text-sm">Environmentally controlled dark houses spread across 10 strategic farm locations, managed by specialized production teams using internal day-old chicks and feed.</p>
            </div>
          </div>

          {/* Card 3: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Amigo Feed Mill" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography2} />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <div className="bg-[#e6f2f5] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-[#07668C] text-xs whitespace-nowrap">Amigo Feed Mill, 1,500+ MT/month</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">03 Feed Milling</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">High-grade pellet feed formulated specifically for Layer, Breeder, and Broiler nutrition, produced on independent, company-owned land with in-house testing protocols.</p>
            </div>
          </div>

          {/* Card 4: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Hatchery Operations" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1651454736368-e65cff3b37e9?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl mt-1.5">04 Hatchery Operations</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">Strategic multi-location hatcheries housing top-tier commercial equipment, supplying day-old chicks to farmers across the region.</p>
            </div>
          </div>

          {/* Card 5: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Distribution and Logistics" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl mt-1.5">{`05 Distribution & Logistics`}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">Marketing and sales operations are managed in-house with a specialized delivery fleet for feed and temperature-regulated vans dedicated to chicks.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Quality Assurance */}
      <div id="quality" className="bg-[#07668C] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">{`Quality assurance & biosecurity`}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-white text-3xl md:text-4xl lg:text-5xl">Trust, protected at every gate</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#d5e4ea] text-base">Layered controls protect flock health, product safety, and every customer we serve.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
          {[
            { icon: imgShield1, title: "Strict Biosecurity Protocols", text: "Rigid farm-entry controls, vehicular sanitation, and strict disease prevention safeguards." },
            { icon: imgStethoscope, title: "Veterinary Supervision", text: "Ongoing health assessments, strict vaccination schedules, and specialized farm veterinarians." },
            { icon: imgFlaskConical, title: "Scientific Nutrition", text: "In-house laboratory analysis of raw ingredients and custom-formulated diets." },
            { icon: imgScanBarcode, title: "Hygienic Handling & Traceability", text: "Automated grading and comprehensive batch record-keeping for complete supply-chain accountability." },
          ].map(({ icon, title, text }) => (
            <div key={title} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.14)] flex flex-1 flex-col gap-4 items-start p-6 rounded-xl w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1">
              <img alt="" className="size-[30px]" src={icon} />
              <p className="font-['Lora:Bold'] font-bold text-white text-xl">{title}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#d5e4ea] text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Quote */}
      <div className="bg-[#e6f2f5] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-12 lg:py-16 w-full">
        <p className="font-['Lora:Bold'] font-bold leading-[1.2] text-3xl md:text-4xl lg:text-[54px] text-center text-[#07668C] w-full">
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
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">Contact us</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">Start a conversation with our team</h2>
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
                    className="bg-white border border-[#dce3e3] flex h-13 items-center px-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#07668c] focus:ring-4 focus:ring-[#07668c]/20 transition-all"
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
                    className="bg-white border border-[#dce3e3] flex h-13 items-center px-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#07668c] focus:ring-4 focus:ring-[#07668c]/20 transition-all"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{"I'm interested in"}</p>
              <div className="bg-white border border-[#dce3e3] flex h-13 items-center justify-between px-4 rounded-lg w-full relative focus-within:border-[#07668c] focus-within:ring-4 focus-within:ring-[#07668c]/20 transition-all">
                <select
                  className="appearance-none bg-transparent flex-1 font-['Inter:Regular'] text-sm text-[#748087] outline-none cursor-pointer focus:text-[#17242a]"
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
                className="bg-white border border-[#dce3e3] flex h-[120px] items-start p-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#07668c] focus:ring-4 focus:ring-[#07668c]/20 transition-all resize-none"
                placeholder="How can we help?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button onClick={() => {
              const body = `Name: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterest: ${form.interest}%0A%0A${form.message}`;
              window.location.href = `mailto:amigofarmspvtltd@gmail.com?subject=Website Inquiry from ${form.name || 'Visitor'}&body=${body}`;
            }} className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">Submit</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <div className="bg-[#07668C] flex flex-col gap-6 items-start p-6 md:p-8 rounded-2xl w-full">
              <p className="font-['Lora:Bold'] font-bold text-white text-2xl whitespace-normal md:whitespace-nowrap">Head Office · Gujranwala</p>
              {[
                { icon: imgMapPin, text: "G.T. Road, Ghakhar Mandi, District Gujranwala, Punjab." },
                { icon: imgMail, text: "amigofarmspvtltd@gmail.com" },
                { icon: imgPhone, text: "+92 55 3882472" },
                { icon: imgSmartphone, text: "+92 336 4688494" },
                { icon: "whatsapp", text: "+92 300 8644838" },
                { icon: imgRoute, text: "45 km from Lahore, Punjab, Pakistan" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 items-center w-full">
                  {icon === "whatsapp" ? (
                    <WhatsAppIcon className="size-5 shrink-0 text-[#f0a23a]" />
                  ) : (
                    <img alt="" className="size-5 shrink-0" src={icon} />
                  )}
                  <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#e6f1f4] text-sm flex-1">{text}</p>
                </div>
              ))}
              <button onClick={() => window.open("https://wa.me/923008644838", "_blank")} className="bg-[#20b75a] border border-[#dce3e3] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#1aa050] transition-colors">
                <WhatsAppIcon className="size-5 text-white" />
                <p className="font-['Inter:Bold'] font-bold text-sm text-white whitespace-nowrap">Chat on WhatsApp</p>
              </button>
            </div>



          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#07668C] flex flex-col gap-8 items-start overflow-hidden px-6 md:px-12 lg:px-20 py-12 lg:py-[72px] w-full">
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
              <p className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm">+92 55 3882472</p>
              <p className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm">+92 336 4688494</p>
              <div className="flex gap-2 items-center text-[#d5e4ea] text-sm font-['Inter:Regular'] font-normal mt-0.5">
                <svg className="size-4 text-[#20b75a]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>+92 300 8644838</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase whitespace-nowrap tracking-wider">Departments</p>
              <div className="flex flex-wrap items-center gap-y-2 text-[#d5e4ea] text-[15px] font-['Inter:Regular']">
                {["Executive Board", "Marketing", "Purchasing", "Accounts", "Logistics", "Veterinary Operations"].map((dept, index, arr) => (
                  <span key={dept} className="flex items-center whitespace-nowrap">
                    <span>{dept}</span>
                    {index < arr.length - 1 && <span className="mx-2.5 font-bold">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.13)] h-px w-full" />
        <p className="font-['Inter:Regular'] font-normal text-[#9eb4bd] text-xs w-full">© 2026 Amigo Farms (Pvt.) Ltd. All rights reserved.</p>
      </div>

      {/* Floating WhatsApp */}
      <div onClick={() => window.open("https://wa.me/923008644838", "_blank")} className="fixed bg-[#20b75a] flex items-center justify-center overflow-hidden right-6 rounded-full shadow-[0px_8px_20px_-4px_rgba(0,28,43,0.2)] size-14 bottom-24 cursor-pointer hover:bg-[#1aa050] transition-colors z-50">
        <WhatsAppIcon className="size-[26px] text-white" />
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
