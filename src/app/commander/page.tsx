"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ServiceType = "site-web" | "logo" | "affiche" | "ecommerce" | "moncash" | "billetterie" | "";

interface FormData {
  // Infos personnelles
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  
  // Service
  service: ServiceType;
  budget: string;
  delai: string;
  
  // Questions spécifiques site web
  typeSite: string;
  nombrePages: string;
  fonctionnalites: string[];
  hebergement: string;
  
  // Questions spécifiques logo
  styleLogo: string;
  couleurs: string;
  slogan: string;
  
  // Questions spécifiques affiche
  typeAffiche: string;
  dimensions: string;
  quantite: string;
  
  // Questions spécifiques e-commerce
  nombreProduits: string;
  paiementIntegre: string[];
  livraisonZone: string;
  
  // Questions spécifiques MonCash
  typeIntegration: string;
  plateforme: string;
  
  // Questions spécifiques billetterie
  typeEvenement: string;
  capacite: string;
  dateEvenement: string;
  
  // Description
  description: string;
  
  // Paiement
  methodePaiement: string;
}

const services = [
  { id: "site-web", label: "Site Web Vitrine", icon: "🌐" },
  { id: "ecommerce", label: "Site E-commerce", icon: "🛒" },
  { id: "moncash", label: "Intégration MonCash", icon: "💳" },
  { id: "billetterie", label: "Système de Billetterie", icon: "🎫" },
  { id: "logo", label: "Création de Logo", icon: "🎨" },
  { id: "affiche", label: "Affiche / Flyer", icon: "📄" },
];

const budgets = [
  "Moins de 10,000 HTG",
  "10,000 - 25,000 HTG",
  "25,000 - 50,000 HTG",
  "50,000 - 100,000 HTG",
  "Plus de 100,000 HTG",
  "À discuter",
];

const delais = [
  "Urgent (moins d'une semaine)",
  "1-2 semaines",
  "2-4 semaines",
  "1-2 mois",
  "Flexible",
];

export default function CommanderPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    service: "",
    budget: "",
    delai: "",
    typeSite: "",
    nombrePages: "",
    fonctionnalites: [],
    hebergement: "",
    styleLogo: "",
    couleurs: "",
    slogan: "",
    typeAffiche: "",
    dimensions: "",
    quantite: "",
    nombreProduits: "",
    paiementIntegre: [],
    livraisonZone: "",
    typeIntegration: "",
    plateforme: "",
    typeEvenement: "",
    capacite: "",
    dateEvenement: "",
    description: "",
    methodePaiement: "",
  });

  const updateForm = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    if (currentArray.includes(value)) {
      updateForm(field, currentArray.filter((v) => v !== value));
    } else {
      updateForm(field, [...currentArray, value]);
    }
  };

  const generateWhatsAppMessage = () => {
    let message = `🚀 *NOUVELLE DEMANDE DE SERVICE*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `👤 *INFORMATIONS CLIENT*\n`;
    message += `• Nom: ${formData.nom}\n`;
    message += `• Email: ${formData.email}\n`;
    message += `• Téléphone: ${formData.telephone}\n`;
    if (formData.entreprise) message += `• Entreprise: ${formData.entreprise}\n`;
    message += `\n`;
    
    message += `📋 *SERVICE DEMANDÉ*\n`;
    const serviceLabel = services.find(s => s.id === formData.service)?.label || formData.service;
    message += `• Service: ${serviceLabel}\n`;
    message += `• Budget: ${formData.budget}\n`;
    message += `• Délai souhaité: ${formData.delai}\n`;
    message += `\n`;
    
    // Questions spécifiques selon le service
    if (formData.service === "site-web") {
      message += `🌐 *DÉTAILS SITE WEB*\n`;
      message += `• Type de site: ${formData.typeSite}\n`;
      message += `• Nombre de pages: ${formData.nombrePages}\n`;
      if (formData.fonctionnalites.length > 0) {
        message += `• Fonctionnalités: ${formData.fonctionnalites.join(", ")}\n`;
      }
      message += `• Hébergement: ${formData.hebergement}\n`;
    } else if (formData.service === "ecommerce") {
      message += `🛒 *DÉTAILS E-COMMERCE*\n`;
      message += `• Nombre de produits: ${formData.nombreProduits}\n`;
      if (formData.paiementIntegre.length > 0) {
        message += `• Paiements souhaités: ${formData.paiementIntegre.join(", ")}\n`;
      }
      message += `• Zone de livraison: ${formData.livraisonZone}\n`;
    } else if (formData.service === "moncash") {
      message += `💳 *DÉTAILS MONCASH*\n`;
      message += `• Type d'intégration: ${formData.typeIntegration}\n`;
      message += `• Plateforme existante: ${formData.plateforme}\n`;
    } else if (formData.service === "billetterie") {
      message += `🎫 *DÉTAILS BILLETTERIE*\n`;
      message += `• Type d'événement: ${formData.typeEvenement}\n`;
      message += `• Capacité: ${formData.capacite}\n`;
      message += `• Date: ${formData.dateEvenement}\n`;
    } else if (formData.service === "logo") {
      message += `🎨 *DÉTAILS LOGO*\n`;
      message += `• Style souhaité: ${formData.styleLogo}\n`;
      message += `• Couleurs préférées: ${formData.couleurs}\n`;
      if (formData.slogan) message += `• Slogan: ${formData.slogan}\n`;
    } else if (formData.service === "affiche") {
      message += `📄 *DÉTAILS AFFICHE*\n`;
      message += `• Type: ${formData.typeAffiche}\n`;
      message += `• Dimensions: ${formData.dimensions}\n`;
      message += `• Quantité: ${formData.quantite}\n`;
    }
    message += `\n`;
    
    if (formData.description) {
      message += `📝 *DESCRIPTION DU PROJET*\n`;
      message += `${formData.description}\n\n`;
    }
    
    message += `💰 *MODE DE PAIEMENT PRÉFÉRÉ*\n`;
    message += `• ${formData.methodePaiement}\n\n`;
    
    message += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `_Envoyé via GF Digital Studio_`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = (paymentMethod: string) => {
    updateForm("methodePaiement", paymentMethod);
    
    if (paymentMethod === "WhatsApp") {
      const message = generateWhatsAppMessage();
      window.open(`https://wa.me/50932836938?text=${message}`, "_blank");
    } else if (paymentMethod === "MonCash") {
      // Redirect to MonCash payment or show instructions
      alert("Paiement MonCash: Envoyez le montant au 32 83 69 38 et nous vous contacterons après confirmation.");
    } else if (paymentMethod === "Carte Bancaire (Stripe)") {
      // Redirect to Stripe checkout
      alert("Paiement par carte: Nous vous enverrons un lien de paiement sécurisé par email.");
    }
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.nom && formData.email && formData.telephone;
    }
    if (step === 2) {
      return formData.service && formData.budget && formData.delai;
    }
    if (step === 3) {
      // Vérifier selon le service
      if (formData.service === "site-web") {
        return formData.typeSite && formData.nombrePages;
      }
      if (formData.service === "ecommerce") {
        return formData.nombreProduits && formData.livraisonZone;
      }
      if (formData.service === "moncash") {
        return formData.typeIntegration;
      }
      if (formData.service === "billetterie") {
        return formData.typeEvenement && formData.capacite;
      }
      if (formData.service === "logo") {
        return formData.styleLogo && formData.couleurs;
      }
      if (formData.service === "affiche") {
        return formData.typeAffiche && formData.dimensions;
      }
      return true;
    }
    return true;
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <Image src="/images/gd.png" alt="GF Digital Studio" width={60} height={60} />
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Commander un <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-400">
            Remplissez le formulaire ci-dessous pour nous faire part de votre projet
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step >= s
                    ? "gradient-bg text-white"
                    : "glass text-gray-400"
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`w-8 md:w-16 h-1 mx-1 rounded ${
                    step > s ? "gradient-bg" : "bg-gray-700"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="glass rounded-2xl p-6 md:p-8">
          {/* Step 1: Informations personnelles */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">
                👤 Vos Informations
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => updateForm("nom", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Jean Baptiste"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => updateForm("telephone", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="+509 XX XX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nom de l&apos;entreprise (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.entreprise}
                  onChange={(e) => updateForm("entreprise", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Mon Entreprise SARL"
                />
              </div>
            </div>
          )}

          {/* Step 2: Choix du service */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">
                📋 Quel service souhaitez-vous ?
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => updateForm("service", service.id as ServiceType)}
                    className={`p-4 rounded-xl text-center transition-all ${
                      formData.service === service.id
                        ? "gradient-bg text-white glow-primary"
                        : "glass text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="text-2xl mb-2">{service.icon}</div>
                    <div className="text-sm font-medium">{service.label}</div>
                  </button>
                ))}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget estimé *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => updateForm("budget", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-900">Sélectionnez votre budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget} className="bg-gray-900">
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Délai souhaité *
                </label>
                <select
                  value={formData.delai}
                  onChange={(e) => updateForm("delai", e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-900">Sélectionnez un délai</option>
                  {delais.map((delai) => (
                    <option key={delai} value={delai} className="bg-gray-900">
                      {delai}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Questions spécifiques */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">
                🎯 Détails du projet
              </h2>
              
              {/* Site Web */}
              {formData.service === "site-web" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type de site *
                    </label>
                    <select
                      value={formData.typeSite}
                      onChange={(e) => updateForm("typeSite", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Vitrine simple" className="bg-gray-900">Vitrine simple</option>
                      <option value="Portfolio" className="bg-gray-900">Portfolio</option>
                      <option value="Blog" className="bg-gray-900">Blog</option>
                      <option value="Landing Page" className="bg-gray-900">Landing Page</option>
                      <option value="Site institutionnel" className="bg-gray-900">Site institutionnel</option>
                      <option value="Autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre de pages estimé *
                    </label>
                    <select
                      value={formData.nombrePages}
                      onChange={(e) => updateForm("nombrePages", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="1-3 pages" className="bg-gray-900">1-3 pages</option>
                      <option value="4-6 pages" className="bg-gray-900">4-6 pages</option>
                      <option value="7-10 pages" className="bg-gray-900">7-10 pages</option>
                      <option value="Plus de 10 pages" className="bg-gray-900">Plus de 10 pages</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Fonctionnalités souhaitées
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Formulaire de contact", "Blog intégré", "Galerie photos", "SEO optimisé", "Multilingue", "Animations"].map((func) => (
                        <button
                          key={func}
                          onClick={() => toggleArrayField("fonctionnalites", func)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all text-left ${
                            formData.fonctionnalites.includes(func)
                              ? "bg-indigo-600 text-white"
                              : "glass text-gray-300 hover:text-white"
                          }`}
                        >
                          {formData.fonctionnalites.includes(func) ? "✓ " : ""}{func}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Hébergement
                    </label>
                    <select
                      value={formData.hebergement}
                      onChange={(e) => updateForm("hebergement", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="J'ai déjà un hébergement" className="bg-gray-900">J&apos;ai déjà un hébergement</option>
                      <option value="J'ai besoin d'un hébergement" className="bg-gray-900">J&apos;ai besoin d&apos;un hébergement</option>
                      <option value="Je ne sais pas" className="bg-gray-900">Je ne sais pas</option>
                    </select>
                  </div>
                </>
              )}
              
              {/* E-commerce */}
              {formData.service === "ecommerce" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre de produits à vendre *
                    </label>
                    <select
                      value={formData.nombreProduits}
                      onChange={(e) => updateForm("nombreProduits", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="1-10 produits" className="bg-gray-900">1-10 produits</option>
                      <option value="11-50 produits" className="bg-gray-900">11-50 produits</option>
                      <option value="51-100 produits" className="bg-gray-900">51-100 produits</option>
                      <option value="Plus de 100 produits" className="bg-gray-900">Plus de 100 produits</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Méthodes de paiement à intégrer
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["MonCash", "Natcash", "Carte bancaire (Stripe)", "PayPal", "Paiement à la livraison"].map((method) => (
                        <button
                          key={method}
                          onClick={() => toggleArrayField("paiementIntegre", method)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all text-left ${
                            formData.paiementIntegre.includes(method)
                              ? "bg-indigo-600 text-white"
                              : "glass text-gray-300 hover:text-white"
                          }`}
                        >
                          {formData.paiementIntegre.includes(method) ? "✓ " : ""}{method}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Zone de livraison *
                    </label>
                    <select
                      value={formData.livraisonZone}
                      onChange={(e) => updateForm("livraisonZone", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Cap-Haïtien seulement" className="bg-gray-900">Cap-Haïtien seulement</option>
                      <option value="Nord d'Haïti" className="bg-gray-900">Nord d&apos;Haïti</option>
                      <option value="Tout Haïti" className="bg-gray-900">Tout Haïti</option>
                      <option value="International" className="bg-gray-900">International</option>
                    </select>
                  </div>
                </>
              )}
              
              {/* MonCash Integration */}
              {formData.service === "moncash" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type d&apos;intégration *
                    </label>
                    <select
                      value={formData.typeIntegration}
                      onChange={(e) => updateForm("typeIntegration", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Site web existant" className="bg-gray-900">Site web existant</option>
                      <option value="Application mobile" className="bg-gray-900">Application mobile</option>
                      <option value="Nouveau projet" className="bg-gray-900">Nouveau projet</option>
                      <option value="E-commerce" className="bg-gray-900">E-commerce</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Plateforme/Framework utilisé
                    </label>
                    <input
                      type="text"
                      value={formData.plateforme}
                      onChange={(e) => updateForm("plateforme", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Ex: WordPress, React, Laravel..."
                    />
                  </div>
                </>
              )}
              
              {/* Billetterie */}
              {formData.service === "billetterie" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type d&apos;événement *
                    </label>
                    <select
                      value={formData.typeEvenement}
                      onChange={(e) => updateForm("typeEvenement", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Concert" className="bg-gray-900">Concert</option>
                      <option value="Festival" className="bg-gray-900">Festival</option>
                      <option value="Conférence" className="bg-gray-900">Conférence</option>
                      <option value="Soirée privée" className="bg-gray-900">Soirée privée</option>
                      <option value="Événement sportif" className="bg-gray-900">Événement sportif</option>
                      <option value="Autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Capacité estimée *
                    </label>
                    <select
                      value={formData.capacite}
                      onChange={(e) => updateForm("capacite", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Moins de 100 personnes" className="bg-gray-900">Moins de 100 personnes</option>
                      <option value="100-500 personnes" className="bg-gray-900">100-500 personnes</option>
                      <option value="500-1000 personnes" className="bg-gray-900">500-1000 personnes</option>
                      <option value="Plus de 1000 personnes" className="bg-gray-900">Plus de 1000 personnes</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date de l&apos;événement
                    </label>
                    <input
                      type="date"
                      value={formData.dateEvenement}
                      onChange={(e) => updateForm("dateEvenement", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </>
              )}
              
              {/* Logo */}
              {formData.service === "logo" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Style souhaité *
                    </label>
                    <select
                      value={formData.styleLogo}
                      onChange={(e) => updateForm("styleLogo", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Minimaliste" className="bg-gray-900">Minimaliste</option>
                      <option value="Moderne" className="bg-gray-900">Moderne</option>
                      <option value="Vintage/Rétro" className="bg-gray-900">Vintage/Rétro</option>
                      <option value="Ludique/Fun" className="bg-gray-900">Ludique/Fun</option>
                      <option value="Professionnel/Corporate" className="bg-gray-900">Professionnel/Corporate</option>
                      <option value="Autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Couleurs préférées *
                    </label>
                    <input
                      type="text"
                      value={formData.couleurs}
                      onChange={(e) => updateForm("couleurs", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Ex: Bleu et blanc, Noir et or..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Slogan à inclure (optionnel)
                    </label>
                    <input
                      type="text"
                      value={formData.slogan}
                      onChange={(e) => updateForm("slogan", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="Votre slogan..."
                    />
                  </div>
                </>
              )}
              
              {/* Affiche */}
              {formData.service === "affiche" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type d&apos;affiche *
                    </label>
                    <select
                      value={formData.typeAffiche}
                      onChange={(e) => updateForm("typeAffiche", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="Flyer événement" className="bg-gray-900">Flyer événement</option>
                      <option value="Affiche publicitaire" className="bg-gray-900">Affiche publicitaire</option>
                      <option value="Menu restaurant" className="bg-gray-900">Menu restaurant</option>
                      <option value="Carte de visite" className="bg-gray-900">Carte de visite</option>
                      <option value="Bannière réseaux sociaux" className="bg-gray-900">Bannière réseaux sociaux</option>
                      <option value="Autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Dimensions *
                    </label>
                    <select
                      value={formData.dimensions}
                      onChange={(e) => updateForm("dimensions", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="A4 (21x29.7cm)" className="bg-gray-900">A4 (21x29.7cm)</option>
                      <option value="A3 (29.7x42cm)" className="bg-gray-900">A3 (29.7x42cm)</option>
                      <option value="Flyer (10x15cm)" className="bg-gray-900">Flyer (10x15cm)</option>
                      <option value="Carte de visite (8.5x5.5cm)" className="bg-gray-900">Carte de visite (8.5x5.5cm)</option>
                      <option value="Instagram (1080x1080px)" className="bg-gray-900">Instagram (1080x1080px)</option>
                      <option value="Autre" className="bg-gray-900">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Quantité de designs
                    </label>
                    <select
                      value={formData.quantite}
                      onChange={(e) => updateForm("quantite", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-gray-900">Sélectionnez</option>
                      <option value="1 design" className="bg-gray-900">1 design</option>
                      <option value="2-3 designs" className="bg-gray-900">2-3 designs</option>
                      <option value="4-5 designs" className="bg-gray-900">4-5 designs</option>
                      <option value="Plus de 5 designs" className="bg-gray-900">Plus de 5 designs</option>
                    </select>
                  </div>
                </>
              )}
              
              {/* Description commune */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Décrivez votre projet en détail
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateForm("description", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Donnez-nous plus de détails sur votre projet, vos inspirations, vos attentes..."
                />
              </div>
            </div>
          )}

          {/* Step 4: Paiement */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-6">
                💰 Choisissez votre méthode de paiement
              </h2>
              
              {/* Notice about flexible pricing */}
              <div className="p-4 bg-indigo-500/20 border border-indigo-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Service adapté à votre budget</h4>
                    <p className="text-indigo-200 text-sm">
                      Le montant que vous choisissez de payer détermine le niveau de service que vous recevrez. 
                      Plus votre investissement est important, plus votre service sera complet et personnalisé.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm">
                Sélectionnez comment vous souhaitez procéder au paiement. Votre demande sera traitée en fonction du montant choisi.
              </p>
              
              <div className="space-y-4">
                {/* Stripe Option - Premier */}
                <a
                  href="https://buy.stripe.com/4gMdR27wPfv20u27Cyffy00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-5 glass rounded-xl border border-[#635BFF]/30 hover:border-[#635BFF] transition-all group text-left block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#635BFF]/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#635BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-1">Payer par Carte Bancaire</h3>
                      <p className="text-gray-400 text-sm">Visa, Mastercard, Apple Pay via Stripe</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">Visa</span>
                      <span className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded">MC</span>
                    </div>
                  </div>
                </a>
                
                {/* WhatsApp Option - Deuxième */}
                <button
                  onClick={() => handleSubmit("WhatsApp")}
                  className="w-full p-5 glass rounded-xl border border-green-500/30 hover:border-green-500 transition-all group text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold mb-1">Discuter sur WhatsApp</h3>
                      <p className="text-gray-400 text-sm">Parlez avec notre équipe avant de payer</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
              
              {/* Summary */}
              <div className="mt-8 p-4 bg-white/5 rounded-xl">
                <h4 className="text-white font-semibold mb-3">📋 Résumé de votre demande</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white">{services.find(s => s.id === formData.service)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget:</span>
                    <span className="text-white">{formData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Délai:</span>
                    <span className="text-white">{formData.delai}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 glass rounded-xl text-gray-300 hover:text-white transition-colors"
              >
                ← Retour
              </button>
            ) : (
              <Link
                href="/"
                className="px-6 py-3 glass rounded-xl text-gray-300 hover:text-white transition-colors"
              >
                ← Accueil
              </Link>
            )}
            
            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  canProceed()
                    ? "gradient-bg text-white hover:scale-105 glow-primary"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continuer →
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
