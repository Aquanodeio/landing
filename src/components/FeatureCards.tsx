import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { useEffect, useState } from "react";

function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1200);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1200);
    setRandomString(str);
  }

  return (
    <div className="p-0.5 bg-transparent relative">
      <div
        onMouseMove={onMouseMove}
        className="group relative overflow-hidden bg-[#111111] rounded-2xl p-5 md:p-6 min-h-[180px] border border-zinc-800 transition duration-300 flex flex-col justify-center"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />

        <div className="relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-black/60 blur-sm rounded-lg -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="relative z-10 text-[20px] md:text-[22px] font-medium tracking-tight mb-2 text-zinc-300 group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-black/60 blur-sm rounded-lg -m-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative z-10 text-[#666666] group-hover:text-zinc-200 text-[13px] md:text-[14px] leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-20 px-4">
      <FeatureCard
        title="Multi-Provider Support"
        description="Built on Akash, Spheron, and other decentralized networks."
      />
      <FeatureCard
        title="10x Cost Savings"
        description="H100 GPUs for $1.5/hr vs $13.5/hr on AWS."
      />
      <FeatureCard
        title="Instant GPU Access"
        description="No approvals. Deployment in seconds."
      />
      <FeatureCard
        title="Simple Management"
        description="One platform for all compute needs."
      />
    </div>
  );
}
