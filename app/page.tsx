import AboutOwner from "@/components/main/AboutOwner";
import Clients from "@/components/main/Clients";
import EmailList from "@/components/main/EmailList";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import HomeListings from "@/components/main/HomeListings";
import KnowledgeSection from "@/components/main/KnowledgeSection";
import Navbar from "@/components/main/Navbar";

// PRIMARY COLORS:  bg-[#ccb091] text-[#b19a55]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutOwner />
      <KnowledgeSection />
      <HomeListings />
      <Clients />

      <EmailList />

      {/* FOOTER */}
      <Footer showFirstPart />
    </>
  );
}
