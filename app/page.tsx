import AboutOwner from "@/components/main/AboutOwner";
import Clients from "@/components/main/Clients";
import EmailList from "@/components/main/EmailList";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import HomeListings from "@/components/main/HomeListings";
import KnowledgeSection from "@/components/main/KnowledgeSection";

export default function Home() {
  return (
    <>
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
