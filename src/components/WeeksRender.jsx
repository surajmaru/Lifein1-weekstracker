export default function WeeksRender({
  isDecadeEnd,
  yearStart,
  lived,
  currentRef,
}) {
  const WEEKS_PER_YEAR = 52;

  return (
    <div
    // grid grid-cols-[repeat(52,1fr)]
      className={` blue
        grid
        grid-cols-[repeat(52,1fr)]
        justify-items-center
        ${isDecadeEnd ? "mb-2" : "mb-1"}
      `}
    >
      {Array.from({ length: WEEKS_PER_YEAR }).map((_, weekIndex) => {
        const i = yearStart + weekIndex;

        let color = "bg-future";
        let size = "w-[4px] h-[4px]"
        let ref = null;

        if (i < lived) color = "bg-past";
        if (i < 520) color = "bg-10";
        if (i >= 520 && i < 1040 && i < lived) color = "bg-20";
        if (i >= 1040 && i < 1560 && i < lived) color = "bg-30";
        if (i >= 1560 && i < 2080 && i < lived) color = "bg-40";
        if (i >= 2080 && i < 2600 && i < lived) color = "bg-50";
        if (i >= 2600 && i < 3120 && i < lived) color = "bg-60";
        if (i >= 3120 && i < 3640 && i < lived) color = "bg-70";
        if (i >= 3640 && i < 4160 && i < lived) color = "bg-80";

        if (i === lived) {
          color = "bg-current shadow-[0_0_8px_#ff4d4d]";
          ref = currentRef;
        }

        return (
          <div
            key={weekIndex}
            ref={ref}
            className={`${size} rounded-full transition-all ${color}`}
          > 
          </div>          
        );
      })}
    </div>
  );
}
