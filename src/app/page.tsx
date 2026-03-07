import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";

// DYNAMICALLY FETCH HUGE COMPONENTS BELOW THE FOLD ONLY WHEN NEEDED
// This drops the initial bundle size drastically, solving slow loading times.
const LogosTicker = dynamic(() => import("@/components/logosTicker"));
const Reviews = dynamic(() => import("@/components/reviews"));
const WhoWeAre = dynamic(() => import("@/components/whoWeAre"));
const Footer = dynamic(() => import("@/components/footer"));
const StackedCardsSection = dynamic(() => import("@/components/stackedCardsSection"));

export default function Home() {
  return (
    <main className={'flex flex-col'}>
      <Navbar />
      <Hero />
      <div className="content">
        <WhoWeAre />
        <LogosTicker />
        <Reviews />
      </div>
      <StackedCardsSection />
      <Footer />
    </main>
  );
}
