export default function WeeksRender({
  isDecadeEnd,
  yearStart,
  lived,
  currentRef,
}) {
  const WEEKS_PER_YEAR = 52;

  return (
    <div
      className={`
        grid grid-cols-[repeat(52,1fr)]
        gap-[0px]
        justify-items-center
        ${isDecadeEnd ? "mb-2" : "mb-1"}
      `}
    >
      {Array.from({ length: WEEKS_PER_YEAR }).map((_, weekIndex) => {
        const i = yearStart + weekIndex;

        let color = "bg-future";
        let ref = null;

        if (i < lived) color = "bg-past";
        if (i === lived) {
          color = "bg-current shadow-[0_0_8px_#ff4d4d]";
          ref = currentRef;
        }

        return (
          <div
            key={weekIndex}
            ref={ref}
            className={`w-[5px] h-[5px]  ${color}`}
          />
        );
      })}
    </div>
  );
}
