import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Aquanode provide such low prices?",
    answer:
      "By leveraging decentralized networks like Akash and Spheron, we can provide compute resources at a fraction of the cost of centralized cloud providers. Our platform efficiently aggregates and manages these resources to deliver up to 10x savings.",
  },
  {
    question: "What types of GPUs are available?",
    answer:
      "We offer a wide range of GPUs including NVIDIA H100, A100, L4, and more. Our platform automatically matches your workload with the most cost-effective GPU option.",
  },
  {
    question: "How long does it take to get access to GPUs?",
    answer:
      "Immediate access! Unlike traditional cloud providers that require approval processes taking days or weeks, Aquanode provides instant access to GPUs - reducing setup time from days to seconds.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support both traditional payment methods (credit/debit cards, bank transfers) and cryptocurrency payments, giving you maximum flexibility.",
  },
  {
    question: "Is Aquanode suitable for enterprise use?",
    answer:
      "Absolutely! Our platform is designed to scale from individual developers to large enterprises. We offer enterprise-grade security, reliability, and support for mission-critical workloads.",
  },
  {
    question: "How do you handle provider reliability?",
    answer:
      "Our proprietary technology monitors provider reliability in real-time and automatically migrates workloads if performance issues are detected, ensuring maximum uptime for your applications.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const hasScrolledDown = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        hasScrolledDown.current = true;

        if (faqRef.current && isElementInViewport(faqRef.current)) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasScrolledDown.current) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          window.removeEventListener("scroll", handleScroll);
        }
      },
      {
        threshold: 0.1,
      }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className={`max-w-3xl mx-auto mb-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2
        className="text-4xl mb-12 font-semibold bg-clip-text text-transparent text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(243 244 246) 0%, rgb(199 203 209) 55%, rgb(30 30 30) 90%)",
        }}
      >
        We've got the answers
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-3xl transition-colors duration-200 ease-in-out ${
              openIndex === index ? "bg-[#03081B]" : ""
            }`}
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-light text-lg text-zinc-200">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              )}
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-zinc-400">{faq.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
