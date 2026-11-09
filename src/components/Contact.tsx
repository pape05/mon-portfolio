import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'

const FORMSPREE_ID = 'mnpndldd'

const spring = { type: 'spring' as const, stiffness: 100, damping: 20 }

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError(false)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-32 md:py-44 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
        >
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter leading-none mb-14">
            Travaillons ensemble
          </h2>

          <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <p className="text-lg text-muted leading-relaxed mb-12 max-w-[50ch]">
                Vous avez un projet en tête ou souhaitez simplement échanger ?
                N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-accent" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">Email</p>
                    <a
                      href="mailto:papeamadousarr476@icloud.com"
                      className="text-base font-medium text-primary hover:text-accent transition-colors"
                    >
                      papeamadousarr476@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-accent" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">Téléphone / WhatsApp</p>
                    <a
                      href="https://wa.me/221761397586"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-medium text-primary hover:text-accent transition-colors"
                    >
                      +221 76 139 75 86
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-accent" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">Localisation</p>
                    <p className="text-base font-medium text-primary">Dakar, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-green-500/8 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} className="text-green-500" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">Disponibilité</p>
                    <p className="text-base font-medium text-green-500">Disponible pour un stage</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={spring}
                  className="h-full flex items-center justify-center bg-surface rounded-xl border border-border p-10"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/8 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={18} className="text-accent" strokeWidth={1.8} />
                    </div>
                    <p className="text-lg font-semibold text-primary mb-1">Message envoyé</p>
                    <p className="text-sm text-muted">Merci, je vous répondrai rapidement.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-primary text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-primary text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-primary text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500">
                      Une erreur est survenue. Réessayez ou contactez-moi directement par email.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light active:scale-[0.98] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {sending ? (
                      <>
                        Envoi en cours
                        <Loader2 size={15} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Envoyer
                        <Send size={15} strokeWidth={1.8} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
