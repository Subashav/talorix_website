
import HeaderSection from "../sections/header";
import HeroSection from "../sections/hero";
import StorySection from "../sections/story";
import AIInterviewSection from "../sections/ai-interview";
import RecruiterAdvantageSection from "../sections/recruiter-advantage";
import CandidateAdvantageSection from "../sections/candidate-advantage";
import TrustSection from "../sections/trust";
import CTASection from "../sections/cta";
import FooterSection from "../sections/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-14">
      <HeaderSection />
      <HeroSection />
      <StorySection />
      <AIInterviewSection />
      <RecruiterAdvantageSection />
      <CandidateAdvantageSection />
      <TrustSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
