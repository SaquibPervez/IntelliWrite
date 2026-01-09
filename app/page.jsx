"use client";
import { useActionState } from "react";
import { generateCoverLetter } from "./actions";
import CoverLetterTemplate from "./components/CoverLetterTemplate";
import { SyncLoader } from "react-spinners";
import Header from "./components/Header";
import Footer from "./components/Footer";
const initialState = {
  success: false,
  coverLetter: "",
};

export default function Home() {
  const [aiResponse, submitForm, isLoading] = useActionState(
    generateCoverLetter,
    initialState
  );

  return (
    <main className="px-6">
      <Header />
      <section className="max-w-7xl mx-auto pt-8 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Craft a Professional Cover Letter
          </h1>
          <p className="mt-3 text-slate-300">
            Powered by IntelliWrite — fast, polished, and ready to send.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 border border-slate-700/30 bg-slate-900/60 backdrop-blur-md backdrop-saturate-150 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">
              Your Details
            </h2>
            <form action={submitForm} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job Title"
                  required
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  required
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
              </div>
              <textarea
                name="skills"
                placeholder="Key Skills (comma separated)"
                required
                className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400 min-h-28"
              ></textarea>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="linkedin"
                  placeholder="LinkedIn (optional)"
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
                <input
                  type="text"
                  name="github"
                  placeholder="GitHub (optional)"
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
                <input
                  type="text"
                  name="portfolio"
                  placeholder="Portfolio (optional)"
                  className="p-3 rounded bg-slate-800/60 border border-slate-700 text-slate-100 placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-purple-600 text-white px-5 py-3 font-medium hover:from-cyan-400 hover:to-purple-500 transition cursor-pointer"
              >
                {isLoading ? <div className="flex items-center gap-3">
                  Generating&nbsp;
                  <SyncLoader
 size={8} color="white" />
                </div> : `Generate Cover Letter`}
              </button>
            </form>
          </div>

          <div className="rounded-xl p-6 border border-slate-700/30 bg-slate-900/60 backdrop-blur-md backdrop-saturate-150 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Preview</h2>
            {aiResponse.coverLetter ? (
              <CoverLetterTemplate text={aiResponse.coverLetter} />
            ) : (
              <div className="text-slate-300 text-sm">
                Your letter will appear here after generation.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
