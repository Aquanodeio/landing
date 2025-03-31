import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    // Reset states
    setStatus("loading");
    setErrorMessage("");

    // Validate email
    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            waitlist_id: 23324,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="text-center mb-24">
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2 p-1.5 bg-[#050f20] rounded-xl border border-[#1e3878]/50 shadow-lg">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-[#0d2045] rounded-lg px-4 py-3 focus:outline-none text-zinc-300 
              placeholder:text-zinc-400 placeholder:text-base min-w-0 border border-[#203c6e]/30"
            disabled={status === "loading"}
          />
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className={`h-12 animate-shimmer items-center justify-center rounded-md 
            border border-slate-800 bg-[linear-gradient(110deg,#050616,45%,#1e2631,55%,#050616)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors 
            focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
            focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed 
            disabled:hover:scale-100 disabled:hover:rotate-0 disabled:hover:translate-y-0
            ${
              status === "success"
                ? "!bg-green-500 hover:!bg-green-600 !text-white"
                : ""
            }`}
          >
            {status === "loading"
              ? "Joining..."
              : status === "success"
              ? "Joined!"
              : "Join waitlist"}
          </button>
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
        )}

        {/* Success Message */}
        {status === "success" && (
          <div className="mt-2 text-green-500 text-sm">
            Successfully joined the waitlist! Check your email for confirmation.
          </div>
        )}
      </div>

      <p className="text-zinc-300 mt-6 text-m">
        Join{" "}
        <span className="font-bold text-white/90">
          <AnimatedCounter /> {"+ "}
        </span>
        others on the waitlist
      </p>
    </div>
  );
}
