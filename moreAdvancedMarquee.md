Below is a next-level marquee component similar to what you see on award-winning landing pages (Awwwards / Stripe / Linear / Vercel-style).
It includes all advanced features plus a few additional production improvements.

✨ Features

Seamless infinite scrolling

Scroll-direction reactive (changes direction based on page scroll)

Animated gradient outline text

Logos gently rotate

Logo scale on hover

Pause on hover

Edge fade masks

GPU-accelerated animation

Dynamic content

Adjustable speed

Fully responsive

1️⃣ Advanced Marquee React Component

import { useEffect, useRef, useState } from "react";

const items = [
{ type: "text", value: "EAST AFRICAN SPONSORSHIP TRUST" },
{ type: "logo", value: "/assets/images/east-dark-logo.png" },
];

export default function AdvancedMarquee({ speed = 40 }) {
const [direction, setDirection] = useState("normal");
const lastScroll = useRef(0);

useEffect(() => {
const handleScroll = () => {
const current = window.scrollY;

      if (current > lastScroll.current) {
        setDirection("normal");
      } else {
        setDirection("reverse");
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

}, []);

const content = [...items, ...items, ...items];

return (
<section className="relative overflow-hidden bg-black py-20">

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="group overflow-hidden">

        <div
          className={`flex w-max items-center gap-20 marquee-track ${direction}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {[...content, ...content].map((item, i) => (
            <div key={i} className="flex items-center gap-16">

              {/* Gradient outline text */}
              {item.type === "text" && (
                <span className="marquee-text whitespace-nowrap
                  text-[150px] leading-[180px]
                  font-semibold tracking-[-0.03em]
                  max-lg:text-[120px]
                  max-md:text-[100px]
                  max-[430px]:text-[70px]
                ">
                  {item.value}
                </span>
              )}

              {/* Logo */}
              {item.type === "logo" && (
                <img
                  src={item.value}
                  alt="logo"
                  className="logo-spin h-[150px] w-auto
                  max-md:h-[100px]
                  hover:scale-110
                  transition-transform duration-500"
                />
              )}

              {/* divider */}
              <div className="flex gap-6">
                <span className="divider-dot"></span>
                <span className="divider-dot"></span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

);
}

---

2️⃣ Advanced CSS (Add to globals.css)

/_ GPU accelerated marquee _/
.marquee-track {
animation: marquee linear infinite;
will-change: transform;
}

.marquee-track.reverse {
animation-direction: reverse;
}

/_ pause on hover _/
.group:hover .marquee-track {
animation-play-state: paused;
}

@keyframes marquee {
from {
transform: translate3d(0,0,0);
}
to {
transform: translate3d(-50%,0,0);
}
}

/_ gradient animated outline _/
.marquee-text {
color: transparent;
-webkit-text-stroke: 2px transparent;

background: linear-gradient(
90deg,
#ffffff,
#9ca3af,
#ffffff,
#d1d5db,
#ffffff
);

background-size: 300% 100%;
-webkit-background-clip: text;

animation: gradientFlow 8s linear infinite;
}

/_ animated gradient _/
@keyframes gradientFlow {
0% { background-position: 0%; }
100% { background-position: 300%; }
}

/_ floating logo rotation _/
.logo-spin {
animation: logoFloat 6s ease-in-out infinite;
}

@keyframes logoFloat {
0% { transform: rotate(-4deg); }
50% { transform: rotate(4deg); }
100% { transform: rotate(-4deg); }
}

/_ divider dots _/
.divider-dot {
width: 18px;
height: 18px;
border: 1px solid #9ca3af;
border-radius: 9999px;
}

---

3️⃣ Visual Effects You Now Have
Gradient outline animation

Instead of static:

EAST AFRICAN SPONSORSHIP TRUST

The outline flows with gradient light.

---

Scroll reactive direction

Scrolling down

→ → → → →

Scrolling up

← ← ← ← ←

Creates a dynamic interaction effect.

---

Floating rotating logos

Logos gently oscillate:

↺ logo ↻ logo ↺

Adds micro-interaction motion.

---

Edge fade mask

Instead of hard cut:

| TEXT LOGO TEXT |

You get:

fade | TEXT LOGO TEXT | fade

Much more cinematic.

---

4️⃣ Performance Optimizations Included
Optimization Why
GPU translate3d smoother animation
will-change browser pre-optimization
CSS animation no JS animation overhead
content duplication seamless loop
responsive scaling prevents layout shift

---

5️⃣ Real Sites Using This Pattern

This pattern appears in:

Linear

Stripe

Framer

Vercel

Raycast

many Awwwards winning agency sites

---

6️⃣ Optional Ultra-Premium Upgrade

The absolute top tier landing pages add:

✨ Parallax speed layers
✨ Mouse-driven marquee speed
✨ Neon glow gradient strokes
✨ Magnetic logos (cursor interaction)
✨ 3D tilt effect

Example effect:

cursor near logo → logo subtly tilts
