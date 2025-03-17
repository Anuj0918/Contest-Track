import { TypewriterEffectSmooth } from "./typewriter-effect";

import { Link } from "react-router-dom";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "TLE",
        className: "text-black-600 dark:text-purple-400",
    },
    {
      text: "Eliminators.",
      className: "text-green-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-gray-700 text-xs sm:text-base p-4  ">
        The road to Competitive Programming starts from here.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          <Link to="/Home">Explore now</Link>
        </button>
      </div>
    </div>)
  );
} 