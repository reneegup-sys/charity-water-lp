import { createFileRoute } from "@tanstack/react-router";
import { MapPin, HandCoins, ShieldCheck, Coffee, ArrowRight } from "lucide-react";
import heroAsset from "@/assets/nepal-hero.jpg.asset.json";
import jerryCanAsset from "@/assets/jerry-can.png.asset.json";
const heroImage = heroAsset.url;
const jerryCanUrl = jerryCanAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

function JerryCanLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={jerryCanUrl} alt="charity: water jerry can" className="h-8 w-auto" />
      <span className="text-lg font-extrabold tracking-tight text-navy">
        charity: <span className="italic font-medium">water</span>
      </span>
    </div>
  );
}

function CtaButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a href="#give" className={`btn-yellow ${className}`}>
      <Coffee className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-light-gray/60 bg-cream/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <JerryCanLogo />
          <CtaButton className="text-sm px-4 py-2 hidden sm:inline-flex">
            Give what you'd spend on coffee
          </CtaButton>
          <a href="#give" className="btn-yellow sm:hidden text-xs px-3 py-2">
            <Coffee className="h-4 w-4" /> Give
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="order-2 md:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-3 py-1 text-xs font-semibold text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              Built for the next generation of givers
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
              Impact you can<br />
              <span className="relative inline-block">
                actually verify.
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-yellow/70 -z-0" aria-hidden="true" />
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
              The most transparent way to fund clean water — built for people who care where their money goes.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton className="text-base">Give what you'd spend on coffee</CtaButton>
              <a href="#why" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-terracotta">
                See how it works <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-charcoal/60">100% of your donation funds the project. No cut. No fees.</p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-peach/50 -rotate-2" aria-hidden="true" />
              <img
                src={heroImage}
                alt="A young woman in Nepal laughing joyfully at a clean water tap in her village"
                width={1536}
                height={1536}
                className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-soft"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-soft md:block">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/60">GPS-tagged project</div>
                    <div className="text-sm font-bold text-navy">Sindhupalchok, Nepal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="bg-dusty">
        <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
          <p className="text-center text-lg font-semibold leading-relaxed text-white sm:text-xl md:text-2xl">
            <span className="text-yellow">771 million people</span> lack access to clean water.
            <span className="block sm:inline"> You can help change that.</span>
          </p>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Why smart givers pick charity: water</h2>
          <p className="mt-4 text-base text-charcoal/75">
            We built the model around one question — where did the money actually go?
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: HandCoins, title: "100% funds water projects", desc: "Every dollar from public donations goes directly to clean water. Private donors cover our overhead." },
            { icon: MapPin, title: "GPS-tagged, every time", desc: "See exactly where your donation lands — pinned on a map, with photos of the completed well." },
            { icon: ShieldCheck, title: "Trusted globally", desc: "More than 1.6 million donors have funded over 137,000 water projects across 29 countries." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-light-gray/70 bg-white p-6 transition-shadow hover:shadow-soft">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-yellow">
                <Icon className="h-6 w-6 text-navy" />
              </div>
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-peach/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-5 md:py-24">
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-terracotta p-8 text-white">
              <div className="text-6xl font-black leading-none">14</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-widest opacity-90">hours a week</div>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                is what a girl in rural Nepal used to spend walking for water. Now she spends them in school.
              </p>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="mb-3 text-xs font-bold uppercase tracking-widest text-terracotta">A story from the field</div>
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Sunita used to walk three hours for water. Now it's outside her door.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/80">
              Before the new tap arrived in her village in Sindhupalchok, Sunita's whole morning belonged to the river.
              Two heavy jerry cans, a steep climb, then school — if she made it in time. Today her walk is thirty seconds.
              Her grades are up. Her little sister started kindergarten. And the whole village helped choose where the tap would stand.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              That's what clean water actually does — it doesn't just quench thirst. It gives people back their time,
              their health, and their choices.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="give" className="bg-navy">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Small amount.<br className="sm:hidden" />
            <span className="text-yellow"> Real water.</span> Real proof.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-white/75">
            Skip one coffee this week. Fund clean water for someone who's never had it — and we'll show you exactly where it went.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[5, 10, 25, 50].map((amt) => (
              <button
                key={amt}
                className="rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-yellow hover:bg-yellow hover:text-navy"
              >
                ${amt}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton className="text-base">Give what you'd spend on coffee</CtaButton>
          </div>
          <p className="mt-6 text-xs text-white/50">
            Secure checkout. Tax-deductible in the US. You'll see your project on the map.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-light-gray bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
          <div>
            <JerryCanLogo />
            <p className="mt-2 max-w-sm text-sm text-charcoal/65">
              Bringing clean and safe drinking water to people in developing countries.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold text-navy">
            <a href="#" className="hover:text-terracotta">About</a>
            <a href="#give" className="hover:text-terracotta">Donate</a>
            <a href="#" className="hover:text-terracotta">Contact</a>
          </nav>
        </div>
        <div className="border-t border-light-gray/70">
          <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-charcoal/50">
            © {new Date().getFullYear()} charity: water. Campaign concept for educational purposes.
          </div>
        </div>
      </footer>
    </div>
  );
}
