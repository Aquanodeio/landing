import Header from "./components/Header";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCards from "./components/FeatureCards";
import FAQ from "./components/FAQ";
import { GridBackground } from "./components/GridBackground";
import AuroraBackground from "./components/AuroraBackground";

function App() {
  return (
    <AuroraBackground className="min-h-screen">
      <div className="min-h-screen relative overflow-hidden">
        {/* GridBackground container - extended to full page height for subtle transition */}
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>

        <div className="relative z-10 px-4 py-8 text-white">
          {/* <div
            className="absolute -top-24 -right-72 w-[700px] h-[700px] pointer-events-none opacity-50"
            style={{
              backgroundImage: 'url("/bg.svg")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
            }}
          /> */}
          <div className="max-w-7xl mx-auto relative">
            <Header />
            <WaitlistForm />
            <FeatureCards />

            <div className="pt-16">
              <FAQ />
              <div className="text-center text-zinc-400 text-sm mt-8">
                © 2025 Aquanode
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}

export default App;
