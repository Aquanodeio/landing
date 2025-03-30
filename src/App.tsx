import Header from "./components/Header";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCards from "./components/FeatureCards";
import FAQ from "./components/FAQ";
import { GridBackground } from "./components/GridBackground";
import GlobeDisplay from "./components/GlobeDisplay";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Grid Background for top part only */}
      <div className="absolute top-0 left-0 right-0 h-[90vh] -z-10">
        <GridBackground />
      </div>

      {/* Gradient fade out */}
      <div className="absolute top-[80vh] left-0 right-0 h-[30vh] bg-gradient-to-b from-transparent to-black -z-10"></div>

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

          {/* Globe section */}
          <div className="mt-24 mb-16">
            <h2 className="text-3xl md:text-4xl text-center mb-8 font-semibold">
              Global On-Chain Deployments
            </h2>
            <GlobeDisplay />
          </div>

          <div className="bg-black pt-16">
            <FAQ />
            <div className="text-center text-zinc-400 text-sm mt-8">
              © 2024 Splito
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
