import React, { useEffect, useRef, useState } from "react";
import { Truck, ShieldCheck, BadgePercent } from "lucide-react";

const trustItems = [
  {
    title: "Fast Delivery",
    subtitle: "Same-day on select items",
    icon: Truck,
    color: "text-lime-400",
    delay: 0,
  },
  {
    title: "Secure Payments",
    subtitle: "100% encrypted checkout",
    icon: ShieldCheck,
    color: "text-blue-500",
    delay: 100,
  },
  {
    title: "Best Prices",
    subtitle: "Price-match guarantee",
    icon: BadgePercent,
    color: "text-emerald-500",
    delay: 200,
  },
];

const TrustBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto mt-8 w-[92%] pb-12"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-16 opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
              }}
            >
              <div className="flex items-center gap-3 rounded-xl border border-gray-800 px-4 py-3 hover:border-gray-600 transition-colors duration-300 hover:bg-gray-900/30">
                <Icon
                  className={`${item.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  strokeWidth={1.5}
                  size={18}
                />

                <div>
                  <h3 className="text-sm font-medium leading-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;