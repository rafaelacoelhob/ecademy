'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV = [
  { href: '/',               label: 'Início'         },
  { href: '/quem-somos',     label: 'Quem somos'     },
  { href: '/nosso-objetivo', label: 'Nosso objetivo' },
  { href: '/valores',        label: 'Valores'        },
  { href: '/contato',        label: 'Contato'        },
] as const

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 flex h-16 md:h-20 items-center justify-between px-5 md:px-16',
          'border-b border-brand-blue/10 bg-navy/90 backdrop-blur-md transition-shadow duration-300',
          scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.4)]' : '',
        ].join(' ')}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="E-Cademy – Educação & Profissão"
            width={260}
            height={72}
            priority
            className="h-[50px] md:h-[72px] w-auto object-contain [mix-blend-mode:lighten]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-9">
          {NAV.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={[
                  'relative pb-1 text-[14.5px] font-medium transition-colors duration-200',
                  'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5',
                  'after:bg-orange after:transition-transform after:duration-200',
                  active
                    ? 'text-orange after:scale-x-100'
                    : 'text-white/90 hover:text-orange after:scale-x-0 hover:after:scale-x-100',
                ].join(' ')}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden md:inline-flex rounded-full bg-orange px-7 py-3 text-[14.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(247,147,30,0.45)]"
          >
            Fale conosco
          </Link>

          {/* Hamburger – mobile only */}
          <button
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          'fixed inset-x-0 top-16 z-40 overflow-hidden border-b border-white/10 bg-navy/97 backdrop-blur-md transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`border-b border-white/[0.07] py-3 text-base font-medium last:border-0 ${
                  active ? 'text-orange' : 'text-white/90'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contato"
            className="mt-3 rounded-full bg-orange px-6 py-3 text-center text-base font-bold text-white"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </>
  )
}
