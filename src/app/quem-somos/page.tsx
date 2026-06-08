import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quem somos – E-Cademy',
  description: 'Conheça a E-Cademy, a plataforma de educação digital que conecta pessoas ao conhecimento.',
}

const CARDS = [
  {
    num: '01',
    title: 'Nossa Missão',
    text: 'Democratizar o acesso à educação de qualidade, formando profissionais criativos e preparados para os desafios do mercado moderno.',
    border: 'border-brand-blue/20',
    numColor: 'text-brand-blue',
  },
  {
    num: '02',
    title: 'Nossa Visão',
    text: 'Ser referência em educação tecnológica no Brasil, impactando milhares de estudantes com conteúdo inovador, prático e transformador.',
    border: 'border-orange/20',
    numColor: 'text-orange',
  },
  {
    num: '03',
    title: 'Nosso Compromisso',
    text: 'Oferecer experiências de aprendizado envolventes, com suporte personalizado e conteúdo sempre atualizado para o cenário atual.',
    border: 'border-brand-blue/20',
    numColor: 'text-brand-blue',
  },
]

const STATS = [
  { value: '10k+', label: 'Alunos matriculados' },
  { value: '50+',  label: 'Cursos disponíveis' },
  { value: '98%',  label: 'Satisfação dos alunos' },
  { value: '5★',   label: 'Avaliação média' },
]

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(30,136,229,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20 text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange" />
          <h1 className="mb-5 text-4xl md:text-5xl font-black leading-tight">
            Quem <span className="text-orange">somos</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted2">
            A E-Cademy é uma plataforma de educação digital criada para conectar pessoas ao
            conhecimento de forma criativa, prática e acessível. Acreditamos que aprender é
            uma jornada contínua e emocionante — e estamos aqui para guiar cada passo.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-brand-blue/10 bg-brand-blue/[0.04]">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center bg-navy px-8 py-8 md:px-12 md:py-10">
              <span className="text-3xl md:text-4xl font-black text-orange">{value}</span>
              <span className="mt-1 text-center text-sm text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map(({ num, title, text, border, numColor }) => (
            <div
              key={title}
              className={`rounded-2xl border ${border} bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
            >
              <div className={`mb-4 text-5xl font-black opacity-40 ${numColor}`}>{num}</div>
              <h3 className="mb-3 text-xl font-bold">{title}</h3>
              <p className="text-[15px] leading-relaxed text-muted2">{text}</p>
            </div>
          ))}
        </div>

        {/* About E-Cademy narrative */}
        <div className="mt-12 md:mt-16 rounded-2xl border border-brand-blue/15 bg-white/[0.02] p-6 md:p-10">
          <h2 className="mb-5 text-3xl font-black">
            Por que a <span className="text-orange">E-Cademy?</span>
          </h2>
          <div className="grid gap-8 text-[15px] leading-relaxed text-muted2 md:grid-cols-2">
            <p>
              Nascemos da crença de que a educação de qualidade deve estar ao alcance de todos.
              Com uma equipe apaixonada por tecnologia e ensino, desenvolvemos um ambiente onde
              alunos de todo o Brasil podem aprender, crescer e se conectar.
            </p>
            <p>
              Nossa mascote, o Polvís, representa exatamente o que somos: inteligentes, curiosos,
              multitarefas e sempre conectados. Assim como um polvo explora os oceanos com seus
              tentáculos, nós exploramos o mundo do conhecimento em múltiplas direções.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/cursos"
            className="group inline-flex items-center gap-2.5 rounded-full bg-orange px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(247,147,30,0.5)]"
          >
            Ver nossos cursos
            <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M11 5L16 10L11 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </main>
  )
}
