import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", interest: "", message: "" });
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    // Update font family globally for Arabic
    if (i18n.dir() === 'rtl') {
      document.body.style.fontFamily = "'Cairo', 'Inter', sans-serif";
    } else {
      document.body.style.fontFamily = "";
    }
  }, [i18n, i18n.language]);

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
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-[#07668C] to-[100%] to-transparent via-[60%] via-[#07668C]/80" />
        </div>

        {/* Header */}
        <div className="fixed bg-white/70 backdrop-blur-md flex h-22 items-center justify-between left-0 right-0 top-0 px-6 md:px-16 shadow-[0px_4px_16px_0px_rgba(7,58,85,0.12)] z-[100] transition-colors duration-300">
          <button onClick={scrollToTop} className="flex h-15 items-center justify-center rounded-lg shrink-0 w-32 md:w-40 overflow-hidden">
            <img alt="Amigo Farms" className="object-contain size-full" src={imgLogoArtwork} />
          </button>
          <nav className="flex gap-2 sm:gap-4 md:gap-6 items-center">
            <div className="hidden lg:flex gap-6 items-center">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`font-['Inter:Semi_Bold'] font-semibold text-sm whitespace-nowrap transition-colors ${activeSection === id ? "text-[#07668c]" : "text-[#17242a] hover:text-[#07668c]"
                    }`}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </div>
            
            {/* Language Switcher */}
            <div className="bg-white border border-[#dce3e3] p-1 flex items-center rounded-full shrink-0 shadow-sm transition-all hover:shadow-md">
              <div className="hidden sm:flex items-center justify-center px-2 text-[#47545a]">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.958 17.958 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div className="flex items-center bg-[#f0f5f7] rounded-full p-0.5">
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className={`flex items-center justify-center px-2.5 sm:px-3 h-7 rounded-full transition-all ${
                    i18n.language === 'en'
                      ? "bg-[#07668c] shadow-[0px_2px_4px_rgba(7,102,140,0.3)] text-white"
                      : "text-[#748087] hover:text-[#17242a]"
                  }`}
                >
                  <span className="font-['Inter:Bold'] text-[11px] font-bold tracking-wide">EN</span>
                </button>
                <button
                  onClick={() => i18n.changeLanguage('ar')}
                  className={`flex items-center justify-center px-2.5 sm:px-3 h-7 rounded-full transition-all ${
                    i18n.language === 'ar'
                      ? "bg-[#07668c] shadow-[0px_2px_4px_rgba(7,102,140,0.3)] text-white"
                      : "text-[#748087] hover:text-[#17242a]"
                  }`}
                >
                  <span className="font-['Cairo'] text-[12px] font-bold">عربي</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex bg-[#f0a23a] border border-[#f0a23a] gap-2 md:gap-3 h-10 md:h-13 items-center justify-center px-4 md:px-6 rounded-full shrink-0 hover:bg-[#e8952e] hover:scale-105 active:scale-95 transition-all"
            >
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-xs md:text-sm whitespace-nowrap">{t('nav.getInTouch')}</p>
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
            {t('hero.heritage')}
          </p>
          <h1 className="font-['Lora:Bold'] font-bold leading-[0.98] text-5xl md:text-[72px] text-white">
            {t('hero.title')}
          </h1>
          <p className="font-['Inter:Bold'] font-bold leading-[1.4] text-[#f0a23a] text-lg md:text-xl">
            {t('hero.subtitle')}
          </p>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#edf5f7] text-sm md:text-base">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start w-full sm:w-auto">
            <button onClick={() => scrollTo("contact")} className="w-full sm:w-auto bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] hover:scale-105 active:scale-95 transition-all duration-300">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">{t('hero.getInTouch')}</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
            <button onClick={() => scrollTo("heritage")} className="w-full sm:w-auto bg-transparent border border-[rgba(255,255,255,0.53)] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:border-white hover:scale-105 active:scale-95 transition-all duration-300">
              <p className="font-['Inter:Bold'] font-bold text-sm text-white whitespace-nowrap">{t('hero.ourHeritage')}</p>
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
              <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('about.tagline')}</p>
              <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('about.title')}</h2>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              {t('about.p1')}
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              {t('about.p2')}
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[1.7] text-[#47545a] text-base">
              {t('about.p3')}
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
              <p className="font-['Lora:Bold'] font-bold text-[#07668C] text-2xl whitespace-nowrap">{t('about.under_roof')}</p>
              <p className="font-['Inter:Regular'] font-normal text-[#47545a] text-sm">{t('about.under_roof_sub')}</p>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start">
              {[
                t('about.point1'),
                t('about.point2'),
                t('about.point3'),
                t('about.point4'),
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
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('tour.tagline')}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('tour.title')}</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base max-w-3xl">{t('tour.desc')}</p>
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
              <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('heritage.tagline')}</p>
              <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('heritage.title')}</h2>
            </div>
            <div className="bg-[#07668C] flex flex-col gap-4 items-start p-6 md:p-8 rounded-2xl w-full">
              <p className="font-['Lora:Regular'] font-normal text-[#f0a23a] text-5xl whitespace-nowrap">"</p>
              <p className="font-['Lora:Bold'] font-bold leading-[1.25] text-white text-2xl md:text-[28px]">{t('heritage.quote')}</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start">
            {[
              {
                era: t('heritage.era1'),
                title: t('heritage.era1_title'),
                text: t('heritage.era1_desc'),
                last: false,
              },
              {
                era: t('heritage.era2'),
                title: t('heritage.era2_title'),
                text: t('heritage.era2_desc'),
                last: false,
              },
              {
                era: t('heritage.era3'),
                title: t('heritage.era3_title'),
                text: t('heritage.era3_desc'),
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
            <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">{t('vision.tagline')}</p>
            <p className="font-['Lora:Bold'] font-bold leading-[1.3] text-white text-3xl lg:text-[38px]">{t('vision.desc')}</p>
          </div>

          {/* Mission */}
          <div className="bg-white flex flex-1 flex-col gap-6 items-start p-8 md:p-12 rounded-2xl overflow-hidden">
            <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('mission.tagline')}</p>
            {[
              { icon: imgShieldCheck, id: "Product Safety" },
              { icon: imgHeartPulse, id: "Flock Welfare" },
              { icon: imgSettings, id: "Modernization" },
              { icon: imgNetwork, id: "Supply Chain Impact" },
              { icon: imgHandshake, id: "Ethical Relationships" },
            ].map(({ icon, id }) => (
              <div key={id} className="border-[#dce3e3] border-b flex gap-4 items-start pb-4 w-full">
                <div className="bg-[#fff1d8] flex items-center justify-center rounded-lg shrink-0 size-[42px]">
                  <img alt="" className="size-[21px]" src={icon} />
                </div>
                <div className="flex flex-1 flex-col gap-2 items-start">
                  <p className="font-['Lora:Bold'] font-bold text-[#17242a] text-lg">{t(`mission.items.${id}.title`)}</p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#47545a] text-sm">{t(`mission.items.${id}.text`)}</p>
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
            <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase whitespace-nowrap">{t('values.tagline')}</p>
          </div>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('values.title')}</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">{t('values.desc')}</p>
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
            <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-[11px] uppercase">{t('values.commitment')}</p>
            <p className="font-['Lora:Bold'] font-bold leading-[1.3] text-white text-xl md:text-[22px]">{t('values.commitment_desc')}</p>
          </div>
          <div className="flex flex-col gap-1 items-start md:items-end shrink-0">
            <p className="font-['Lora:Bold'] font-bold text-[#f0a23a] text-[40px]">50+</p>
            <p className="font-['Inter:Semi_Bold'] font-semibold text-[#d5e4ea] text-[13px]">{t('values.years')}</p>
          </div>
        </div>
      </div>

      {/* Operations */}
      <div id="operations" className="bg-white flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('operations.tagline')}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('operations.title')}</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">{t('operations.desc')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* Card 1: Horizontal featured card */}
          <div className="lg:col-span-8 bg-white flex flex-col md:flex-row rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[240px] md:h-auto md:w-[45%] lg:w-[50%] relative shrink-0 overflow-hidden">
              <img alt="Commercial Layer Farming" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography} />
            </div>
            <div className="flex flex-col gap-4 items-start justify-center p-8 lg:p-12 w-full md:w-[55%] lg:w-[50%]">
              <div className="bg-[#fff1d8] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs whitespace-nowrap">{t('operations.c1_badge')}</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-3xl lg:text-4xl">{t('operations.c1_title')}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">{t('operations.c1_desc')}</p>
            </div>
          </div>

          {/* Card 2: Vertical featured card */}
          <div className="lg:col-span-4 bg-[#07668C] flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] md:h-[240px] relative shrink-0 w-full overflow-hidden">
              <img alt="Breeder & Broiler Farming" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography1} />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <div className="bg-[rgba(255,255,255,0.1)] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-white text-xs whitespace-nowrap">{t('operations.c2_badge')}</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-white text-2xl">{t('operations.c2_title')}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#d5e4ea] text-sm">{t('operations.c2_desc')}</p>
            </div>
          </div>

          {/* Card 3: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Amigo Feed Mill" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src={imgPhotography2} />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <div className="bg-[#e6f2f5] flex items-start px-3 py-1.5 rounded-full shrink-0">
                <p className="font-['Inter:Bold'] font-bold text-[#07668C] text-xs whitespace-nowrap">{t('operations.c3_badge')}</p>
              </div>
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl">{t('operations.c3_title')}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">{t('operations.c3_desc')}</p>
            </div>
          </div>

          {/* Card 4: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Hatchery Operations" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1651454736368-e65cff3b37e9?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl mt-1.5">{t('operations.c4_title')}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">{t('operations.c4_desc')}</p>
            </div>
          </div>

          {/* Card 5: Standard Vertical */}
          <div className="lg:col-span-4 bg-white flex flex-col rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_24px_48px_-12px_rgba(18,52,67,0.2)] group">
            <div className="h-[220px] relative shrink-0 w-full overflow-hidden">
              <img alt="Distribution and Logistics" className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" />
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start p-6 lg:p-8 w-full">
              <h3 className="font-['Lora:Bold'] font-bold text-[#17242a] text-2xl mt-1.5">{t('operations.c5_title')}</h3>
              <p className="font-['Inter:Regular'] font-normal leading-[1.6] text-[#47545a] text-sm">{t('operations.c5_desc')}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Quality Assurance */}
      <div id="quality" className="bg-[#07668C] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-xs uppercase">{t('quality.tagline')}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-white text-3xl md:text-4xl lg:text-5xl">{t('quality.title')}</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#d5e4ea] text-base">{t('quality.desc')}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
          {[
            { icon: imgShield1, id: "Strict Biosecurity Protocols" },
            { icon: imgStethoscope, id: "Veterinary Supervision" },
            { icon: imgFlaskConical, id: "Scientific Nutrition" },
            { icon: imgScanBarcode, id: "Hygienic Handling & Traceability" },
          ].map(({ icon, id }) => (
            <div key={id} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.14)] flex flex-1 flex-col gap-4 items-start p-6 rounded-xl w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.3)] hover:-translate-y-1">
              <img alt="" className="size-[30px]" src={icon} />
              <p className="font-['Lora:Bold'] font-bold text-white text-xl">{t(`quality.items.${id}.title`)}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.55] text-[#d5e4ea] text-sm">{t(`quality.items.${id}.text`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Legacy Quote */}
      <div className="bg-[#e6f2f5] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-12 lg:py-16 w-full">
        <p className="font-['Lora:Bold'] font-bold leading-[1.2] text-3xl md:text-4xl lg:text-[54px] text-center text-[#07668C] w-full">
          {t('legacy.quote')}
        </p>
        <p className="font-['Inter:Bold'] font-bold text-[#f0a23a] text-lg md:text-xl text-center w-full">
          {t('legacy.brands')}
        </p>
        <div className="flex items-start justify-center w-full">
          <button onClick={() => scrollTo("contact")} className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
            <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">{t('nav.getInTouch')}</p>
            <img alt="" className="size-4" src={imgArrowUpRight} />
          </button>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="bg-[#faf7f2] flex flex-col gap-8 md:gap-12 items-start px-6 md:px-12 lg:px-20 py-16 lg:py-26 w-full">
        <div className="flex flex-col gap-4 items-start w-full">
          <p className="font-['Inter:Bold'] font-bold text-[#07668c] text-xs uppercase">{t('contact.tagline')}</p>
          <h2 className="font-['Lora:Bold'] font-bold leading-[1.08] text-[#17242a] text-3xl md:text-4xl lg:text-5xl">{t('contact.title')}</h2>
          <p className="font-['Inter:Regular'] font-normal leading-[1.65] text-[#47545a] text-base">{t('contact.desc')}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          {/* Contact form */}
          <div className="bg-white flex flex-1 flex-col gap-4 items-start p-6 md:p-8 rounded-2xl shadow-[0px_12px_36px_-8px_rgba(18,52,67,0.12)] overflow-hidden w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-start w-full">
              {[
                { label: t('contact.form.name'), key: "name" as const, placeholder: t('contact.form.name_ph') },
                { label: t('contact.form.company'), key: "company" as const, placeholder: t('contact.form.company_ph') },
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
                { label: t('contact.form.phone'), key: "phone" as const, placeholder: t('contact.form.phone_ph') },
                { label: t('contact.form.email'), key: "email" as const, placeholder: t('contact.form.email_ph') },
              ].map(({ label, key, placeholder }) => (
                <div key={key} className="flex w-full sm:flex-1 flex-col gap-2 items-start">
                  <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{label}</p>
                  <input
                    dir="ltr"
                    className="bg-white border border-[#dce3e3] flex h-13 items-center px-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#07668c] focus:ring-4 focus:ring-[#07668c]/20 transition-all text-left"
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{t('contact.form.interest')}</p>
              <div className="bg-white border border-[#dce3e3] flex h-13 items-center justify-between px-4 rounded-lg w-full relative focus-within:border-[#07668c] focus-within:ring-4 focus-within:ring-[#07668c]/20 transition-all">
                <select
                  className="appearance-none bg-transparent flex-1 font-['Inter:Regular'] text-sm text-[#748087] outline-none cursor-pointer focus:text-[#17242a]"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                >
                  <option value="">{t('contact.form.interest_ph')}</option>
                  <option value="eggs">{t('contact.form.int_eggs')}</option>
                  <option value="chicks">{t('contact.form.int_chicks')}</option>
                  <option value="feed">{t('contact.form.int_feed')}</option>
                  <option value="other">{t('contact.form.int_other')}</option>
                </select>
                <img alt="" className="size-[18px] shrink-0 pointer-events-none" src={imgChevronDown} />
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm">{t('contact.form.message')}</p>
              <textarea
                className="bg-white border border-[#dce3e3] flex h-[120px] items-start p-4 rounded-lg w-full text-sm font-['Inter:Regular'] text-[#17242a] placeholder:text-[#748087] outline-none focus:border-[#07668c] focus:ring-4 focus:ring-[#07668c]/20 transition-all resize-none"
                placeholder={t('contact.form.message_ph')}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button onClick={() => {
              const body = `Name: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterest: ${form.interest}%0A%0A${form.message}`;
              window.location.href = `mailto:amigofarmspvtltd@gmail.com?subject=Website Inquiry from ${form.name || 'Visitor'}&body=${body}`;
            }} className="bg-[#f0a23a] border border-[#f0a23a] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#e8952e] transition-colors">
              <p className="font-['Inter:Bold'] font-bold text-[#17242a] text-sm whitespace-nowrap">{t('contact.form.submit')}</p>
              <img alt="" className="size-4" src={imgArrowUpRight} />
            </button>
          </div>

          {/* Contact info */}
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <div className="bg-[#07668C] flex flex-col gap-6 items-start p-6 md:p-8 rounded-2xl w-full">
              <p className="font-['Lora:Bold'] font-bold text-white text-2xl whitespace-normal md:whitespace-nowrap">{t('contact.info.hq')}</p>
              {[
                { icon: imgMapPin, text: t('contact.info.address') },
                { icon: imgMail, text: "amigofarmspvtltd@gmail.com" },
                { icon: imgPhone, text: "+92 55 3882472" },
                { icon: imgSmartphone, text: "+92 336 4688494" },
                { icon: "whatsapp", text: "+92 300 8644838" },
                { icon: imgRoute, text: t('contact.info.distance') },
              ].map(({ icon, text }) => (
                <div key={text} className="flex gap-3 items-center w-full">
                  {icon === "whatsapp" ? (
                    <WhatsAppIcon className="size-5 shrink-0 text-[#f0a23a]" />
                  ) : (
                    <img alt="" className="size-5 shrink-0" src={icon} />
                  )}
                  <p 
                    dir={text.startsWith('+') || text.includes('@') ? "ltr" : undefined}
                    className={`font-['Inter:Regular'] font-normal leading-[1.5] text-[#e6f1f4] text-sm flex-1 ${text.startsWith('+') || text.includes('@') ? 'rtl:text-right' : ''}`}
                  >
                    {text}
                  </p>
                </div>
              ))}
              <button onClick={() => window.open("https://wa.me/923008644838", "_blank")} className="bg-[#20b75a] border border-[#dce3e3] flex gap-3 h-13 items-center justify-center px-6 rounded-full hover:bg-[#1aa050] transition-colors">
                <WhatsAppIcon className="size-5 text-white" />
                <p className="font-['Inter:Bold'] font-bold text-sm text-white whitespace-nowrap">{t('contact.info.chat')}</p>
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
            <p className="font-['Lora:Regular'] font-normal leading-[1.4] text-white text-xl">{t('footer.tagline')}</p>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-8 items-start w-full lg:flex-1">
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto whitespace-normal md:whitespace-nowrap">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase">{t('footer.quick_links')}</p>
              {navLinks.map(({ label, id }) => (
                <button key={id} onClick={() => scrollTo(id)} className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm hover:text-white transition-colors text-left">{t(`nav.${id}`)}</button>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase whitespace-nowrap">{t('footer.contact')}</p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.5] text-[#d5e4ea] text-sm">{t('contact.info.address')}</p>
              <p dir="ltr" className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm w-full rtl:text-right">amigofarmspvtltd@gmail.com</p>
              <p dir="ltr" className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm w-full rtl:text-right">+92 55 3882472</p>
              <p dir="ltr" className="font-['Inter:Regular'] font-normal text-[#d5e4ea] text-sm w-full rtl:text-right">+92 336 4688494</p>
              <div dir="ltr" className="flex gap-2 items-center text-[#d5e4ea] text-sm font-['Inter:Regular'] font-normal mt-0.5 w-full rtl:justify-end">
                <svg className="size-4 text-[#20b75a]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>+92 300 8644838</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 items-start w-full md:w-auto">
              <p className="font-['Inter:Extra_Bold'] font-extrabold text-[#f0a23a] text-xs uppercase whitespace-nowrap tracking-wider">{t('footer.departments')}</p>
              <div className="flex flex-wrap items-center gap-y-2 text-[#d5e4ea] text-[15px] font-['Inter:Regular']">
                {[
                  t('footer.dept_executive'), 
                  t('footer.dept_marketing'), 
                  t('footer.dept_purchasing'), 
                  t('footer.dept_accounts'), 
                  t('footer.dept_logistics'), 
                  t('footer.dept_veterinary')
                ].map((dept, index, arr) => (
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
