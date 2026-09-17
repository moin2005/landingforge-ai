export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F7F5F2] p-6">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold mb-2">Sign in</h1>
        <p className="text-gray-600 mb-6">
          Continue to your LandingForge workspace.
        </p>

        <button className="w-full rounded-xl bg-[#F26A4B] py-3 font-medium text-white hover:opacity-90">
          Continue with Google
        </button>
      </div>
    </main>
  );
}
