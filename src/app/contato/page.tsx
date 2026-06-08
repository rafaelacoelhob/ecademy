'use client'

import { useState } from 'react'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main className="min-h-screen pt-16 md:pt-20">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(30,136,229,0.08)_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20 text-center">
          <div className="mx-auto mb-4 h-1 w-14 rounded-full bg-orange" />
          <h1 className="mb-5 text-4xl md:text-5xl font-black leading-tight">
            Entre em <span className="text-orange">contato</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted2">
            Tem dúvidas sobre nossos cursos, parcerias ou quer saber mais sobre a E-Cademy?
            Nossa equipe está pronta para te atender.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 px-5 md:px-8 py-12 md:py-20 md:grid-cols-[1fr_1.6fr]">

        {/* Info column */}
        <div className="flex flex-col gap-6">

          <div className="rounded-2xl border border-brand-blue/15 bg-white/[0.03] p-7">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.12]">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="#1E88E5" strokeWidth="2" />
                <path d="M2 8 L12 14 L22 8" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <p className="mb-1 text-sm font-semibold text-muted">E-mail marketing</p>
            <a
              href="mailto:mktecademy@gmail.com"
              className="text-base font-medium text-white transition-colors hover:text-orange"
            >
              mktecademy@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-brand-blue/15 bg-white/[0.03] p-7">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/[0.12]">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <circle cx="12" cy="12" r="9" stroke="#1E88E5" strokeWidth="2" />
                <path d="M12 7 L12 13 L16 13" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mb-1 text-sm font-semibold text-muted">Horário de atendimento</p>
            <p className="text-base font-medium text-white">Seg – Sex, 9h às 18h</p>
          </div>

          <div className="rounded-2xl border border-orange/15 bg-orange/[0.04] p-7">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-orange/[0.12]">
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M20 6 L12 14 L4 6" stroke="#F7931E" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6 L4 18 L20 18 L20 6 L4 6Z" stroke="#F7931E" strokeWidth="2" strokeLinejoin="round" fill="rgba(247,147,30,0.08)" />
              </svg>
            </div>
            <p className="mb-1 text-sm font-semibold text-muted">Resposta em até</p>
            <p className="text-base font-medium text-orange">24 horas úteis</p>
          </div>

        </div>

        {/* Form */}
        <div className="rounded-2xl border border-brand-blue/15 bg-white/[0.03] p-8">
          <h2 className="mb-6 text-2xl font-bold">Envie uma mensagem</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted">Nome</label>
                <input
                  type="text" required placeholder="Seu nome"
                  className="rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-orange"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted">E-mail</label>
                <input
                  type="email" required placeholder="seu@email.com"
                  className="rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-orange"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-muted">Assunto</label>
              <select
                required
                className="rounded-xl border border-white/[0.1] bg-navy px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange"
              >
                <option value="">Selecione um assunto</option>
                <option value="cursos">Dúvidas sobre cursos</option>
                <option value="parceria">Parceria</option>
                <option value="suporte">Suporte</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-muted">Mensagem</label>
              <textarea
                required rows={5} placeholder="Como podemos te ajudar?"
                className="resize-none rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-colors focus:border-orange"
              />
            </div>

            <button
              type="submit"
              className={`mt-2 rounded-xl px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 ${
                sent
                  ? 'bg-green-500 hover:shadow-[0_8px_24px_rgba(34,197,94,0.4)]'
                  : 'bg-orange hover:shadow-[0_8px_28px_rgba(247,147,30,0.45)]'
              }`}
            >
              {sent ? '✓ Mensagem enviada!' : 'Enviar mensagem'}
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}
