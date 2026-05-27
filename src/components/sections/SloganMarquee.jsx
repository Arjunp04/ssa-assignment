import React from 'react';

const SloganMarquee = () => {
  // Ordered sequence of keywords as shown in your Figma banner snippet
  const baseWords = ["ADOPT", "NURTURE", "DELIVER"];

  // Replicating the pattern multiple times to cleanly fill widescreen displays
  const repeatedPattern = [...baseWords, ...baseWords, ...baseWords, ...baseWords, ...baseWords, ...baseWords];

  return (
    <div className="w-full overflow-hidden py-16 sm:py-24">
      
      {/* Native ultra-smooth Left-to-Right layout animation engine */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-ltr {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 25s linear infinite;
        }
      `}} />

      {/* Main Track container mapping out alternating layout items */}
      <div className="flex w-max animate-marquee-ltr items-center">
        {repeatedPattern.map((word, index) => {
          // Even indexed entries (0, 2, 4...) fill up, Odd entries (1, 3, 5...) turn hollow
          const isFilled = index % 2 === 0;

          return (
            <div key={index} className="flex items-center">
              {/* Word Element Styling matching the provided Figma design color profile */}
              <span 
                className={`text-[50px] font-bold uppercase tracking-wider px-8 transition-colors ${
                  isFilled 
                    ? "text-primary font-bold" 
                    : "text-transparent [-webkit-text-stroke:1px_#99B81B] [text-stroke:1px_#99B81B]"
                }`}
              >
                {word}
              </span>

              {/* Precise 4px Visual Anchor Dot Separator */}
              <span className="size-2 bg-primary rounded-full shrink-0 mx-2" aria-hidden="true" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SloganMarquee;
