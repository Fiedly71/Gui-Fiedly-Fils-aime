import { 
  Header, 
  Hero, 
  TrustBadges, 
  Features, 
  PaymentMethods, 
  TechStack, 
  Process,
  Guarantees,
  Portfolio, 
  Testimonials, 
  FAQ,
  Newsletter,
  CTA, 
  Contact, 
  Footer 
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <Portfolio />
        <PaymentMethods />
        <TechStack />
        <Process />
        <Guarantees />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
