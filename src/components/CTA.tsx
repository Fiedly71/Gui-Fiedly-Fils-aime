import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Lancez votre projet
            <br />
            <span className="gradient-text">dès aujourd&apos;hui</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto">
            Transformez vos idées en réalité digitale. Intégration MonCash, billetterie QR Code, 
            e-commerce - démarrez en quelques minutes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifs"
              className="gradient-bg text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center glow-primary"
            >
              Voir les Tarifs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="border border-gray-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all inline-flex items-center justify-center"
            >
              Contacter l&apos;équipe
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
