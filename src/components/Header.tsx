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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between px-16',
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
          className="h-[72px] w-auto object-contain [mix-blend-mode:lighten]"
        />
      </Link>

      <nav className="flex gap-9">
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

      <Link
        href="/contato"
        className="rounded-full bg-orange px-7 py-3 text-[14.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(247,147,30,0.45)]"
      >
        Fale conosco
      </Link>
    </header>
  )
}

