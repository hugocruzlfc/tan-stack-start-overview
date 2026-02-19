import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Mail } from 'lucide-react'

export default function Footer() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'News' },
  ]

  return (
    <footer className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/">Logo</Link>
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                asChild
                variant={'ghost'}
                size={'sm'}
                className="text-muted-foreground -mx-2"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row-reverse">
          <Button
            variant={'ghost'}
            size="sm"
            className="text-muted-foreground -mx-2"
            asChild
          >
            <a href="#">
              <Mail className="size-4" />
              hello@email.io
            </a>
          </Button>
          <p className="text-muted-foreground text-sm/6">
            © 2025 Blookie, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
