Below is a premium marquee implementation used in modern landing pages (similar to Stripe / Linear / Vercel aesthetics). It includes:

✨ Gradient animated outline text
✨ Logos slightly rotating while scrolling
✨ Edge fade masks (smooth entrance/exit)
✨ Seamless infinite scrolling
✨ Pause on hover
✨ Speed control

Everything works with React + Tailwind and no external library.

1️⃣ React Component (Premium Marquee)

import React from "react";

const items = [
{ type: "text", value: "EAST AFRICAN SPONSORSHIP TRUST" },
{ type: "logo", value: "/assets/images/east-dark-logo.png" },
];

const PremiumMarquee = ({ speed = 40 }) => {
const content = [...items, ...items, ...items];

return (
<section className="relative bg-black py-16 overflow-hidden">

      {/* Edge Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="group overflow-hidden">
        <div
          className="flex w-max items-center gap-16 marquee-track"
          style={{ animationDuration: `${speed}s` }}
        >
          {[...content, ...content].map((item, index) => (
            <div key={index} className="flex items-center gap-16">

              {/* Gradient Outline Text */}
              {item.type === "text" && (
                <span
                  className="
                    marquee-text
                    text-[150px]
                    leading-[180px]
                    font-semibold
                    tracking-[-0.03em]
                    whitespace-nowrap
                    max-lg:text-[120px]
                    max-md:text-[100px]
                    max-[430px]:text-[70px]
                  "
                >
                  {item.value}
                </span>
              )}

              {/* Rotating Logo */}
              {item.type === "logo" && (
                <img
                  src={item.value}
                  alt="logo"
                  className="
                    h-[150px] w-auto
                    max-md:h-[100px]
                    logo-spin
                  "
                />
              )}

              {/* Divider */}
              <div className="flex gap-6">
                <span className="w-[18px] h-[18px] border border-gray-400 rounded-full"></span>
                <span className="w-[18px] h-[18px] border border-gray-400 rounded-full"></span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>

);
};

export default PremiumMarquee;

2️⃣ Animation CSS (Add to globals.css)

/_ marquee scrolling _/
.marquee-track {
animation: marquee linear infinite;
}

.group:hover .marquee-track {
animation-play-state: paused;
}

@keyframes marquee {
from {
transform: translateX(0);
}
to {
transform: translateX(-50%);
}
}

/_ gradient outline text _/
.marquee-text {
color: transparent;
-webkit-text-stroke: 2px transparent;
background: linear-gradient(
90deg,
#ffffff,
#9ca3af,
#ffffff,
#9ca3af,
#ffffff
);
background-size: 300% 100%;
-webkit-background-clip: text;
animation: gradientShift 8s linear infinite;
}

/_ animated gradient movement _/
@keyframes gradientShift {
0% {
background-position: 0%;
}
100% {
background-position: 300%;
}
}

/_ subtle rotating logo _/
.logo-spin {
animation: logoFloat 6s ease-in-out infinite;
}

@keyframes logoFloat {
0% {
transform: rotate(-3deg);
}
50% {
transform: rotate(3deg);
}
100% {
transform: rotate(-3deg);
}
}

3️⃣ What This Adds Visually
1️⃣ Gradient Outline Animation

Instead of static stroke:

EAST AFRICAN SPONSORSHIP TRUST

The outline subtly animates across the text.

2️⃣ Rotating Logos

Logos gently oscillate:

↺ logo ↻ logo ↺

Small motion = premium feel.

3️⃣ Fade Edges

Content smoothly appears/disappears:

fade | TEXT LOGO TEXT LOGO TEXT | fade

No harsh cutoff.

4️⃣ Speed Control
<PremiumMarquee speed={30} /> // fast
<PremiumMarquee speed={50} /> // slower
5️⃣ Result

You get a very modern hero marquee like those used in:

SaaS landing pages

AI startups

design agency websites

modern Webflow templates

It feels much more premium than traditional marquees.
