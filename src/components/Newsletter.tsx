"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Inscription réussie!");
        setEmail("");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      } else {
        setStatus("error");
        setMessage(data.error || "Erreur lors de l'inscription");
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion");
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 4000);
    }
  };

  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
            Newsletter
          </h2>
          <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6">
            Conseils et offres exclusives dans votre boîte mail
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className={`flex-1 px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm ${
                status === "error" ? "border-red-400" : "border-white/20"
              }`}
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                status === "success" 
                  ? "bg-green-500 text-white" 
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : "bg-white text-indigo-600 hover:bg-white/90"
              }`}
            >
              {status === "loading" ? "..." : status === "success" ? "✓" : status === "error" ? "✕" : "S'inscrire"}
            </button>
          </form>
          
          {/* Message feedback */}
          {message && (
            <p className={`mt-3 text-sm ${status === "success" ? "text-green-200" : "text-red-200"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
