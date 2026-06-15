import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5 bg-black/90 backdrop-blur-md">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image src="/trackmate logo.png" alt="TrackMate" width={160} height={48} className="h-10 w-auto" priority />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-white/50 hover:text-white transition-colors px-3 py-1.5">
            Log in
          </Link>
          <Link href="/signup" className="text-sm bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg font-bold transition-colors tracking-wide">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-6 pt-28 pb-24 overflow-hidden">
        {/* Red glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-700/15 rounded-full blur-[120px] pointer-events-none" />

        <span className="relative text-xs font-bold bg-red-600/10 text-red-500 border border-red-600/20 px-3 py-1 rounded-full mb-6 tracking-widest uppercase">
          Nigerian Logistics · Now Live
        </span>

        <h1 className="relative text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl mb-6">
          Deliver faster.<br />
          <span className="text-red-600">Track smarter.</span>
        </h1>

        <p className="relative text-lg text-white/40 max-w-xl mb-10 leading-relaxed">
          TrackMate gives logistics businesses and their customers real-time visibility
          over every shipment — from pickup to delivered.
        </p>

        <div className="relative flex flex-wrap justify-center gap-3">
          <a
            href="/signup"
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-xl shadow-red-900/30 tracking-wide"
          >
            Start Tracking Free
          </a>
          <a
            href="#how-it-works"
            className="border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 px-8 py-3.5 rounded-xl font-semibold transition-colors"
          >
            See how it works
          </a>
        </div>

        {/* Tracking card mockup */}
        <div className="relative mt-20 w-full max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl shadow-black">
            {/* Card header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Image src="/trackmate logo.png" alt="TrackMate" width={100} height={30} className="h-6 w-auto" />
              </div>
              <span className="text-xs text-white/30 font-mono">TRK-00492817</span>
            </div>

            {/* Tracking steps */}
            <div className="px-6 py-6 space-y-5">
              {[
                { label: "Order Placed", time: "Jun 15 · 8:02 AM", done: true, active: false },
                { label: "Picked Up", time: "Jun 15 · 10:45 AM", done: true, active: false },
                { label: "In Transit — Lagos Hub", time: "Jun 15 · 2:30 PM", done: false, active: true },
                { label: "Out for Delivery", time: "Estimated today", done: false, active: false },
                { label: "Delivered", time: "—", done: false, active: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 border-2 ${
                    step.done
                      ? "bg-red-600 border-red-600"
                      : step.active
                      ? "border-red-600 bg-red-600/20"
                      : "border-white/15 bg-transparent"
                  }`} />
                  <div className="flex-1 flex items-center justify-between">
                    <span className={`text-sm font-medium ${step.active ? "text-white" : step.done ? "text-white/60" : "text-white/25"}`}>
                      {step.label}
                    </span>
                    <span className={`text-xs font-mono ${step.active ? "text-red-500" : "text-white/25"}`}>
                      {step.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/5 bg-red-600/5 flex items-center justify-between">
              <span className="text-xs text-white/30">ETA</span>
              <span className="text-sm font-bold text-red-500">Today, 5:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/5 bg-white/[0.02] py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { value: "50k+", label: "Deliveries tracked" },
            { value: "1,200+", label: "Active businesses" },
            { value: "99.4%", label: "On-time accuracy" },
            { value: "Real-time", label: "Live updates" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-white">{s.value}</p>
              <p className="text-sm text-white/35 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">Everything your logistics needs</h2>
          <p className="text-center text-white/35 mb-16 max-w-xl mx-auto">
            Built for courier companies, e-commerce businesses, and their customers across Nigeria and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <TrackIcon />,
                title: "Real-Time Tracking",
                desc: "Customers follow every step of their delivery live — from your warehouse to their door.",
              },
              {
                icon: <NotifyIcon />,
                title: "SMS & Email Alerts",
                desc: "Automatic notifications keep customers informed at every stage without manual effort.",
              },
              {
                icon: <DashboardIcon />,
                title: "Dispatcher Dashboard",
                desc: "Manage all your riders, routes, and deliveries from one powerful command center.",
              },
              {
                icon: <ProofIcon />,
                title: "Proof of Delivery",
                desc: "Capture signatures and photos on delivery. Resolve disputes instantly with timestamped records.",
              },
              {
                icon: <AnalyticsIcon />,
                title: "Performance Analytics",
                desc: "Track on-time rates, rider performance, and delivery zones to cut costs and improve speed.",
              },
              {
                icon: <ApiIcon />,
                title: "API & Integrations",
                desc: "Plug TrackMate into your existing store, app, or ERP with our simple REST API.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group bg-[#111] hover:bg-[#181818] border border-white/5 hover:border-red-600/20 rounded-2xl p-6 transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600/10 text-red-500 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-base font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-red-600 mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">Simple. Fast. Reliable.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Create a shipment",
                desc: "Log the package details and assign a rider or courier. A unique tracking ID is generated instantly.",
              },
              {
                step: "02",
                title: "Share the link",
                desc: "Send your customer their tracking link via SMS or email. They see live status without needing an account.",
              },
              {
                step: "03",
                title: "Delivered & confirmed",
                desc: "Capture proof of delivery on the spot. Your dashboard updates automatically.",
              },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-start">
                <span className="text-5xl font-black text-red-600/20 mb-3 tabular-nums">{s.step}</span>
                <h3 className="text-base font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="px-6 py-24">
        <div className="max-w-3xl mx-auto relative rounded-3xl overflow-hidden border border-red-900/30 bg-gradient-to-br from-red-950/40 to-black p-12 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-800/15 rounded-full blur-[80px]" />
          </div>
          <div className="relative flex justify-center mb-6">
            <Image src="/trackmate logo.png" alt="TrackMate" width={180} height={54} className="h-14 w-auto" />
          </div>
          <h2 className="relative text-3xl sm:text-4xl font-black mb-4">
            Ready to deliver better?
          </h2>
          <p className="relative text-white/40 mb-8 max-w-md mx-auto">
            Join 1,200+ logistics businesses already using TrackMate to delight their customers.
            Free to start — no credit card needed.
          </p>
          <a
            href="/signup"
            className="relative inline-block bg-red-600 hover:bg-red-500 text-white px-10 py-3.5 rounded-xl font-black transition-colors shadow-xl shadow-red-900/40 tracking-wide"
          >
            Create Free Account
          </a>
          <p className="relative mt-4 text-xs text-white/20">Free for up to 50 shipments/month · No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/25">
          <Image src="/trackmate logo.png" alt="TrackMate" width={120} height={36} className="h-8 w-auto opacity-60" />
          <span>© 2026 TrackMate. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}


function TrackIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function NotifyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  );
}

function ProofIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
