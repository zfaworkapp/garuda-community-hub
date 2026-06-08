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

export default function Home() {
  return (
    <main>
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
