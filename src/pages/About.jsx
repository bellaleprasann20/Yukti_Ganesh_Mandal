const FEATURES = [
  {
    icon: <span className="text-3xl">🛕</span>,
    title: "Founded 2022",
    desc: "Yukti Ganesh Mandal was established in 2022 by a group of passionate and devoted youth of Bhalki who wanted to celebrate Ganesh Chaturthi in a grand, meaningful way.",
  },
  {
    icon: <span className="text-3xl">🪔</span>,
    title: "09-Day Festival",
    desc: "We celebrate all 9 days from Ganesh Chaturthi to Anant Chaturdashi with daily morning and evening aartis, bhajans, and cultural programs.",
  },
  {
    icon: <span className="text-3xl">❤️</span>,
    title: "Community Spirit",
    desc: "Our mandal brings every section of Bhalki society together — from elders to youth — for prayer, fun, and community bonding.",
  },
  {
  icon: <span className="text-3xl">🤝</span>,
  title: "Unity & Togetherness",
  desc: "Bringing diverse hearts together in pure devotion, building a stronger community bond under Bappa's blessings every year.",
},
  {
    icon: <span className="text-3xl">👥</span>,
    title: "Youth Empowerment",
    desc: "We give a platform to local youth for organizing events, showcasing talents, and developing leadership skills.",
  },
  {
    icon: <span className="text-3xl">⭐</span>,
    title: "Cultural Preservation",
    desc: "We promote traditional folk arts, Kannada culture, and devotional music to keep our heritage alive for future generations.",
  },
];

const STATS = [
  { value: "2022", label: "Year Founded",         icon: <span className="text-xl">📅</span> },
  { value: "09",   label: "Days of Festival",     icon: <span className="text-xl">🪔</span> },
  { value: "500+", label: "Devotees Every Year",  icon: <span className="text-xl">👥</span> },
  { value: "5+",   label: "Years Celebrated",     icon: <span className="text-xl">⭐</span> },
];

const TIMELINE = [
  {
    year: "2026",
    title: "Coming Soon ✨",
    desc: "Preparing for our grandest celebration yet! This year's festival will bring enhanced cultural events, expanded social drives, and deeper community integration across Bhalki.",
  },
  {
    year: "2025",
    title: "The Future",
    desc: "Planning an even grander festival with better facilities, more cultural programs, and initiatives for community development across Bhalki.",
  },
  {
    year: "2024",
    title: "Grand Celebration",
    desc: "Biggest celebration yet with 500+ devotees. Introduced bhajan sandhya, children's programs, and expanded donations drive for community welfare.",
  },
  {
    year: "2023",
    title: "Growing Bigger",
    desc: "Second year saw double the participation. Added youth sports events, cultural nights, and a community feast. Adopted eco-friendly idol for the first time.",
  },
  {
    year: "2022",
    title: "The Beginning",
    desc: "Yukti Ganesh Mandal was founded by local youth of Bhalki. First ever pandal was set up with great enthusiasm. Around 200+ devotees participated in the inaugural celebration.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Page Header with Public Banner Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 text-center border-b border-gray-100 before:absolute before:inset-0 before:bg-black/60"
        style={{ backgroundImage: 'url(/images/ganapati-banner.jpg)' }} // Removed extra quotes inside url()
      >
        <div className="relative max-w-2xl mx-auto z-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-300 mb-3">Who We Are</p>
          <h1 className="text-4xl font-extrabold text-white mb-4">About Our Mandal</h1>
          <p className="text-gray-200 text-base leading-relaxed">
            Learn about the story, mission, and values behind Yukti Ganesh Mandal — a community-driven celebration of devotion in Bhalki since 2022.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Born from Devotion &amp; Community Love</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>
                Yukti Ganesh Mandal was founded in <strong className="text-gray-800">2022</strong> by a group of young, enthusiastic residents of Bhalki, Karnataka, who shared a deep devotion to Lord Ganesha and a desire to bring their community together.
              </p>
              <p>
                What started as a small neighbourhood celebration has grown into one of Bhalki's most anticipated festivals, with hundreds of devotees joining every year for 10 days of prayers, cultural events, and community service.
              </p>
              <p>
                Our mandal is built on the values of <strong className="text-gray-800">unity, devotion, culture, and sustainability</strong>. We believe Ganesh Chaturthi is not just a festival — it's an opportunity to strengthen the bonds of our community.
              </p>
            </div>
          </div>

          {/* Illustration placeholder */}
          <div className="rounded-3xl bg-saffron-50 border border-saffron-100 flex flex-col items-center justify-center py-16 px-8 text-center gap-4">
            <div className="text-8xl">🪔</div>
            <p className="text-saffron-600 font-bold text-lg">Yukti Ganesh Mandal</p>
            <p className="text-saffron-400 text-sm">Bhalki, Karnataka · Est. 2022</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
              📍 Bidar District, Karnataka
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-saffron-50 border-y border-saffron-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-saffron-100 shadow-sm">
              <div className="mb-2">{s.icon}</div>
              <p className="text-3xl font-extrabold text-saffron-500 mb-1">{s.value}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our Values &amp; Mission</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-saffron-200 hover:shadow-md transition-all duration-300">
                <div className="mb-4">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-saffron-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Year by Year</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-saffron-200" />
            <div className="space-y-8">
              {TIMELINE.map((t) => (
                <div key={t.year} className="flex gap-6 items-start">
                  <div className="relative z-10 shrink-0 w-12 h-12 rounded-full bg-saffron-400 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    {t.year.slice(2)}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 hover:border-saffron-200 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-saffron-500 bg-saffron-100 px-2 py-0.5 rounded-full">{t.year}</span>
                      <h3 className="font-semibold text-gray-900 text-sm">{t.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}