export default function DotsWeeks({
  isDecadeEnd,
  yearStart,
  lived,
  currentRef,
  theme
}) {
  const WEEKS_PER_YEAR = 52;

  return (
    <div
    // grid grid-cols-[repeat(52,1fr)]
      className={`rows-dots
        grid
        grid-cols-[repeat(52,1fr)]
        justify-items-center
        ${isDecadeEnd ? "mb-2" : "mb-1"}
      `}
    >
      {Array.from({ length: WEEKS_PER_YEAR }).map((_, weekIndex) => {
        const i = yearStart + weekIndex;

        let size = "w-[4px] h-[4px]"
        let ref = null;
        
        const decadeIndex = Math.floor(i / 520); // 520 = 10 years.
        const isLived = i < lived;

        let color = theme.future;
        
        if( isLived && decadeIndex < theme.decades.length){
            color = theme.decades[decadeIndex];
        }

        if (i === lived) {
          color = `${theme.current} shadow-[0_0_8px_#ff4d4d]`;
          ref = currentRef;
        }


        return (
          <div
            key={weekIndex}
            ref={ref}
            className={`${size} rounded-full transition-all ${color} rows-dots`}
          > 
          </div>          
        );
      })}
    </div>
  );
}
