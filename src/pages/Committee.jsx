import MemberCard from "../components/MemberCard";
import { members } from "../data/members";

const CORE    = members.filter((m) => [1, 2, 3, 4].includes(m.id));
const TEAM    = members.filter((m) => ![1, 2, 3, 4].includes(m.id));

export default function Committee() {
  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="bg-gradient-to-b from-saffron-50 to-white py-16 px-4 text-center border-b border-gray-100">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold text-saffron-400 mb-3">The People</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Committee</h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Meet the dedicated volunteers and leaders who make Yukti Ganesh Mandal's celebrations possible every year.
          </p>
        </div>
      </section>

      {/* Core Committee */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Leadership</p>
            <h2 className="section-title">Core Committee</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {CORE.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-16 px-4 bg-saffron-50 border-t border-saffron-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">Our Team</p>
            <h2 className="section-title">Extended Committee</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-14 px-4 bg-white border-t border-gray-100 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-4xl mb-4">🤝</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Want to Join Our Volunteer Team?</h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We're always looking for enthusiastic volunteers to help us make Ganesh Chaturthi bigger and better in Bhalki. Reach out to us!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron-400 text-white font-semibold text-sm hover:bg-saffron-500 transition-colors shadow-sm"
          >
            Get in Touch →
          </a>
        </div>
      </section>

    </div>
  );
}