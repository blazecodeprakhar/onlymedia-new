import Hero from "@/components/hero";
import LogosTicker from "@/components/logosTicker";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import WhoWeAre from "@/components/whoWeAre";
import Footer from "@/components/footer";
import StackedCardsSection from "@/components/stackedCardsSection";

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
