import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import { useEffect, useState } from "react";

function CardPattern() {
  return (
    <div className="pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150.67deg, #060D24 4.04%, #0C1329 18.42%, #050A20 55.75%, #050B2C 80.64%, #041B3D 106.16%)",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      />
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
    <div
      className="relative h-full box-border"
      style={{ boxSizing: "border-box" }}
    >
      <div
        className="relative overflow-hidden h-full transition duration-300"
        style={{
          borderRadius: "30px",
          border: "2px solid #0F5A9C",
        }}
      >
        <CardPattern />

        <div className="relative h-full flex flex-col p-8 z-10">
          <div className="h-32 flex items-start">
            <h3 className="text-3xl font-medium leading-tight text-white">
              {title}
            </h3>
          </div>
          <div className="flex-1">
            <p className="text-xl leading-relaxed text-[#a3b1d6]">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20 px-8">
      <FeatureCard
        title="Multi-Provider Support"
        description="Built on Akash Spheron, and other decentralized networks."
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
