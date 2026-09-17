"use client";

import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F5F2] p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
        <p className="text-gray-600 mb-6">
          Continue to your LandingForge workspace.
        </p>

        <button
          onClick={signInWithGoogle}
          className="w-full rounded-xl bg-[#F26A4B] py-3 font-medium text-white hover:opacity-90"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}