import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-mark">NG</span>
            <div className="logo-text">
              <span className="logo-title">NextGenTechCare</span>
              <span className="logo-subtitle">Technology help for seniors</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">
              Get support
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
