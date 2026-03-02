import HeaderSection from "../../sections/header";
import CTASection from "../../sections/cta";
import FooterSection from "../../sections/footer";

export const metadata = {
  title: "Contact | Talorix",
  description: "Get in touch with the Talorix team.",
};

export default function Contact() {
  return (
    <main className="overflow-x-hidden pt-14">
      <HeaderSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
