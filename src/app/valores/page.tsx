import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Valores – E-Cademy',
  description: 'Os princípios que guiam cada decisão na E-Cademy.',
}

const VALUES = [
  {
    title: 'Inovação',
    description: 'Buscamos soluções criativas para gerar impacto positivo.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="20" cy="16" r="10" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.12)" />
        <path d="M15 26 Q15 31 20 31 Q25 31 25 26" stroke="#F7931E" strokeWidth="2" fill="none" />
        <line x1="17" y1="33" x2="23" y2="33" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="36" x2="21" y2="36" stroke="#F7931E" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20" y1="4"  x2="20" y2="2"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
        <line x1="8"  y1="16" x2="6"  y2="16" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
        <line x1="34" y1="16" x2="36" y2="16" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
        <line x1="11" y1="9"  x2="9"  y2="7"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="9"  x2="31" y2="7"  stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Criatividade',
    description: 'Estimulamos ideias originais que transformam o futuro.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path d="M20 6 C24 6 32 10 32 20 C32 28 26 34 20 34 C14 34 8 28 8 20 C8 10 16 6 20 6Z"
          stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.1)" />
        <path d="M14 22 Q14 16 20 14 Q26 16 26 22" stroke="#F7931E" strokeWidth="1.8" fill="none" />
        <circle cx="16" cy="22" r="2" fill="#F7931E" />
        <circle cx="24" cy="22" r="2" fill="#F7931E" />
        <path d="M16 27 Q20 30 24 27" stroke="#F7931E" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Qualidade',
    description: 'Comprometidos com a excelência em tudo o que fazemos.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path
          d="M20 4 L23 13 L33 13 L25 19 L28 28 L20 22 L12 28 L15 19 L7 13 L17 13 Z"
          stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.15)" strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Ética',
    description: 'Agimos com integridade, transparência e respeito em todas as relações.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <path d="M20 5 L32 10 L32 20 C32 28 26 34 20 36 C14 34 8 28 8 20 L8 10 Z"
          stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.1)" />
        <path d="M14 20 L18 24 L26 16" stroke="#F7931E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Engajamento',
    description: 'Valorizamos pessoas e promovemos colaboração.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="14" cy="14" r="6" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.12)" />
        <circle cx="27" cy="14" r="6" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.12)" />
        <path d="M4 34 C4 26 8 22 14 22 C18 22 21 24 22.5 27" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M36 34 C36 26 32 22 27 22 C23 22 20.5 24 19.5 27" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M20 28 C21 26 23 25 20 25 C17 25 19 26 20 28Z" fill="#F7931E" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: 'Autenticidade',
    description: 'Somos verdadeiros em nossas atitudes e comunicações.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
        <circle cx="20" cy="14" r="7" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.12)" />
        <path d="M8 34 C8 26 13 22 20 22 C27 22 32 26 32 34" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="28" cy="10" r="5" fill="#0D1B2A" stroke="#F7931E" strokeWidth="1.5" />
        <path d="M25.5 10 L27 11.5 L30.5 8" stroke="#F7931E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ValoresPage() {
  return (
    <main className="min-h-screen pt-20">

      {/* Hero section */}
      <div className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(30,136,229,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-8 py-20 text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange" />
          <h1 className="mb-5 text-5xl font-black leading-tight">
            Nossos <span className="text-orange">valores</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted2">
            Os princípios que guiam cada decisão, cada conteúdo e cada interação na E-Cademy.
            São a base de tudo o que construímos juntos.
          </p>
        </div>
      </div>

      {/* Values grid */}
      <div className="mx-auto max-w-5xl px-8 py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(247,147,30,0.1)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange/10 transition-colors duration-300 group-hover:bg-orange/15">
                {icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="text-[15px] leading-relaxed text-muted2">{description}</p>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
