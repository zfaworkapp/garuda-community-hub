import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import CommunityDirectory from "@/components/CommunityDirectory";
import Events from "@/components/Events";
import News from "@/components/News";
import Partners from "@/components/Partners";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";
import { MotifDivider } from "@/components/Motif";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Garuda Community Hub",
  alternateName: "GCH",
  url: "https://garudacommunityhub.id",
  logo: "https://jqkrxekvjidbbvuuidyj.supabase.co/storage/v1/object/public/asset/logo%20garuda%20hub%20community%20circle.png",
  description:
    "Rumah kolaborasi komunitas sepak bola Indonesia. Menghubungkan komunitas, suporter, keluarga, dan pecinta sepak bola untuk mendukung Garuda dan memajukan sepak bola nasional.",
  foundingDate: "2026",
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [
    "Sepak Bola Indonesia",
    "Komunitas Suporter",
    "Timnas Indonesia",
    "Nonton Bareng",
    "Matchday Experience",
  ],
  sameAs: [
    "https://www.instagram.com/garudacommunityhub",
    "https://www.youtube.com/@garudacommunityhub",
    "https://x.com/garudacommunity",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "partnership",
    email: "partnership@garudacommunityhub.id",
    availableLanguage: ["Indonesian", "English"],
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <MotifDivider />
      <About />
      <MotifDivider />
      <Stats />
      <MotifDivider />
      <Programs />
      <MotifDivider />
      <CommunityDirectory />
      <MotifDivider />
      <Events />
      <MotifDivider />
      <News />
      <MotifDivider />
      <Partners />
      <MotifDivider />
      <JoinForm />
      <Footer />
    </main>
  );
}
