import Link from 'next/link'
import { Brain, MapPin, Phone } from 'lucide-react'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Enterprise Solutions', path: '/enterprise' },
  { name: 'Cooperate With Us', path: '/cooperate' },
  { name: 'Submit a Project', path: '/submit-project' },
  { name: 'About', path: '/about' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Synurix
              </span>
            </Link>
            <p className="text-sm text-white/60">
              Engineering intelligence through connection. Building reliable AI systems for enterprise.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Central Office – Dubai</h4>

              <address className="not-italic space-y-2 text-sm text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div>Synurix Technologies – Central Office</div>
                    <div>Office 604, IFZA Business Park</div>
                    <div>Dubai Silicon Oasis</div>
                    <div>Dubai, United Arab Emirates</div>
                  </div>
                </div>

                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a
                      href="tel:+97145567819"
                      className="text-sm text-white/70 hover:text-blue-400 transition-colors"
                    >
                      +971 4 556 7819
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <a
                      href="tel:+989123404548"
                      className="text-sm text-white/70 hover:text-blue-400 transition-colors"
                    >
                      +98 912 340 4548
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>Synurix © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
