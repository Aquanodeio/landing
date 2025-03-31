import Header from "./components/Header";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCards from "./components/FeatureCards";
import FAQ from "./components/FAQ";
import { GridBackground } from "./components/GridBackground";

function App() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(179.25deg, #0B1749 -10.65%, #08102C 59.71%, #03081B 130.06%)",
      }}
    >
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
  );
}

export default App;
