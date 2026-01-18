import { useEffect, useRef } from "react";
import { TOTAL_WEEKS, weeksLived } from "../utils/life";
import WeeksRender from "./WeeksRender";

const WEEKS_PER_YEAR = 52;
const YEARS = TOTAL_WEEKS / WEEKS_PER_YEAR;

export default function LifeGrid({ dob }) {
    const lived = weeksLived(dob);
    const livedPercentage = ( lived / TOTAL_WEEKS ) * 100;
    const containerRef = useRef(null);
    const currentRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !currentRef.current) return;

    const container = containerRef.current;
    const current = currentRef.current;

    container.scrollTop =
      current.offsetTop - container.clientHeight / 2;
  }, []);

  return (
    <div
    //   ref={containerRef}
      className="w-full max-w-[620px] h-[80vh] overflow-y-auto mx-auto no-scrollbar life-scroll"
    >

      {Array.from({ length: YEARS }).map((_, yearIndex) => {
        const yearStart = yearIndex * WEEKS_PER_YEAR;

        const isDecadeEnd = (yearIndex + 1) % 10 === 0;

        return (
            <WeeksRender
            key={yearIndex}
            isDecadeEnd={isDecadeEnd}
            yearStart={yearStart}
            lived={lived}
            currentRef={currentRef}
            WEEKS_PER_YEAR={WEEKS_PER_YEAR}
            />
        );
      })}
    </div>
  );
}
