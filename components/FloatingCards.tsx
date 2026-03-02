const cards = [
  {
    title: "Job Listing",
    desc: "Modern job post UI",
    style: "left-0 top-0 rotate-[-8deg] z-10",
    border: "from-[#ff9100] via-[#a259ff] to-[#43e6ff]",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#a259ff"/><rect x="6" y="8" width="16" height="2" rx="1" fill="#fff"/><rect x="6" y="13" width="10" height="2" rx="1" fill="#fff"/><rect x="6" y="18" width="8" height="2" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    title: "Resume Upload",
    desc: "Drag & drop resume",
    style: "right-0 top-8 rotate-[6deg] z-20",
    border: "from-[#43e6ff] via-[#ff9100] to-[#a259ff]",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#43e6ff"/><path d="M14 8v8m0 0l-3-3m3 3l3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="20" width="16" height="2" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    title: "Candidate Profile",
    desc: "Showcase skills",
    style: "left-8 bottom-0 rotate-[4deg] z-30",
    border: "from-[#ff6d00] via-[#ff9100] to-[#a259ff]",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#ff9100"/><circle cx="14" cy="12" r="4" fill="#fff"/><rect x="8" y="18" width="12" height="2" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    title: "Employer Dashboard",
    desc: "Manage applicants",
    style: "right-8 bottom-0 rotate-[-5deg] z-40",
    border: "from-[#a259ff] via-[#43e6ff] to-[#ff9100]",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="8" fill="#ff6d00"/><rect x="8" y="8" width="12" height="2" rx="1" fill="#fff"/><rect x="8" y="13" width="8" height="2" rx="1" fill="#fff"/><rect x="8" y="18" width="6" height="2" rx="1" fill="#fff"/></svg>
    ),
  },
];

// Use a function to return the animation object for each card
function getFloatAnimation(i: number) {
  return {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 3.2 + i * 0.2,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
}

export default function FloatingCards() {
  return (
    <div className="relative flex items-center justify-center pointer-events-none select-none z-10">
      <div className="relative w-[440px] h-[220px]">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className={`absolute ${card.style} rounded-2xl p-4 w-48 h-32 flex flex-col items-start bg-black/70 backdrop-blur-md shadow-lg transition-all duration-300 border-2 border-transparent`}
            {...getFloatAnimation(i)}
            style={{
              boxShadow: "0 8px 32px 0 rgba(60,60,60,0.18)",
              filter: "blur(0px)",
              borderImage: `linear-gradient(90deg, var(--tw-gradient-stops)) 1`,
              borderImageSource: `linear-gradient(90deg, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))`,
              '--tw-gradient-from': card.border.split(' ')[0],
              '--tw-gradient-via': card.border.split(' ')[1],
              '--tw-gradient-to': card.border.split(' ')[2],
            }}
          >
            <div className="mb-2 scale-110 drop-shadow-lg">{card.icon}</div>
            <div className="font-semibold text-white text-base mb-1 tracking-tight">{card.title}</div>
            <div className="text-xs text-orange-200/90 font-medium">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
