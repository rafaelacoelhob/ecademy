import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos – E-Cademy',
  description: 'Em breve: todos os cursos da E-Cademy.',
}

export default function CursosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-16 md:pt-20">
      <div className="text-center px-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange/30 bg-orange/10">
          <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
            <path d="M20 8 L36 14 L20 20 L4 14 Z" stroke="#F7931E" strokeWidth="2" fill="rgba(247,147,30,0.15)" strokeLinejoin="round" />
            <path d="M8 18 L8 28 C12 32 28 32 32 28 L32 18" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" fill="none" />
            <line x1="36" y1="14" x2="36" y2="24" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="36" cy="26" r="2.5" fill="#F7931E" />
          </svg>
        </div>

        <div className="mb-3 h-1 w-14 rounded-full bg-orange mx-auto" />
        <h1 className="mb-4 text-5xl font-black">
          Cursos <span className="text-orange">em breve</span>
        </h1>
        <p className="mx-auto max-w-md text-lg leading-relaxed text-muted2">
          Estamos preparando uma grade incrível de cursos para você.
          Fique ligado — novidades chegando em breve!
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-muted transition-colors hover:border-orange/40 hover:text-white"
          >
            ← Voltar ao início
          </Link>
          <Link
            href="/contato"
            className="rounded-full bg-orange px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(247,147,30,0.4)]"
          >
            Quero ser avisado
          </Link>
        </div>
      </div>
    </main>
  )
}
