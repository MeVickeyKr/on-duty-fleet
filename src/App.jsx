import React, { useState } from 'react';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState('de');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const JOIN_FLEET_URL = "https://drivers.on-duty.eu/";

  const t = translations[lang];

  const cities = [
    "München", "Berlin", "Düsseldorf", "Stuttgart", "Heidelberg", 
    "Mannheim", "Tübingen", "Esslingen", "Reutlingen", "Sindelfingen", "Ludwigsburg"
  ];

  // Smooth scroll bina URL me '#' add kiye
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white pb-16 overflow-x-hidden">
      
      {/* Background Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-36 right-0 w-[1000px] h-[800px] bg-gradient-to-bl from-sky-400/20 via-blue-500/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-[20%] w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[160px]" />
      </div>

      {/* --- NAVBAR (Expanded Fluid Width) --- */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b13]/85 border-b border-slate-800/60 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <circle cx="5.5" cy="17.5" r="3.5" /><circle cx="18.5" cy="17.5" r="3.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h3" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block leading-none">ON DUTY</span>
              <span className="text-[10px] font-semibold text-cyan-400 tracking-widest uppercase">Fleet Partner</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
            <a href="#benefits" onClick={(e) => scrollToSection(e, 'benefits')} className="hover:text-cyan-400 transition-colors">{t.navBenefits}</a>
            <a href="#job-profile" onClick={(e) => scrollToSection(e, 'job-profile')} className="hover:text-cyan-400 transition-colors">{t.navJob}</a>
            <a href="#how-to-join" onClick={(e) => scrollToSection(e, 'how-to-join')} className="hover:text-cyan-400 transition-colors">{t.navHow}</a>
            <a href="#cities" onClick={(e) => scrollToSection(e, 'cities')} className="hover:text-cyan-400 transition-colors">{t.navCities}</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-cyan-400 transition-colors">{t.navContact}</a>
            
            {/* Language Switcher */}
            <div className="inline-flex items-center rounded-full bg-slate-900/90 border border-slate-700/80 p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang('de')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'de' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                DE
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a 
              href={JOIN_FLEET_URL} 
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all"
            >
              {t.navFleet} &rarr;
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="px-2.5 py-1 rounded-full border border-slate-700 text-xs font-bold text-cyan-400 bg-slate-900"
            >
              {lang.toUpperCase()}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400 hover:text-white">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-[#070b13]/95 px-6 pt-3 pb-6 space-y-3">
            <a href="#benefits" onClick={(e) => { scrollToSection(e, 'benefits'); setMobileMenuOpen(false); }} className="block py-1.5 text-slate-300 hover:text-cyan-400 text-sm">{t.navBenefits}</a>
            <a href="#job-profile" onClick={(e) => { scrollToSection(e, 'job-profile'); setMobileMenuOpen(false); }} className="block py-1.5 text-slate-300 hover:text-cyan-400 text-sm">{t.navJob}</a>
            <a href="#how-to-join" onClick={(e) => { scrollToSection(e, 'how-to-join'); setMobileMenuOpen(false); }} className="block py-1.5 text-slate-300 hover:text-cyan-400 text-sm">{t.navHow}</a>
            <a href="#cities" onClick={(e) => { scrollToSection(e, 'cities'); setMobileMenuOpen(false); }} className="block py-1.5 text-slate-300 hover:text-cyan-400 text-sm">{t.navCities}</a>
            <a href="#contact" onClick={(e) => { scrollToSection(e, 'contact'); setMobileMenuOpen(false); }} className="block py-1.5 text-slate-300 hover:text-cyan-400 text-sm">{t.navContact}</a>
            <a href={JOIN_FLEET_URL} className="block text-center w-full py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 text-xs uppercase tracking-wider">
              {t.navFleet}
            </a>
          </div>
        )}
      </header>

      {/* --- MAIN WIDE WRAPPER (Stretched smoothly towards left & right) --- */}
      <main className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 pt-2">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="pt-6 pb-12 lg:pt-10 lg:pb-14">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {t.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.1]">
                {t.heroTitle1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-cyan-200 to-sky-400">
                  {t.heroTitle2}
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
                {t.heroDesc}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 justify-start">
                <a
                  href={JOIN_FLEET_URL}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  {t.applyNow} &rarr;
                </a>
                <a
                  href="#benefits"
                  onClick={(e) => scrollToSection(e, 'benefits')}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-700/80 transition-all backdrop-blur-sm"
                >
                  {t.learnMore}
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
              <div className="absolute w-[460px] h-[340px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

              <div className="relative w-full max-w-lg py-2 flex flex-col items-center">
                {/* Couriers Graphic from public folder */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  <img 
                    src="/hero-couriers.png" 
                    alt="On Duty Delivery Fleet" 
                    className="w-full h-auto object-contain max-h-[380px] drop-shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
                  />
                </div>

                {/* Floating Glass Pill Badge */}
                <div className="relative z-20 -mt-6 sm:-mt-8 flex items-center justify-between w-[92%] p-3 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-slate-700/60 shadow-2xl">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
                    {t.vehiclesBadge}
                  </span>
                  <span className="text-xs font-bold text-cyan-400">
                    {t.wageTips}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- 2. FLEET HIGHLIGHTS BAR --- */}
        <section className="mb-14">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl p-6 sm:p-7 shadow-2xl">
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">{t.highlightsTitle}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
              <div className="pt-2 sm:pt-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">380+</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{t.statDrivers}</p>
              </div>
              <div className="pt-2 sm:pt-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">31</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{t.statCities}</p>
              </div>
              <div className="pt-2 sm:pt-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{t.statShifts}</p>
              </div>
              <div className="pt-2 sm:pt-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{t.statWeekly}</p>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{t.statPayouts}</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. DEINE VORTEILE --- */}
        <section id="benefits" className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">{t.benefitsPre}</p>
            <h3 className="text-3xl sm:text-4xl font-black text-white">{t.benefitsTitle}</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                ⏰
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.b1Title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{t.b1Desc}</p>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                💰
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.b2Title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{t.b2Desc}</p>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                🎁
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.b3Title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{t.b3Desc}</p>
            </div>

            <div className="rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{t.b4Title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{t.b4Desc}</p>
            </div>
          </div>
        </section>

        {/* --- 4. DEIN JOB & DEIN PROFIL --- */}
        <section id="job-profile" className="grid lg:grid-cols-2 gap-8 mb-16 items-stretch">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase mb-4">
                🛵 Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.jobHeading}</h3>
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {t.jobText}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-semibold text-cyan-300">
              {t.jobVehicles}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold uppercase mb-4">
                🛡️ {t.requirementsTag}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.profileHeading}</h3>
              <ul className="space-y-3.5 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span>{t.p1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span>{t.p2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span>{t.p3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✔</span>
                  <span>{t.p4}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <a 
                href={JOIN_FLEET_URL} 
                className="inline-block text-xs font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider"
              >
                {t.applyImmediately} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* --- 5. SO EINFACH GEHT'S --- */}
        <section id="how-to-join" className="mb-16">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 sm:p-10 backdrop-blur-md">
            <div className="text-center max-w-xl mx-auto mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-1">{t.howPre}</p>
              <h3 className="text-3xl font-extrabold text-white">{t.howTitle}</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-lg mb-3 shadow-lg text-cyan-300 font-bold">
                  1
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{t.step1Title}</h4>
                <p className="text-xs text-slate-400">{t.step1Desc}</p>
              </div>

              <div className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-lg mb-3 shadow-lg text-cyan-300 font-bold">
                  2
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{t.step2Title}</h4>
                <p className="text-xs text-slate-400">{t.step2Desc}</p>
              </div>

              <div className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-lg mb-3 shadow-lg text-cyan-300 font-bold">
                  3
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{t.step3Title}</h4>
                <p className="text-xs text-slate-400">{t.step3Desc}</p>
              </div>

              <div className="text-center p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-lg mb-3 shadow-lg text-cyan-300 font-bold">
                  4
                </div>
                <h4 className="text-sm font-bold text-cyan-300 mb-1">{t.step4Title}</h4>
                <p className="text-xs text-cyan-200/70">{t.step4Desc}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={JOIN_FLEET_URL}
                className="inline-flex items-center px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/20 transition-all"
              >
                {t.joinBtn} &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* --- 6. CITIES COVERAGE --- */}
        <section id="cities" className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">{t.citiesHeading}</p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {cities.map((c, i) => (
              <span key={i} className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                📍 {c}
              </span>
            ))}
          </div>
        </section>

        {/* --- 7. DETAILED CONTACT FOOTER --- */}
        <footer id="contact" className="pt-12 border-t border-slate-800/80">
          <div className="grid md:grid-cols-3 gap-8 mb-10 text-xs text-slate-400">
            <div>
              <div className="flex items-center space-x-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                  🚲
                </div>
                <span className="text-base font-bold text-white">ON DUTY</span>
              </div>
              <p className="leading-relaxed">
                {t.footerDesc}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-white font-bold text-sm mb-2">{t.deOfficeTitle}</p>
              <p>{t.deAddress}</p>
              <p>E-Mail: <a href="mailto:driver@on-duty.eu" className="text-cyan-400 hover:underline">driver@on-duty.eu</a></p>
              <p>{t.phoneLabel}: <a href="tel:076219183999" className="text-cyan-400 hover:underline">07621 9183999</a></p>
            </div>

            <div className="space-y-1.5">
              <p className="text-white font-bold text-sm mb-2">{t.chOfficeTitle}</p>
              <p>{t.chAddress}</p>
              <p>E-Mail: <a href="mailto:bewerbung@onduty.ch" className="text-cyan-400 hover:underline">bewerbung@onduty.ch</a></p>
              <p>{t.phoneLabel}: <a href="tel:+41585212345" className="text-cyan-400 hover:underline">+41 58 521 23 45</a></p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
            <p>&copy; {new Date().getFullYear()} {t.rights}</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-400">Impressum</a>
              <a href="#" className="hover:text-slate-400">Datenschutz</a>
            </div>
          </div>
        </footer>

      </main>

    </div>
  );
}