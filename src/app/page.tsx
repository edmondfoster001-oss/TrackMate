export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-2xl font-bold text-indigo-600">TrackMate</span>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 py-28">
        <span className="text-sm font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full mb-6">
          Now in Beta
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight max-w-2xl mb-6">
          Track your code.<br />
          <span className="text-indigo-600">Ship with confidence.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mb-10">
          TrackMate helps developers monitor progress, manage tasks, and collaborate seamlessly — all in one place.
        </p>
        <div className="flex gap-4">
          <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Start for free
          </a>
          <a href="#features" className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            See how it works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Everything you need</h2>
          <p className="text-center text-gray-500 mb-14">Built for developers who want to stay on top of their projects.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Task Tracking",
                desc: "Create, assign, and track tasks with real-time updates across your team.",
              },
              {
                icon: "📊",
                title: "Progress Insights",
                desc: "Visualize your project's health with charts, burndowns, and velocity metrics.",
              },
              {
                icon: "🔔",
                title: "Smart Alerts",
                desc: "Get notified about blockers, deadlines, and team activity before they become problems.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="flex flex-col items-center text-center px-6 py-24">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Join thousands of developers already using TrackMate to ship better software, faster.
        </p>
        <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Create your free account
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-8 py-6 flex items-center justify-between text-sm text-gray-400">
        <span>© 2026 TrackMate. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
