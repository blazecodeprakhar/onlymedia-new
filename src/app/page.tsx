import AboutApp from "@/components/aboutApp";
import Benefits from "@/components/benefits";
import Blog from "@/components/blog";
import Features from "@/components/features";
import Hero from "@/components/hero";
import LogosTicker from "@/components/logosTicker";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Reviews from "@/components/reviews";

export default function Home() {
  return (
    <main className={'flex flex-col gap-30'}>
      <Navbar />
      <Hero />
      <div className="content">
        <LogosTicker />
        <AboutApp />
        <Features />
        <Benefits />
        <Reviews />
        <Pricing />
        <Blog />
      </div>
    </main>
  );
}
