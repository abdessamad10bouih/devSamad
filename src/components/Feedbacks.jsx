import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@nextui-org/react";
const reviews = [
  {
    name: "Youssef Elhaouil",
    username: "@youssefelhaouil",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ahmed",
    username: "@AhmedOuhssini",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Talal",
    username: "@TalalAItMouh",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Imad",
    username: "@Dalal42",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Khaoula",
    username: "@abdellahiKH",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Ali",
    username: "@ErrahmanyAli",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
function ReviewCard({ img, name, username, body }) {
    return (
        <figure
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
      );
    };


const Feedbacks = () => {
    return (
        <>
        <section className="w-full p-5 flex flex-col">
        <h1 className="text-3xl font-bold text-center">Service Reviews</h1>
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
        </section>
        </>
      );
}
export default Feedbacks;