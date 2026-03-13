import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm text-gray-300 font-medium">Haïti 🌍 Diaspora 🌍 International</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Innovation
            <br />
            <span className="gradient-text">Digitale</span> en Haïti
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            Sites web complets avec <span className="text-cyan-400">Frontend</span>, <span className="text-green-400">Backend</span> et <span className="text-purple-400">panneau d&apos;administration</span>. 
            Intégration de tous les moyens de paiement: MonCash, Stripe, PayPal, Visa.
          </p>

          {/* Payment methods badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-gray-300">MonCash</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
              <span className="w-2 h-2 bg-[#635BFF] rounded-full"></span>
              <span className="text-gray-300">Stripe</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
              <span className="w-2 h-2 bg-[#003087] rounded-full"></span>
              <span className="text-gray-300">PayPal</span>
            </div>
            <div className="flex items-center gap-2 glass px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
              <span className="w-2 h-2 bg-[#1A1F71] rounded-full"></span>
              <span className="text-gray-300">Visa</span>
            </div>
          </div>

          {/* Service tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center mb-6 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3 glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-300">Frontend</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
              </svg>
              <span className="text-gray-300">Backend</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-300">Admin Panel</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifs"
              className="gradient-bg text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center glow-primary animate-pulse-glow w-full sm:w-auto"
            >
              Voir les Tarifs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="border border-gray-600 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:border-indigo-500 hover:bg-indigo-500/10 transition-all inline-flex items-center justify-center w-full sm:w-auto"
            >
              Démarrer un Projet
            </Link>
          </div>
        </div>

        {/* Project showcase cards - Optimized for mobile */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          <Link href="/services/moncash" className="glass rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 card-hover cursor-pointer group">
            <div className="aspect-square md:aspect-video bg-[#E60000] rounded-lg md:rounded-xl mb-2 md:mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/pic/mc.png" 
                alt="MonCash" 
                width={120} 
                height={120}
                className="object-contain w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-1 md:mb-2 line-clamp-1">MonCash</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm hidden sm:block">Paiement mobile</p>
          </Link>
          
          <Link href="/services/billetterie" className="glass rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 card-hover cursor-pointer group">
            <div className="aspect-square md:aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg md:rounded-xl mb-2 md:mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/pic/bi.jpg" 
                alt="Billetterie" 
                width={200} 
                height={120}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-1 md:mb-2 line-clamp-1">Billetterie</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm hidden sm:block">QR Codes sécurisés</p>
          </Link>
          
          <Link href="/services/ecommerce" className="glass rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-6 card-hover cursor-pointer group">
            <div className="aspect-square md:aspect-video bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg md:rounded-xl mb-2 md:mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="/images/pic/e.jpg" 
                alt="E-commerce" 
                width={200} 
                height={120}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform"
              />
            </div>
            <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base mb-1 md:mb-2 line-clamp-1">E-commerce</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm hidden sm:block">Commande en ligne</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
