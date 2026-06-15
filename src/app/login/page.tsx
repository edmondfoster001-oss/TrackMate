"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-5">
        <Link href="/">
          <Image
            src="/trackmate logo.png"
            alt="TrackMate"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <p className="text-sm text-white/35">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
            Sign up free
          </Link>
        </p>
      </div>

      {/* Center card */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-600/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-black text-center mb-2">Welcome back</h1>
          <p className="text-center text-white/35 mb-8 text-sm">
            Log in to your TrackMate account
          </p>

          <form onSubmit={handleLogin} className="space-y-4">

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-600/60 focus:bg-white/[0.07] transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-white/60">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-red-500 hover:text-red-400 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-600/60 focus:bg-white/[0.07] transition-all"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2.5 bg-red-600/10 border border-red-600/20 rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-500 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white font-black py-3 rounded-xl transition-colors shadow-lg shadow-red-900/30 tracking-wide mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Logging in…
                </span>
              ) : (
                "Log in"
              )}
            </button>
          </form>

          <p className="text-center text-xs text-white/20 mt-8">
            By logging in you agree to our{" "}
            <Link href="#" className="underline hover:text-white/40 transition-colors">Terms</Link>
            {" "}and{" "}
            <Link href="#" className="underline hover:text-white/40 transition-colors">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center py-5 text-xs text-white/15">
        © 2026 TrackMate. All rights reserved.
      </div>
    </div>
  );
}
