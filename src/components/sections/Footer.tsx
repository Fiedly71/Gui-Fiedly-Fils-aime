import Link from "next/link";
import { Instagram, Mail, Phone, ExternalLink } from "lucide-react";
import { contact, heroProfile, webProjects } from "@/data/content";

const paymentMethods = [
  { name: "Wise", icon: "💳" },
  { name: "PayPal", icon: "💰" },
  { name: "MonCash", icon: "📱" },
  { name: "NatCash", icon: "🏦" },
  { name: "Stripe", icon: "💵" },
  { name: "Payoneer", icon: "💸" },
];

const footerLinks = [
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/uptodate.electronic", icon: Instagram },
      { label: "Linktree", href: "https://linktr.ee/UpToDateElectronicStore", icon: ExternalLink },
      { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
      { label: contact.phonePrimary, href: `tel:${contact.phonePrimary}`, icon: Phone },
    ],
  },
  {
    title: "Projects",
    links: webProjects.map((project) => ({
      label: project.title,
      href: project.url,
    })),
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 shadow-xl shadow-black/20"
    >
      <div className="px-6 py-10 sm:px-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">{heroProfile.studio}</h3>
              <p className="text-sm text-slate-300">{heroProfile.business}</p>
              <p className="text-sm text-slate-400">
                Creative direction, branding, web design & development
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                We accept
              </p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method.name}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
                    title={method.name}
                  >
                    <span className="text-base">{method.icon}</span>
                    {method.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
                    >
                      {"icon" in link && link.icon ? (
                        <link.icon size={16} className="text-slate-400 transition group-hover:text-cyan-300" />
                      ) : null}
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-cyan-300 transition-all group-hover:w-full" />
                      </span>
                      {link.href.startsWith("http") ? (
                        <ExternalLink size={12} className="text-slate-500" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 py-5 sm:px-10">
        <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} GF Digital Studio</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Website designed & developed by</span>
            <span className="font-semibold text-cyan-300">{heroProfile.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
