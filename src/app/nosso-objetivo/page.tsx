import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nosso Objetivo – E-Cademy',
  description: 'Conheça os objetivos que movem a E-Cademy na transformação da educação digital.',
}

const OBJECTIVES = [
  {
    num: '01',
    title: 'Educação Acessível',
    text: 'Eliminar barreiras financeiras e geográficas, tornando o aprendizado de qualidade disponível para todos os brasileiros, independentemente de onde estejam.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="24" cy="24" r="19" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.08)" />
        <ellipse cx="24" cy="24" rx="9" ry="19" stroke="#1E88E5" strokeWidth="1.8" />
        <line x1="5" y1="24" x2="43" y2="24" stroke="#1E88E5" strokeWidth="1.8" />
        <path d="M8 16 Q24 12 40 16" stroke="#1E88E5" strokeWidth="1.2" fill="none" />
        <path d="M8 32 Q24 36 40 32" stroke="#1E88E5" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Inovação Constante',
    text: 'Utilizar as mais modernas tecnologias e metodologias para criar experiências de aprendizado únicas, dinâmicas e alinhadas com o mercado do futuro.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M24 6 L30 16 L42 16 L32 24 L36 34 L24 26 L12 34 L16 24 L6 16 L18 16 Z"
          stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.12)" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Formação Profissional',
    text: 'Preparar alunos para o mercado de trabalho com habilidades técnicas e comportamentais que fazem a diferença — do primeiro emprego ao próximo nível de carreira.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <path d="M24 8 L42 16 L24 24 L6 16 Z" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.12)" strokeLinejoin="round" />
        <path d="M12 20 L12 34 C16 38 32 38 36 34 L36 20" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="42" y1="16" x2="42" y2="28" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="42" cy="30" r="2.5" fill="#1E88E5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Comunidade Engajada',
    text: 'Criar uma rede de alunos e professores que colaboram, se inspiram e crescem juntos — porque o aprendizado é ainda mais poderoso quando é compartilhado.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10">
        <circle cx="16" cy="16" r="7" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.12)" />
        <circle cx="32" cy="16" r="7" stroke="#1E88E5" strokeWidth="2" fill="rgba(30,136,229,0.12)" />
        <path d="M4 40 C4 30 9 26 16 26 C20 26 23 28 25 31" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M44 40 C44 30 39 26 32 26 C28 26 25 28 23 31" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
]

export default function NossoObjetivoPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(30,136,229,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20 text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange" />
          <h1 className="mb-5 text-4xl md:text-5xl font-black leading-tight">
            Nosso <span className="text-orange">objetivo</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted2">
            Transformar o futuro da educação, criando uma geração de profissionais mais
            preparados, criativos e conectados ao mundo digital.
          </p>
        </div>
      </div>

      {/* Objectives */}
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {OBJECTIVES.map(({ num, title, text, icon }) => (
            <div
              key={num}
              className="group flex gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white/[0.05]"
            >
              <div className="shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.08] transition-colors duration-300 group-hover:bg-brand-blue/[0.14]">
                  {icon}
                </div>
              </div>
              <div>
                <div className="mb-1 text-xs font-bold tracking-widest text-orange/70">{num}</div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-[15px] leading-relaxed text-muted2">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-orange/20 bg-orange/[0.05] p-10 text-center">
          <h2 className="mb-3 text-3xl font-black">
            Pronto para começar sua <span className="text-orange">jornada?</span>
          </h2>
          <p className="mb-8 text-muted2">
            Explore nossos cursos e dê o primeiro passo rumo à sua evolução profissional.
          </p>
          <Link
            href="/cursos"
            className="group inline-flex items-center gap-2.5 rounded-full bg-orange px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(247,147,30,0.5)]"
          >
            Explorar cursos
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M11 5L16 10L11 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  )
}
