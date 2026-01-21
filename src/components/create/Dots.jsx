import { useEffect, useRef, useState } from "react";
import { TOTAL_WEEKS, weeksLived } from "../../utils/life.js";
import DotsWeeks from "./DotsWeeks.jsx";

const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;
const YEARS = TOTAL_WEEKS / WEEKS_PER_YEAR;


export default function Dots({theme,themeName,shape,dotColor,birth }) {

    const lived = weeksLived(birth);
    // lived in years
    const livedYears = (lived / WEEKS_PER_YEAR).toFixed(1);
    const livedPercentage = Math.floor((lived / TOTAL_WEEKS) * 100);
    const containerRef = useRef(null);
    const currentRef = useRef(null);


  return (
    // <main className={`w-100 h-140 ${theme.bg} text-white flex flex-col items-center justify-center px-6 py-6 rounded-2xl rows-dots`}>
    // <main className={`${theme.bg} text-white flex flex-col items-center justify-center px-6 py-6 rounded-2xl rows-dots`}>

    <main
    className={`
      ${theme.bg} text-white rows-dots
      w-full h-full
      flex flex-col
      items-center
      justify-center
      px-6 py-6
       
      main-top
    `}
  >

    <div className="weels-label">
        <p className={`rows-dots ${themeName === "light" ? "text-black" : ""}`}>Weeks --{">"}</p>
    </div>

      {/* <div className="weeks-nums grid grid-cols-[repeat(52,1fr)] w-full max-w-[620px]"> */}
      <div className={`weeks-nums grid grid-cols-[repeat(52,1fr)] w-full`}>

            {
                Array.from({ length: WEEKS_PER_YEAR }).map((_, i) => {
                    const weekNumber = i + 1;

                    return(
                        <div key={i} className={`text-center ${themeName === "light" ? "text-black" : ""} rows-dots`}>
                            {weekNumber % 4 === 0 ? weekNumber : ""}
                        </div>
                    )
                })
            }
        </div>


    <div className="w-full max-w-[620px]  overflow-y-auto mx-auto no-scrollbar life-scroll rows-dots">
    {/* <div className={`w-full rows-dots ${ exportMode ? "" : "max-w-[620px]  overflow-y-auto mx-auto"} no-scrollbar life-scroll `}> */}

      {Array.from({ length: YEARS }).map((_, yearIndex) => {
        const yearStart = yearIndex * WEEKS_PER_YEAR;

        const isDecadeEnd = (yearIndex + 1) % 10 === 0;

        return (
            <DotsWeeks
            key={yearIndex}
            isDecadeEnd={isDecadeEnd}
            yearStart={yearStart}
            lived={lived}
            currentRef={currentRef}
            WEEKS_PER_YEAR={WEEKS_PER_YEAR}
            theme={theme}
            shape={shape}
            dotColor={dotColor}
            />
        );
      })}
    </div>

    <p className={`text-s mt-6 ${themeName === "light" ? "text-black" : "text-gray-500"} rows-dots`}>
        Each dot represents one week
      </p>
    <p className={`text-s mt-2 ${themeName === "light" ? "text-black" : "text-gray-500"} rows-dots`}>
        76 YEARS
      </p>
    </main>
  );
}
