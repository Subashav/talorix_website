import HeaderSection from "../../sections/header";
import StorySection from "../../sections/story";
import TrustSection from "../../sections/trust";
import FooterSection from "../../sections/footer";

export const metadata = {
  title: "About Us | Talorix",
  description: "Learn more about Talorix and our mission to revolutionize hiring with AI.",
};

export default function About() {
  return (
    <main className="overflow-x-hidden pt-14">
      <HeaderSection />
      <StorySection />
      <TrustSection />
      <FooterSection />
    </main>
  );
}
