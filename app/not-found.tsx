"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Sorry, the page you're looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => router.back()}
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Go Back
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Redirecting to the homepage in 5 seconds...
        </p>
      </div>
    </main>
  );
}