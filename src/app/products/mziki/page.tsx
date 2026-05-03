import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Mziki",
  description:
    "Mziki is Tanzania's Piano City. Stream Amapiano and house DJ mixes, follow DJs, watch live Piano Sessions, and find the weekend's events.",
};

const BLACK = "#0A0A0A";
const NEON = "#39FF14";
const PURPLE = "#1A0533";

const FEATURES: { t: string; b: string }[] = [
  {
    t: "DJ mix uploads",
    b: "Long-form mixes (30 to 120 minutes) with cover art and tracklist. MP3 and WAV. Stream and download.",
  },
  {
    t: "Curated playlists",
    b: "Sunday Chill, Weekend Hype, Late Night, Bongo x Piano. Moods to match the moment.",
  },
  {
    t: "Live Piano Sessions",
    b: "Every weekend, live, unfiltered. The biggest DJs streaming directly to the platform, in real time.",
  },
  {
    t: "DJ profiles",
    b: "Bio, mix catalogue, follower count, booking contact, upcoming events. The home page for every working DJ.",
  },
  {
    t: "Event calendar",
    b: "Weekend events across Dar, Zanzibar, and Arusha. Lineup, venue, ticket link. Never miss a session again.",
  },
  {
    t: "Mziki Radio",
    b: "Genre-curated 24/7 streams. Weekend Hype, Chill Mode, Bongo Classics. Tap and let the groove run.",
  },
];

const GENRES = [
  ["Amapiano", "🎹"],
  ["Deep House", "🌌"],
  ["Bongo x Piano", "🇹🇿"],
  ["Afrobeats", "🥁"],
  ["Late Night", "🌃"],
  ["Sunday Chill", "🌅"],
];

const TRENDING = [
  { dj: "DJ Maphorisa Selekta", title: "Sunday Service Vol. 04", genre: "Amapiano", plays: "127K" },
  { dj: "King Tone", title: "Late Night Tape · April", genre: "Late Night", plays: "98K" },
  { dj: "Bongo Piano Crew", title: "Weekend Hype 2026", genre: "Bongo x Piano", plays: "84K" },
];

const AUDIENCES: [string, string][] = [
  [
    "Music fans",
    "Tanzanian and East African listeners who follow Amapiano, house, Bongo Flava, and the weekend culture.",
  ],
  [
    "DJs",
    "Local artists who want to upload mixes, grow a real fanbase, get bookings, and host live weekend sessions.",
  ],
  [
    "Event organisers",
    "Clubs, promoters, and rooftop event organisers listing the weekend's biggest sessions across Dar, Zanzibar, Arusha.",
  ],
];

export default function MzikiPage() {
  return (
    <>
      <section
        className="relative overflow-hidden text-white py-16 sm:py-[110px] sm:pb-[120px]"
        style={{
          background: `linear-gradient(135deg, ${BLACK} 0%, ${PURPLE} 60%, ${BLACK} 100%)`,
        }}
      >
        {/* Audio visualizer hint */}
        <svg
          className="absolute opacity-[0.18]"
          style={{ bottom: 40, left: 0, right: 0, width: "100%", height: 200 }}
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          {Array.from({ length: 60 }).map((_, i) => {
            const h = 40 + Math.abs(Math.sin(i * 0.7) * 60) + (i % 3) * 20;
            return (
              <rect
                key={i}
                x={i * 14 + 4}
                y={(200 - h) / 2}
                width={6}
                height={h}
                rx={3}
                fill={NEON}
              />
            );
          })}
        </svg>

        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <div
              className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
              style={{ color: NEON }}
            >
              mziki.co.tz · Tanzania&apos;s Piano City
            </div>
            <h1 className="display-lg mt-5 font-extrabold tracking-[-0.035em]">
              The groove
              <br />
              <span style={{ color: NEON }}>lives here.</span>
            </h1>
            <p className="text-xl leading-[1.55] text-white/85 mt-7 max-w-[540px] font-light">
              DJ mix discovery, live Piano Sessions, and the weekend&apos;s biggest events, built around the Amapiano and house movement that owns Tanzania&apos;s weekends.
            </p>
            <div className="flex gap-3 mt-9 flex-wrap">
              <a
                href="https://www.mziki.co.tz"
                className="inline-flex items-center font-bold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: NEON, color: BLACK }}
              >
                Stream now →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
              >
                Upload as DJ
              </a>
            </div>
            <div className="grid grid-cols-3 gap-11 mt-14">
              {[
                ["500+", "DJs"],
                ["2M+", "Plays"],
                ["Live", "Every weekend"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-extrabold text-[36px] tracking-[-0.025em] leading-none" style={{ color: NEON }}>
                    {n}
                  </div>
                  <div className="text-[11px] text-white/60 mt-2 uppercase tracking-[0.08em] font-semibold">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mix player card */}
          <div
            className="rounded-[22px] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hidden lg:block backdrop-blur"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(57,255,20,0.2)",
            }}
          >
            <div
              className="rounded-2xl aspect-square grid place-items-center mb-5 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${NEON}, #00B800, ${PURPLE})`,
              }}
            >
              <div className="absolute inset-0 opacity-30" style={{ background: BLACK }} />
              <div className="relative text-center">
                <div className="text-6xl">🎹</div>
                <div
                  className="font-bold text-2xl mt-3"
                  style={{ color: "#fff" }}
                >
                  Sunday Service
                </div>
                <div className="text-xs mt-1 text-white/80">Vol. 04 · 78 min</div>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-white/55 font-bold">
                Now playing
              </div>
              <div className="font-bold text-lg mt-1">DJ Maphorisa Selekta</div>
              <div className="text-[12px] text-white/55 mt-0.5">Amapiano · Tanzania</div>
            </div>

            {/* Waveform / progress */}
            <div className="mt-4 flex items-center gap-2">
              {Array.from({ length: 30 }).map((_, i) => {
                const active = i < 12;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-full"
                    style={{
                      height: 4 + (Math.abs(Math.sin(i * 0.9)) * 16),
                      background: active ? NEON : "rgba(255,255,255,0.15)",
                    }}
                  />
                );
              })}
            </div>

            <div className="flex justify-between text-[11px] text-white/55 mt-2 font-mono">
              <span>32:14</span>
              <span>−45:32</span>
            </div>

            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="text-white/70 text-xl">⏮</button>
              <button
                className="w-12 h-12 rounded-full grid place-items-center text-2xl"
                style={{ background: NEON, color: BLACK }}
              >
                ▶
              </button>
              <button className="text-white/70 text-xl">⏭</button>
            </div>

            <div
              className="mt-5 p-3 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-2"
              style={{ background: "rgba(57,255,20,0.1)", color: NEON }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: NEON }}
              />
              127,482 plays · trending #1
            </div>
          </div>
        </Container>
      </section>

      {/* Trending */}
      <section className="py-20 sm:py-24" style={{ background: BLACK, color: "#fff" }}>
        <Container>
          <div className="flex justify-between items-end gap-10 mb-10 flex-wrap">
            <div>
              <div
                className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
                style={{ color: NEON }}
              >
                Trending mixes
              </div>
              <h2 className="h-section mt-3.5 max-w-[820px] font-extrabold tracking-[-0.03em]">
                The weekend&apos;s biggest sets. <span className="text-white/55">Already on rotation.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TRENDING.map((m) => (
              <div
                key={m.title}
                className="p-1 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${NEON}33, transparent)`,
                  border: "1px solid rgba(57,255,20,0.2)",
                }}
              >
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <div
                    className="aspect-square rounded-xl grid place-items-center text-5xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${NEON}, ${PURPLE})`,
                    }}
                  >
                    🎧
                  </div>
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.1em] font-bold"
                    style={{ color: NEON }}
                  >
                    {m.genre}
                  </div>
                  <div className="font-bold text-lg mt-1">{m.title}</div>
                  <div className="text-[12px] text-white/55 mt-0.5">{m.dj}</div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                    <span className="font-mono text-[12px] text-white/55">▶ {m.plays} plays</span>
                    <button
                      className="text-[11px] font-bold px-3 py-1 rounded-full"
                      style={{ background: NEON, color: BLACK }}
                    >
                      PLAY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Genres */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <div className="eyebrow" style={{ color: BLACK }}>
              Genre moods
            </div>
            <h2 className="h-section mt-3.5 max-w-[820px] mx-auto font-light tracking-[-0.03em] text-ink-950">
              Six moods. <span className="text-ink-500">For every hour of the weekend.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {GENRES.map(([name, emoji]) => (
              <div
                key={name}
                className="p-5 rounded-2xl border border-ink-200 bg-white text-center hover:border-ink-950 transition-colors"
              >
                <div className="text-3xl">{emoji}</div>
                <div className="font-bold text-sm mt-2 text-ink-950">{name}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24" style={{ background: "#F5F5F5" }}>
        <Container>
          <div className="eyebrow" style={{ color: BLACK }}>
            What&apos;s on the platform
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Six tools. <span className="text-ink-500">Built for Tanzania&apos;s weekend culture.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.t}
                className="p-6 rounded-2xl bg-white border border-ink-200 flex flex-col gap-2.5"
              >
                <div
                  className="w-9 h-9 rounded-lg grid place-items-center font-bold font-mono"
                  style={{ background: BLACK, color: NEON }}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </div>
                <div className="font-bold text-lg tracking-[-0.015em] text-ink-950">{f.t}</div>
                <div className="text-sm leading-[1.55] text-ink-600 font-light">{f.b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Piano Sessions full-width */}
      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: BLACK }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${NEON}40, transparent 60%)`,
          }}
        />
        <Container className="relative text-center">
          <div
            className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
            style={{ color: NEON }}
          >
            Piano Sessions
          </div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto font-extrabold tracking-[-0.03em]">
            Every weekend. <span style={{ color: NEON }}>Live. Unfiltered.</span>
          </h2>
          <p className="text-lg sm:text-xl leading-[1.55] text-white/75 mt-6 max-w-[640px] mx-auto font-light">
            Tanzania&apos;s biggest DJs going live, every Friday, Saturday, and Sunday. Fans tune in from anywhere. The energy stays in the room.
          </p>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.mziki.co.tz/sessions"
              className="inline-flex items-center font-bold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ background: NEON, color: BLACK }}
            >
              Watch live →
            </a>
          </div>
        </Container>
      </section>

      {/* Audiences */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="eyebrow" style={{ color: BLACK }}>
            Who it&apos;s for
          </div>
          <h2 className="h-section mt-3.5 max-w-[820px] font-light tracking-[-0.03em] text-ink-950">
            Three audiences. <span className="text-ink-500">One scene.</span>
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {AUDIENCES.map(([t, b]) => (
              <div
                key={t}
                className="p-8 bg-white border border-ink-200 rounded-2xl"
              >
                <div className="font-bold text-[22px] tracking-[-0.01em] text-ink-950">{t}</div>
                <div className="text-sm text-ink-600 leading-[1.55] mt-2.5 font-light">{b}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-20 sm:py-[140px] relative overflow-hidden text-white"
        style={{ background: BLACK }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at center, ${NEON}40, transparent 70%)`,
          }}
        />
        <Container className="relative text-center">
          <div
            className="font-mono text-[11px] tracking-[0.18em] font-semibold uppercase"
            style={{ color: NEON }}
          >
            The weekend starts here
          </div>
          <h2 className="h-section mt-3.5 max-w-[960px] mx-auto font-extrabold tracking-[-0.03em]">
            Stream the city. <span style={{ color: NEON }}>Send a mix to your crew.</span>
          </h2>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <a
              href="https://www.mziki.co.tz"
              className="inline-flex items-center font-bold text-base px-7 py-4 rounded-2xl transition-all hover:opacity-90"
              style={{ background: NEON, color: BLACK }}
            >
              Stream now →
            </a>
            <a
              href="/contact"
              className="inline-flex items-center bg-transparent text-white border border-white/35 hover:bg-white/10 font-semibold text-base px-7 py-4 rounded-2xl transition-all"
            >
              Upload as DJ
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
