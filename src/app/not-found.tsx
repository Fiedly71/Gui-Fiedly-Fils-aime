import Link from "next/link";

export const metadata = {
  title: "Page non trouvée | G&D Digital Studio",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      
      <div className="text-center relative z-10">
        {/* 404 large text */}
        <h1 className="text-[150px] md:text-[200px] font-bold leading-none gradient-text opacity-50">
          404
        </h1>
        
        {/* Message */}
        <div className="-mt-8 md:-mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
            Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="gradient-bg text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l&apos;accueil
            </Link>
            <a
              href="https://wa.me/50932836938"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Besoin d&apos;aide ?
            </a>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-16">
          <p className="text-gray-500 mb-4">Vous cherchez peut-être :</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#services" className="glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors">
              Nos services
            </Link>
            <Link href="/tarifs" className="glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors">
              Tarifs
            </Link>
            <Link href="/commander" className="glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors">
              Commander
            </Link>
            <Link href="/a-propos" className="glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors">
              À propos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
