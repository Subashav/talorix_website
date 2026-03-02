import FloatingCards from "../components/FloatingCards";

export default function FloatingCardsSection() {
  return (
    <section className="relative flex justify-center items-center py-20 md:py-32 bg-black overflow-hidden">
      {/* Animated gradient aura background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] rounded-full blur-3xl opacity-60 animate-gradient-aura"
          style={{background: "conic-gradient(from 180deg at 50% 50%, #ff9100 0%, #a259ff 25%, #43e6ff 50%, #ff6d00 75%, #ff9100 100%)"}} />
      </div>
      <div className="relative z-10">
        <FloatingCards />
      </div>
    </section>
  );
}
