"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Bell,
  Camera,
  ChefHat,
  ChevronRight,
  ClipboardList,
  Coffee,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  Star,
  X
} from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { content, type Language } from "../lib/content";
import { siteImages } from "../src/data/siteImages";
import { foodMenu } from "../src/data/foodMenu";
import { galleryImages } from "../src/data/galleryImages";

const navLinks = [
  ["home", "#home"],
  ["about", "#about"],
  ["food", "#food"],
  ["branches", "#branches"],
  ["gallery", "#gallery"],
  ["contact", "#contact"]
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};


function EditableImage({
  src,
  mobileSrc,
  alt,
  replaceName,
  className,
  imgClassName,
  eager = false
}: {
  src: string;
  mobileSrc?: string;
  alt: string;
  replaceName: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  void replaceName;

  return (
    <span className={`group/editable relative block overflow-hidden ${className ?? ""}`}>
      {mobileSrc ? (
        <picture>
          <source media="(max-width: 640px)" srcSet={mobileSrc} />
          <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={imgClassName} />
        </picture>
      ) : (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className={imgClassName} />
      )}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/34 via-transparent to-transparent opacity-0 transition duration-300 group-hover/editable:opacity-100" />
    </span>
  );
}
function MouseGlow() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.transform = `translate3d(${event.clientX - 7}px, ${event.clientY - 7}px, 0) rotate(-18deg)`;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor-plane" aria-hidden="true">
      <svg viewBox="0 0 64 64" focusable="false">
        <path d="M8 8 58 29 35 35 25 57z" fill="#ff4b4f" />
        <path d="M8 8 35 35 25 57 20 38z" fill="#d72f37" />
        <path d="M8 8 58 29 35 35z" fill="#ff7478" />
        <path d="M8 8 58 29 35 35 25 57z" fill="none" stroke="#2b2b2b" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function SwingIllustration() {
  return (
    <svg className="swing-sketch" viewBox="0 0 220 210" aria-hidden="true">
      <path d="M44 22c18 10 112 10 132 0" className="swing-sketch-line" />
      <path d="M70 34 94 150" className="swing-sketch-line swing-rope-left" />
      <path d="M151 34 128 150" className="swing-sketch-line swing-rope-right" />
      <g className="swing-sketch-seat">
        <path d="M78 154c25 8 60 8 84 0" className="swing-sketch-line" />
        <path d="M92 146c14 8 40 8 55 0" className="swing-sketch-line" />
      </g>
      <path d="M50 184c33 12 86 12 122 0" className="swing-sketch-dust" />
      <path d="M35 72c10-8 18-10 29-4" className="swing-sketch-dust" />
      <path d="M162 78c9 2 17 7 22 16" className="swing-sketch-dust" />
    </svg>
  );
}

function PaperPlaneJourney() {
  return (
    <div className="paper-journey" aria-hidden="true">
      <img src={siteImages.paperPlane.image} alt="" className="paper-journey-plane" />
    </div>
  );
}
function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.38;
    const tryPlay = () => {
      void audio.play().catch(() => undefined);
    };
    tryPlay();
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("keydown", tryPlay, { once: true });
    return () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
    };
  }, []);

  return <audio ref={audioRef} src="/audio/campus-music.mp3" autoPlay loop preload="auto" className="hidden" />;
}
function SectionHeading({ title, subtitle, align = "center" }: { title: string; subtitle: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="relative inline-flex rounded-2xl chalk-block px-6 py-4 text-paper">
        <h2 className="relative z-10 font-serifZh text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      </div>
      <p className="mt-4 font-poppins text-sm font-semibold uppercase tracking-[0.18em] text-coffee">{subtitle}</p>
    </div>
  );
}

function LanguageToggle({ lang, setLang }: { lang: Language; setLang: (lang: Language) => void }) {
  return (
    <div className="inline-flex rounded-full bg-paper p-1 text-sm font-semibold text-chalk shadow-paper">
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`rounded-full px-3 py-1.5 transition ${lang === "zh" ? "bg-chalk text-paper" : "hover:bg-cream"}`}
      >
        {"\u4e2d\u6587"}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1.5 transition ${lang === "en" ? "bg-chalk text-paper" : "hover:bg-cream"}`}
      >
        EN
      </button>
    </div>
  );
}

function Navbar({ lang, setLang }: { lang: Language; setLang: (lang: Language) => void }) {
  const [open, setOpen] = useState(false);
  const t = content[lang];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/50 bg-paper/88 px-4 py-3 shadow-soft backdrop-blur-xl">
        <a href="#home" className="flex items-center gap-3">
          <EditableImage src={siteImages.logo.image} alt={lang === "zh" ? siteImages.logo.altZh : siteImages.logo.altEn} replaceName={siteImages.logo.replaceName} className="h-11 w-11 rounded-2xl bg-paper shadow-paper" imgClassName="h-full w-full object-contain p-1" />
          <span>
            <span className="brand-cyan-glow block font-serifZh text-lg font-black leading-none">{t.brand}</span>
            <span className="brand-sub-cyan-glow font-poppins text-xs font-semibold uppercase tracking-[0.16em]">{t.brandSub}</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map(([key, href]) => (
            <a key={key} href={href} className="text-sm font-semibold text-ink/75 transition hover:text-chalk">
              {t.nav[key]}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href="#contact" className="rounded-full bg-chalk px-5 py-2.5 text-sm font-bold text-paper shadow-paper transition hover:-translate-y-0.5 hover:bg-coffee">
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full bg-chalk text-paper lg:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/35 p-4 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="ml-auto max-w-sm rounded-2xl border border-coffee/10 bg-paper-lines bg-paper p-5 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="brand-cyan-glow font-serifZh text-xl font-black">{t.brand}</span>
                <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-chalk text-paper">
                  <X size={18} />
                </button>
              </div>
              <div className="mt-6 grid gap-3">
                {navLinks.map(([key, href]) => (
                  <a key={key} href={href} onClick={() => setOpen(false)} className="rounded-2xl bg-white/55 px-4 py-3 font-semibold text-ink shadow-paper">
                    {t.nav[key]}
                  </a>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <LanguageToggle lang={lang} setLang={setLang} />
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-chalk px-4 py-2 text-sm font-bold text-paper">
                  {t.nav.cta}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function PaperPlaneAnimation({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`pointer-events-none absolute left-0 right-0 z-20 ${footer ? "top-12" : "top-28 md:top-36"}`}>
      <img src={siteImages.paperPlane.image} alt="" className="h-12 w-12 animate-plane-fly opacity-80 drop-shadow-xl md:h-16 md:w-16" />
    </div>
  );
}

function HeroSection({ lang }: { lang: Language }) {
  const t = content[lang].hero;
  return (
    <section id="home" className="relative h-screen min-h-[720px] overflow-hidden bg-ink text-paper">
      <EditableImage
        src={siteImages.hero.desktop}
        mobileSrc={siteImages.hero.mobile}
        alt={lang === "zh" ? siteImages.hero.altZh : siteImages.hero.altEn}
        replaceName={siteImages.hero.replaceName}
        eager
        className="absolute inset-0"
        imgClassName="h-full w-full object-cover object-[50%_50%]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_72%,rgba(233,185,73,0.23),transparent_25rem),linear-gradient(90deg,rgba(5,12,9,0.86)_0%,rgba(8,16,12,0.62)_39%,rgba(8,16,12,0.26)_68%,rgba(5,12,9,0.58)_100%)]" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="absolute inset-0 hero-grain opacity-[0.16]" />
      <PaperPlaneAnimation />

      <div className="absolute left-[7vw] right-[7vw] top-[10.7rem] z-10 hidden h-px border-t border-dashed border-paper/45 bg-transparent md:block" />
      <div className="absolute bottom-8 left-4 right-4 z-10 hidden h-px bg-paper/14 md:block" />

      <div className="absolute inset-0 z-10 mx-auto grid h-screen w-full max-w-[86rem] items-start gap-8 px-5 pb-10 pt-[11.2rem] md:px-8 md:pt-[12rem] min-[820px]:grid-cols-[minmax(0,1.08fr)_330px] min-[820px]:gap-8 min-[820px]:pt-[12.6rem] lg:grid-cols-[minmax(0,1.18fr)_390px] lg:gap-14 lg:pb-14 lg:pt-[13.2rem] xl:grid-cols-[minmax(0,1.2fr)_420px]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[58rem]"
        >
          <div className="mb-4 flex items-center gap-4 md:mb-5">
            <span className="h-px w-14 bg-sunlight" />
            <p className="font-poppins text-xs font-semibold uppercase tracking-[0.28em] text-paper/78">{t.eyebrow}</p>
          </div>
          <h1 className="hero-chalk-title max-w-5xl text-[clamp(3.2rem,12vw,7rem)] md:text-[clamp(4.6rem,6.5vw,7.4rem)] font-black leading-[0.92] text-paper">
            {lang === "zh" ? (
              <>
                <span className="block">{"\u6b22\u8fce\u56de\u5230"}</span>
                <span className="block pl-[0.62em] md:pl-[0.78em]">{"\u521d\u4e2d\u4e00\u6821"}</span>
              </>
            ) : (
              t.title
            )}
          </h1>
          <div className="mt-4 grid max-w-[50rem] gap-4 border-l border-paper/30 bg-ink/10 py-1 pl-5 backdrop-blur-[1px] md:mt-5 md:gap-4 md:pl-7">
            <p className="font-serifZh text-2xl font-bold leading-snug text-sunlight drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)] md:text-[2.35rem]">{t.subtitle}</p>
            <p className="max-w-[48rem] text-base font-medium leading-8 text-paper/88 drop-shadow-[0_8px_18px_rgba(0,0,0,0.42)] md:text-lg md:leading-9">{t.description}</p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
            <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-4 font-bold text-chalk shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-sunlight">
              {t.primary}
              <ChevronRight size={18} />
            </a>
            <a href="#food" className="inline-flex items-center justify-center rounded-full border border-paper/34 bg-paper/8 px-7 py-4 font-bold text-paper backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-paper/16">
              {t.secondary}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 38, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-photo-depth relative hidden overflow-hidden rounded-2xl border border-paper/22 bg-black/72 p-3 shadow-[0_34px_92px_rgba(0,0,0,0.5)] backdrop-blur-2xl min-[820px]:block lg:p-4"
        >
          <div className="relative overflow-hidden rounded-xl">
            <EditableImage
              src={siteImages.heroCard.image}
              alt={lang === "zh" ? siteImages.heroCard.altZh : siteImages.heroCard.altEn}
              replaceName={siteImages.heroCard.replaceName}
              className="relative"
              imgClassName="h-44 w-full object-cover opacity-95 md:h-56 lg:h-[19.5rem]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-paper/10" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-poppins text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-paper/64">{t.campus}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.campuses.map((campus) => (
                  <span key={campus} className="rounded-full border border-paper/28 bg-paper/12 px-3 py-1.5 text-sm font-semibold text-paper backdrop-blur-md">
                    {campus}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 px-2 pb-3 pt-5">
            <div>
              <p className="font-serifZh text-xl font-black text-paper lg:text-[1.7rem]">{t.noticeTitle}</p>
              <p className="mt-2 font-poppins text-xs font-semibold uppercase tracking-[0.22em] text-sunlight">{t.noticeDays}</p>
            </div>
            <div className="flex items-end justify-between border-t border-paper/14 pt-4">
              <p className="font-serifZh text-3xl font-black leading-[0.95] text-paper lg:text-[2.7rem]">{t.noticeTime}</p>
              <span className="mb-2 h-2 w-2 rounded-full bg-sunlight shadow-[0_0_24px_rgba(233,185,73,0.9)]" />
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex" aria-hidden="true">
        <span className="h-12 w-px overflow-hidden bg-paper/18">
          <span className="block h-5 w-px animate-[floatSlow_2.4s_ease-in-out_infinite] bg-sunlight" />
        </span>
      </div>
    </section>
  );
}
function AboutSection({ lang }: { lang: Language }) {
  const t = content[lang].about;
  return (
    <section id="about" className="torn-top torn-bottom relative px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={fadeUp} className="notebook-card relative rounded-2xl p-8 shadow-soft md:p-12">
            <span className="absolute -left-3 top-10 h-16 w-7 rounded-r-full bg-sunlight/80 shadow-paper" />
            <div className="absolute right-8 top-8 rotate-6 text-schoolblue">
              <Star size={42} />
            </div>
            <div className="space-y-6 pl-8 text-lg leading-9 text-ink/85 md:text-xl">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="mt-10 rounded-2xl bg-chalk px-7 py-6 font-serifZh text-2xl font-black leading-relaxed text-paper shadow-paper">
              {t.quote}
            </blockquote>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28, rotate: 1 }} whileInView={{ opacity: 1, y: 0, rotate: -1 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="relative">
            <div className="absolute -inset-5 rounded-2xl bg-sunlight/20 blur-2xl" />
            <EditableImage
              src={siteImages.about.image}
              alt={lang === "zh" ? siteImages.about.altZh : siteImages.about.altEn}
              replaceName={siteImages.about.replaceName}
              className="relative rounded-2xl bg-paper p-3 shadow-soft"
              imgClassName="aspect-[4/5] w-full rounded-xl object-cover md:aspect-[5/4] lg:aspect-[4/5]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function SwingSection({ lang }: { lang: Language }) {
  const t = content[lang].campus;
  const polaroidPhotos = [siteImages.afterSchoolLight, siteImages.oldStudyDesk, siteImages.memoryCorner];
  return (
    <section className="relative overflow-hidden bg-paper px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.15fr_0.55fr]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="notebook-card rounded-2xl p-7 shadow-soft">
          <SectionHeading title={t.title} subtitle={t.subtitle} align="left" />
          <div className="mt-8 space-y-5 text-lg leading-9 text-ink/80">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[440px]">
          <div className="absolute inset-x-8 top-0 h-28 rounded-full bg-sunlight/20 blur-3xl" />
          <SwingIllustration />
          <EditableImage src={siteImages.swing.image} alt={lang === "zh" ? siteImages.swing.altZh : siteImages.swing.altEn} replaceName={siteImages.swing.replaceName} className="relative mx-auto h-[460px] w-full rounded-2xl shadow-soft animate-swing" imgClassName="h-full w-full rounded-2xl object-cover" />
        </div>

        <div className="grid gap-5">
          {t.polaroids.map((item, index) => {
            const photo = polaroidPhotos[index];
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`rounded-2xl bg-paper p-3 shadow-soft ${index === 1 ? "-rotate-2" : "rotate-2"}`}
              >
                <EditableImage
                  src={photo.image}
                  alt={lang === "zh" ? photo.altZh : photo.altEn}
                  replaceName={photo.replaceName}
                  className="aspect-[4/3] rounded-xl"
                  imgClassName="h-full w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-center font-serifZh text-lg font-black text-chalk">{item}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PeopleSection({ lang }: { lang: Language }) {
  const people = content[lang].people;
  const cards = [
    { ...people.founder, photo: siteImages.founder, dark: false },
    { ...people.chef, photo: siteImages.chef, dark: true }
  ];

  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {cards.map((person) => (
          <motion.article
            key={person.role}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className={`overflow-hidden rounded-2xl shadow-soft ${person.dark ? "chalk-block relative text-paper" : "bg-paper text-ink"}`}
          >
            <EditableImage src={person.photo.image} alt={lang === "zh" ? person.photo.altZh : person.photo.altEn} replaceName={person.photo.replaceName} className="h-80 w-full" imgClassName="h-full w-full object-cover" />
            <div className="relative z-10 p-7 md:p-9">
              <p className="font-poppins text-sm font-bold uppercase tracking-[0.18em] text-sunlight">{person.role}</p>
              <h2 className="mt-3 font-serifZh text-3xl font-black leading-tight md:text-4xl">{person.title}</h2>
              <p className={`mt-2 font-poppins text-sm font-semibold uppercase tracking-[0.16em] ${person.dark ? "text-paper/70" : "text-coffee"}`}>{person.subtitle}</p>
              <div className={`mt-6 space-y-4 text-lg leading-8 ${person.dark ? "text-paper/85" : "text-ink/78"}`}>
                {person.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <blockquote className={`mt-7 rounded-2xl p-5 font-serifZh text-xl font-black leading-relaxed ${person.dark ? "bg-paper/10" : "bg-cream text-chalk"}`}>
                â€œ{person.quote}â€
              </blockquote>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function SignatureFoodSection({ lang }: { lang: Language }) {
  const t = content[lang].food;
  return (
    <section id="food" className="torn-top torn-bottom relative overflow-hidden bg-paper px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-ink/75">{t.intro}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foodMenu.map((item, index) => {
            const category = lang === "zh" ? item.categoryZh : item.categoryEn;
            const name = lang === "zh" ? item.nameZh : item.nameEn;
            const sub = lang === "zh" ? item.subZh : item.subEn;
            const alt = lang === "zh" ? item.altZh : item.altEn;
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.06 }}
                className="group rounded-2xl bg-cream p-3 shadow-paper transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-soft"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <EditableImage src={item.image} alt={alt} replaceName={item.replaceName} className="aspect-[4/3] w-full" imgClassName="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  {index === 0 || category.includes("\u6821\u957f") || category.includes("Principal") ? (
                    <span className="absolute left-3 top-3 rounded-full bg-sunlight px-3 py-1 text-xs font-black text-ink shadow-paper">{t.badge}</span>
                  ) : null}
                </div>
                <div className="mt-4 rounded-xl bg-paper p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-coffee">{category}</p>
                  <h3 className="mt-2 font-serifZh text-xl font-black text-chalk">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">{sub}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-chalk px-7 py-4 font-bold text-paper shadow-soft transition hover:-translate-y-1">
            {t.button}
            <ClipboardList size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
function WhyVisitSection({ lang }: { lang: Language }) {
  const t = content[lang].why;
  const icons = [ClipboardList, Camera, ChefHat, MapPin];
  return (
    <section className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl bg-paper p-6 shadow-paper"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-chalk text-paper">
                  <Icon size={25} />
                </div>
                <h3 className="mt-5 font-serifZh text-2xl font-black text-chalk">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BranchSection({ lang }: { lang: Language }) {
  const t = content[lang].branches;
  const branchPhotos = [siteImages.branchMountAustin, siteImages.branchGaya];
  return (
    <section id="branches" className="relative overflow-hidden bg-paper px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {t.items.map((branch, index) => {
            const photo = branchPhotos[index];
            return (
              <motion.article key={branch.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="overflow-hidden rounded-2xl bg-cream shadow-soft">
                <EditableImage src={photo.image} alt={lang === "zh" ? photo.altZh : photo.altEn} replaceName={photo.replaceName} className="h-72 w-full" imgClassName="h-full w-full object-cover" />
                <div className="p-7">
                  <p className="font-poppins text-sm font-bold uppercase tracking-[0.18em] text-coffee">{branch.sub}</p>
                  <h3 className="mt-2 font-serifZh text-3xl font-black text-chalk">{branch.name}</h3>
                  <p className="mt-4 rounded-2xl bg-paper p-4 font-semibold text-ink/75">{branch.address}</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-chalk px-5 py-3 font-bold text-paper">
                      <MapPin size={18} />
                      {t.map}
                    </a>
                    <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunlight px-5 py-3 font-bold text-ink">
                      <MessageCircle size={18} />
                      {t.whatsapp}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function GallerySection({ lang }: { lang: Language }) {
  const t = content[lang].gallery;
  return (
    <section id="gallery" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t.title} subtitle={t.subtitle} />
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-ink/75">{t.intro}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {t.categories.map((category) => (
            <span key={category} className="rounded-full bg-paper px-4 py-2 text-sm font-bold text-chalk shadow-paper">
              {category}
            </span>
          ))}
        </div>
        <div className="masonry mt-12">
          {galleryImages.map((item, index) => {
            const title = lang === "zh" ? item.titleZh : item.titleEn;
            const category = lang === "zh" ? item.categoryZh : item.categoryEn;
            const alt = lang === "zh" ? item.altZh : item.altEn;
            return (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.08 }}
                className="masonry-item rounded-2xl bg-paper p-3 shadow-soft"
              >
                <EditableImage src={item.src} alt={alt} replaceName={item.replaceName} className="overflow-hidden rounded-xl" imgClassName={`${index % 2 === 0 ? "h-80" : "h-56"} w-full object-cover transition duration-500 hover:scale-105`} />
                <figcaption className="flex items-center justify-between gap-3 px-2 py-4">
                  <span className="font-serifZh text-xl font-black text-chalk">{title}</span>
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-coffee">{category}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function ReviewSection({ lang }: { lang: Language }) {
  const t = content[lang].reviews;
  return (
    <section className="blackboard-review-section relative overflow-hidden px-5 py-24 text-paper md:px-8">
      <div className="blackboard-dust" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="blackboard-frame rounded-2xl p-5 shadow-soft md:p-8">
          <div className="blackboard-header mx-auto max-w-4xl text-center">
            <p className="font-poppins text-xs font-bold uppercase tracking-[0.26em] text-paper/52">{t.subtitle}</p>
            <h2 className="mt-4 font-serifZh text-4xl font-black leading-tight text-paper md:text-6xl">{t.title}</h2>
            <div className="mx-auto mt-5 h-px max-w-xl bg-paper/18" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.items.map((review, index) => (
              <motion.article
                key={review}
                initial={{ opacity: 0, y: 34, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 1.5 : -1.5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.62 }}
                className="blackboard-note rounded-2xl bg-paper p-6 text-ink shadow-soft"
              >
                <span className="blackboard-pin" aria-hidden="true" />
                <div className="mb-5 flex text-chalk">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serifZh text-xl font-black leading-relaxed">{review}</p>
                <p className="mt-6 font-poppins text-sm font-bold uppercase tracking-[0.16em] text-coffee">{t.label}</p>
              </motion.article>
            ))}
          </div>

          <div className="blackboard-chalk-row" aria-hidden="true">
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

function BicycleSection({ lang }: { lang: Language }) {
  const t = content[lang].finalStory;
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-180px" });
  return (
    <section ref={ref} className="relative min-h-[720px] overflow-hidden bg-ink px-5 py-24 text-paper md:px-8">
      <EditableImage src={siteImages.bicycle.image} alt={lang === "zh" ? siteImages.bicycle.altZh : siteImages.bicycle.altEn} replaceName={siteImages.bicycle.replaceName} className="absolute inset-0" imgClassName="h-full w-full object-cover opacity-62" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/44 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-b from-chalk/24 via-transparent to-ink" />
      <PaperPlaneAnimation footer />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mx-auto mb-8 inline-flex rounded-full bg-paper/12 px-4 py-2 font-poppins text-xs font-bold uppercase tracking-[0.2em] text-sunlight">
          {t.subtitle}
        </p>
        <h2 className="font-serifZh text-4xl font-black leading-tight md:text-7xl">{t.title}</h2>
        <p className="mt-7 font-serifZh text-4xl font-black leading-tight text-sunlight drop-shadow-[0_14px_34px_rgba(0,0,0,0.42)] md:text-6xl">{t.bellLine}</p>
        <div className="mx-auto mt-8 max-w-4xl space-y-5 text-lg leading-9 text-paper/86 md:text-xl">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <a href="#contact" className="mt-9 inline-flex rounded-full bg-sunlight px-7 py-4 font-bold text-ink shadow-soft transition hover:-translate-y-1">
          {t.button}
        </a>
      </div>
      <div className={`absolute bottom-8 left-0 z-10 h-40 w-full ${isInView ? "paper-journey-in-view" : ""}`}>
        <PaperPlaneJourney />
      </div>
    </section>
  );
}
function ContactSection({ lang }: { lang: Language }) {
  const t = content[lang].contact;
  const nav = content[lang].nav;
  const whatsappHref = "https://wa.me/60168863621";

  return (
    <footer id="contact" className="bg-paper px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading title={t.title} subtitle={t.subtitle} align="left" />
          <p className="mt-7 text-lg leading-9 text-ink/75">{t.intro}</p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-coffee">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-chalk">{t.placeholders.whatsapp}</a>
            <a href={t.placeholders.facebook} target="_blank" rel="noreferrer" className="hover:text-chalk">Facebook</a>
            <a href={t.placeholders.instagram} target="_blank" rel="noreferrer" className="hover:text-chalk">Instagram</a>
          </div>
        </div>
        <form className="rounded-2xl bg-cream p-6 shadow-soft md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input aria-label={t.fields.name} placeholder={t.fields.name} className="rounded-2xl border border-coffee/10 bg-paper px-4 py-4 outline-none focus:border-chalk" />
            <input aria-label={t.fields.phone} placeholder={t.fields.phone} className="rounded-2xl border border-coffee/10 bg-paper px-4 py-4 outline-none focus:border-chalk" />
            <input aria-label={t.fields.branch} placeholder={t.fields.branch} className="rounded-2xl border border-coffee/10 bg-paper px-4 py-4 outline-none focus:border-chalk md:col-span-2" />
            <textarea aria-label={t.fields.message} placeholder={t.fields.message} rows={5} className="rounded-2xl border border-coffee/10 bg-paper px-4 py-4 outline-none focus:border-chalk md:col-span-2" />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-chalk px-6 py-4 font-bold text-paper">
              <MessageCircle size={18} />
              {t.whatsapp}
            </a>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-sunlight px-6 py-4 font-bold text-ink">
              <Send size={18} />
              {t.send}
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 border-t border-coffee/15 pt-10 md:grid-cols-4">
        <div>
          <p className="font-serifZh text-3xl font-black text-chalk">{content[lang].brand}</p>
          <p className="mt-2 font-poppins text-sm font-bold uppercase tracking-[0.16em] text-coffee">{content[lang].brandSub}</p>
        </div>
        <div className="grid gap-2">
          {navLinks.map(([key, href]) => (
            <a key={key} href={href} className="font-semibold text-ink/70 hover:text-chalk">
              {nav[key]}
            </a>
          ))}
        </div>
        <div className="grid gap-2 font-semibold text-ink/70">
          <span>Mount Austin</span>
          <span>é«˜é›… Gaya</span>
        </div>
        <div className="grid gap-2 font-semibold text-ink/70">
          {t.social.map((item) => (
            <a key={item.label} href={item.href} target={item.href === "#" ? undefined : "_blank"} rel={item.href === "#" ? undefined : "noreferrer"} className="hover:text-chalk">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm font-semibold text-ink/55">{t.copyright}</p>
    </footer>
  );
}
export default function HomePage() {
  const [lang, setLang] = useState<Language>("zh");

  return (
    <>
      <BackgroundMusic />
      <MouseGlow />
      <Navbar lang={lang} setLang={setLang} />
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <HeroSection lang={lang} />
          <AboutSection lang={lang} />
          <SwingSection lang={lang} />
          <PeopleSection lang={lang} />
          <SignatureFoodSection lang={lang} />
          <WhyVisitSection lang={lang} />
          <BranchSection lang={lang} />
          <GallerySection lang={lang} />
          <ReviewSection lang={lang} />
          <BicycleSection lang={lang} />
          <ContactSection lang={lang} />
        </motion.main>
      </AnimatePresence>
    </>
  );
}




