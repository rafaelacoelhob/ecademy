import Image from 'next/image'
import Link from 'next/link'
import FloatingSquares from '@/components/FloatingSquares'

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-screen flex-col overflow-hidden pt-16 md:pt-20">

        {/* Radial gradients + star dots */}
        <div className="hero-bg star-field pointer-events-none absolute inset-0" />

        {/* Animated bg squares */}
        <FloatingSquares />

        {/* ── Main content ─────────────────────────────── */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col lg:flex-row items-center gap-6 lg:gap-0 px-5 md:px-10 lg:px-16 py-8 lg:py-0">

          {/* LEFT – mascot + floating deco icons */}
          <div className="relative flex h-[300px] md:h-[420px] lg:h-[600px] w-full max-w-[380px] md:max-w-[480px] lg:max-w-none lg:flex-1 items-end justify-center">

            {/* Deco icons – hidden on mobile */}
            <div
              className="absolute left-2.5 top-20 z-[4] hidden lg:block"
              style={{ animation: 'floatUp 5s ease-in-out 0s infinite' }}
            >
              <svg width="96" height="74" viewBox="0 0 96 74" fill="none">
                <rect x="4" y="4" width="88" height="54" rx="7" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.08)" />
                <rect x="10" y="10" width="76" height="42" rx="4" fill="rgba(30,136,229,0.06)" />
                <text x="48" y="38" textAnchor="middle" fontFamily="monospace" fontSize="20" fontWeight="bold" fill="#1E88E5">
                  {'</>'}
                </text>
                <rect x="0" y="58" width="96" height="10" rx="3" fill="rgba(30,136,229,0.25)" stroke="#1E88E5" strokeWidth="1.5" />
                <rect x="34" y="60" width="28" height="6" rx="2" fill="rgba(30,136,229,0.4)" />
              </svg>
            </div>

            <div
              className="absolute left-7 top-48 z-[4] hidden lg:block"
              style={{ animation: 'floatUp 4s ease-in-out 0.8s infinite' }}
            >
              <svg width="60" height="72" viewBox="0 0 60 72" fill="none">
                <ellipse cx="30" cy="26" rx="24" ry="26" fill="rgba(247,147,30,0.06)" />
                <ellipse cx="30" cy="26" rx="17" ry="19" fill="rgba(247,147,30,0.08)" stroke="#F7931E" strokeWidth="2" />
                <path d="M21 45 Q21 52 30 52 Q39 52 39 45" stroke="#F7931E" strokeWidth="2" fill="none" />
                <line x1="24" y1="54" x2="36" y2="54" stroke="#F7931E" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="26" y1="58" x2="34" y2="58" stroke="#F7931E" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="30" y1="5"  x2="30" y2="2"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                <line x1="7"  y1="26" x2="4"  y2="26" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                <line x1="53" y1="26" x2="56" y2="26" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                <line x1="13" y1="11" x2="10" y2="8"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                <line x1="47" y1="11" x2="50" y2="8"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div
              className="absolute right-7 top-14 z-[4] hidden lg:block"
              style={{ animation: 'floatDown 6s ease-in-out 1.2s infinite' }}
            >
              <svg width="74" height="58" viewBox="0 0 74 58" fill="none">
                <rect x="4" y="10" width="66" height="40" rx="4" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.08)" />
                <line x1="37" y1="10" x2="37" y2="50" stroke="#1E88E5" strokeWidth="2" />
                <path d="M7 10 C7 5 37 3 37 10"  stroke="#1E88E5" strokeWidth="1.5" fill="rgba(30,136,229,0.1)" />
                <path d="M67 10 C67 5 37 3 37 10" stroke="#1E88E5" strokeWidth="1.5" fill="rgba(30,136,229,0.1)" />
                <line x1="12" y1="22" x2="32" y2="22" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
                <line x1="12" y1="28" x2="32" y2="28" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
                <line x1="12" y1="34" x2="26" y2="34" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
                <line x1="42" y1="22" x2="62" y2="22" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
                <line x1="42" y1="28" x2="62" y2="28" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
                <line x1="42" y1="34" x2="56" y2="34" stroke="#1E88E5" strokeWidth="1" opacity="0.5" />
              </svg>
            </div>

            {/* Polvís */}
            <div className="relative z-[3]">
              <Image
                src="/mascot.png"
                alt="Polvís – Mascote E-Cademy"
                width={600}
                height={660}
                priority
                className="h-[300px] md:h-[420px] lg:h-[600px] w-auto object-contain object-bottom"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 76% 80% at 50% 52%, transparent 40%, rgba(13,27,42,0.55) 62%, #0D1B2A 86%)',
                }}
              />
            </div>
          </div>

          {/* RIGHT – copy */}
          <div className="flex-1 text-center lg:text-left lg:pl-12">
            <h1 className="mb-4 text-[36px] md:text-[50px] lg:text-[62px] font-black leading-[1.12] tracking-[-1.5px]">
              Aprender é<br />
              explorar o<br />
              <span className="text-orange">mundo.</span>
            </h1>

            <p className="mb-8 mx-auto lg:mx-0 max-w-[400px] text-base md:text-lg leading-[1.65] text-muted2">
              Educação criativa, acessível e envolvente<br className="hidden md:block" />
              para transformar o futuro.
            </p>

            {/* Values row */}
            <div className="mb-8 flex flex-wrap justify-center lg:justify-start gap-5 md:gap-8">
              <ValItem label="Criatividade">
                <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
                  <circle cx="18" cy="14" r="9" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.12)" />
                  <path d="M13 23 Q13 28 18 28 Q23 28 23 23" stroke="#F7931E" strokeWidth="2" fill="none" />
                  <line x1="15" y1="30" x2="21" y2="30" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="33" x2="20" y2="33" stroke="#F7931E" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </ValItem>

              <ValItem label="Praticidade">
                <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
                  <path d="M11 30 L21 7 L25 11 L14 33" stroke="#1E88E5" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                  <circle cx="23" cy="9" r="3.5" stroke="#1E88E5" strokeWidth="1.8" fill="rgba(30,136,229,0.15)" />
                </svg>
              </ValItem>

              <ValItem label="Conexão">
                <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
                  <circle cx="18" cy="18" r="13" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.08)" />
                  <ellipse cx="18" cy="18" rx="6" ry="13" stroke="#1E88E5" strokeWidth="1.6" />
                  <line x1="5" y1="18" x2="31" y2="18" stroke="#1E88E5" strokeWidth="1.5" />
                  <path d="M7 12 Q18 10 29 12" stroke="#1E88E5" strokeWidth="1" fill="none" />
                  <path d="M7 24 Q18 26 29 24" stroke="#1E88E5" strokeWidth="1" fill="none" />
                </svg>
              </ValItem>

              <ValItem label="Paixão">
                <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9">
                  <path
                    d="M18 30 C18 30 4 20 4 12 C4 8 7.5 5 11.5 5 C13.8 5 16 6.2 18 9 C20 6.2 22.2 5 24.5 5 C28.5 5 32 8 32 12 C32 20 18 30 18 30Z"
                    stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.18)"
                  />
                </svg>
              </ValItem>
            </div>

            <Link
              href="/cursos"
              className="group inline-flex items-center gap-2.5 rounded-full bg-orange px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(247,147,30,0.5)]"
            >
              Saiba mais
              <svg
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 20 20" fill="none"
              >
                <path d="M4 10H16M11 5L16 10L11 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Bottom feature bar ─────────────────────────── */}
        <div className="relative z-10 border-t border-brand-blue/20">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-white/[0.06] lg:grid-cols-4">

            <BarItem label={<>Conteúdo de<br />qualidade</>}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 4 L24 9 L13 14 L2 9 Z" stroke="#1E88E5" strokeWidth="1.8" fill="rgba(30,136,229,0.2)" strokeLinejoin="round" />
                <path d="M6 11 L6 18 C9 21 17 21 20 18 L20 11" stroke="#1E88E5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <line x1="24" y1="9" x2="24" y2="16" stroke="#1E88E5" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="24" cy="17.5" r="1.5" fill="#1E88E5" />
              </svg>
            </BarItem>

            <BarItem label={<>Aprendizado<br />que conecta</>}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="9"  cy="8" r="4" stroke="#1E88E5" strokeWidth="1.8" fill="rgba(30,136,229,0.15)" />
                <circle cx="18" cy="8" r="4" stroke="#1E88E5" strokeWidth="1.8" fill="rgba(30,136,229,0.15)" />
                <path d="M2 22 C2 17 5 15 9 15 C11.2 15 12.8 15.8 14 17.2"  stroke="#1E88E5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M24 22 C24 17 21 15 18 15 C15.8 15 14.2 15.8 13 17.2" stroke="#1E88E5" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              </svg>
            </BarItem>

            <BarItem label={<>Desenvolvimento<br />contínuo</>}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="3"  y="16" width="5" height="8" rx="1.5" fill="rgba(30,136,229,0.25)" stroke="#1E88E5" strokeWidth="1.8" />
                <rect x="11" y="11" width="5" height="13" rx="1.5" fill="rgba(30,136,229,0.25)" stroke="#1E88E5" strokeWidth="1.8" />
                <rect x="19" y="5"  width="5" height="19" rx="1.5" fill="rgba(30,136,229,0.25)" stroke="#1E88E5" strokeWidth="1.8" />
                <path d="M3 14 L9 10 L16 8 L23 4" stroke="#F7931E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="23" cy="4" r="2" fill="#F7931E" />
              </svg>
            </BarItem>

            <BarItem label={<>Preparando hoje<br />líderes do amanhã</>}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 3 C13 3 21 5 21 14 L16.5 19 L9.5 19 L5 14 C5 5 13 3 13 3Z" stroke="#1E88E5" strokeWidth="1.8" fill="rgba(30,136,229,0.15)" />
                <circle cx="13" cy="11" r="3" stroke="#1E88E5" strokeWidth="1.5" fill="rgba(30,136,229,0.25)" />
                <path d="M9.5 19 L8 23 L12 21"  stroke="#1E88E5" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                <path d="M16.5 19 L18 23 L14 21" stroke="#1E88E5" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                <line x1="5"  y1="13" x2="2"  y2="15" stroke="#F7931E" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="21" y1="13" x2="24" y2="15" stroke="#F7931E" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </BarItem>

          </div>
        </div>
      </section>
    </main>
  )
}

function ValItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center">{children}</div>
      <span className="text-[12.5px] font-medium text-muted">{label}</span>
    </div>
  )
}

function BarItem({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 bg-[rgba(9,22,36,0.88)] px-5 py-5 lg:gap-[18px] lg:px-7 lg:py-6">
      <div className="flex h-10 w-10 lg:h-[46px] lg:w-[46px] shrink-0 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/[0.14]">
        {children}
      </div>
      <span className="text-[12.5px] font-medium leading-[1.45] text-muted2">{label}</span>
    </div>
  )
}
