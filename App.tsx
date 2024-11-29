import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { USPs } from './components/USPs';
import { Languages } from './components/Languages';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF6E5] to-white">
      <Header />
      <main>
        <div className="hero-gradient">
          <Hero />
        </div>
        <div className="feature-gradient">
          <USPs />
        </div>
        <Features />
        <Languages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}