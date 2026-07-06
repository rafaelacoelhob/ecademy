import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos – E-Cademy',
  description: 'Conheça todos os cursos da E-Cademy.',
}

interface Curso {
  nome: string
  descricao: string
  categoria: string
  carga_horaria: string
  nivel: string
  link: string
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
}

function parseCSV(text: string): Curso[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []

  const headers = lines[0].split(',').map(h =>
    h.trim().replace(/^"|"$/g, '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '_')
  )

  return lines.slice(1)
    .map(line => {
      const values = parseCSVLine(line)
      const obj: Record<string, string> = {}
      headers.forEach((h, i) => {
        obj[h] = (values[i] ?? '').trim().replace(/^"|"$/g, '')
      })
      return obj as unknown as Curso
    })
    .filter(c => c.nome?.trim())
}

async function fetchCursos(): Promise<Curso[]> {
  const sheetUrl = process.env.CURSOS_SHEET_URL
  if (!sheetUrl) return []
  try {
    const res = await fetch(sheetUrl, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return parseCSV(await res.text())
  } catch {
    return []
  }
}

const nivelColor: Record<string, string> = {
  iniciante:     'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  intermediario: 'bg-brand-blue/15 text-brand-lblue border-brand-blue/30',
  avancado:      'bg-orange/15 text-orange border-orange/30',
}

function nivelBadge(nivel: string) {
  const key = nivel.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
  return nivelColor[key] ?? 'bg-white/10 text-muted border-white/20'
}

export default async function CursosPage() {
  const cursos = await fetchCursos()

  if (cursos.length === 0) {
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

  return (
    <main className="min-h-screen pt-28 pb-20 px-4">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 h-1 w-14 rounded-full bg-orange mx-auto" />
          <h1 className="mb-4 text-5xl font-black">
            Nossos <span className="text-orange">Cursos</span>
          </h1>
          <p className="mx-auto max-w-lg text-lg text-muted2">
            Escolha seu curso e comece a aprender hoje mesmo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cursos.map((curso, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-navy-light p-6 transition-all hover:border-orange/30 hover:shadow-[0_8px_32px_rgba(247,147,30,0.08)]"
            >
              {/* Categoria */}
              {curso.categoria && (
                <span className="mb-3 inline-block w-fit rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                  {curso.categoria}
                </span>
              )}

              {/* Nome */}
              <h2 className="mb-2 text-xl font-bold leading-snug text-white">
                {curso.nome}
              </h2>

              {/* Descrição */}
              {curso.descricao && (
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted2">
                  {curso.descricao}
                </p>
              )}

              {/* Meta */}
              <div className="mt-auto">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  {curso.nivel && (
                    <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${nivelBadge(curso.nivel)}`}>
                      {curso.nivel}
                    </span>
                  )}
                  {curso.carga_horaria && (
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {curso.carga_horaria}
                    </span>
                  )}
                </div>

                {curso.link ? (
                  <a
                    href={curso.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-orange py-2.5 text-center text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(247,147,30,0.4)]"
                  >
                    Baixar material →
                  </a>
                ) : (
                  <div className="block w-full rounded-full border border-white/10 py-2.5 text-center text-sm font-semibold text-muted">
                    Em breve
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
