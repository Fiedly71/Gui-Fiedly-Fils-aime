"use client";

import { useEffect, useRef, useState } from "react";

const paymentMethods = [
  {
    name: "Stripe",
    logo: "/images/logos/stripe.svg",
    color: "bg-[#635BFF]",
  },
  {
    name: "Visa",
    logo: "/images/logos/visa.svg",
    color: "bg-[#1A1F71]",
  },
  {
    name: "Mastercard",
    logo: "/images/logos/mastercard.svg",
    color: "bg-[#EB001B]",
  },
  {
    name: "Apple Pay",
    logo: "/images/logos/apple-pay.svg",
    color: "bg-black",
  },
];

export default function PaymentMethods() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="paiements" className="py-12 md:py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Paiements <span className="gradient-text">sécurisés</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Stripe, Visa, Mastercard, Apple Pay et plus
          </p>
        </div>

        {/* Compact payment grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-6 mb-6">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="glass rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-center aspect-square"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`,
              }}
            >
              <div className={`w-10 h-10 md:w-16 md:h-16 ${method.color} rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3`}>
                <span className="text-white text-[8px] md:text-xs font-bold">{method.name}</span>
              </div>
              <span className="text-white text-[10px] md:text-sm font-medium text-center">{method.name}</span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
