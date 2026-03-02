import HeaderSection from "../../sections/header";
import AIInterviewSection from "../../sections/ai-interview";
import RecruiterAdvantageSection from "../../sections/recruiter-advantage";
import CandidateAdvantageSection from "../../sections/candidate-advantage";
import FooterSection from "../../sections/footer";

export const metadata = {
  title: "Features | Talorix",
  description: "Discover the powerful features of Talorix platform.",
};

export default function Features() {
  return (
    <main className="overflow-x-hidden pt-14">
      <HeaderSection />
      <AIInterviewSection />
      <RecruiterAdvantageSection />
      <CandidateAdvantageSection />
      <FooterSection />
    </main>
  );
}
