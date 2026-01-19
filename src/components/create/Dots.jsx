import { useEffect, useRef, useState } from "react";
import { TOTAL_WEEKS, weeksLived } from "../../utils/life.js";
import DotsWeeks from "./DotsWeeks.jsx";

const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;
const YEARS = TOTAL_WEEKS / WEEKS_PER_YEAR;


export default function Dots({ dob,color }) {
    const [birth, setBirth] = useState("2005-08-19");

    function handleInput(e){
    const value = e.target.value;
    const isValidDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
    if(isValidDate){
    console.log(value);
    setBirth(value)
    }
    }

    const lived = weeksLived(birth);
    // lived in years
    const livedYears = (lived / WEEKS_PER_YEAR).toFixed(1);
    const livedPercentage = Math.floor((lived / TOTAL_WEEKS) * 100);
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
    <main className="w-100 h-140 bg-bg text-white flex flex-col items-center justify-center px-6 py-6 rounded-2xl">


    <div className="weels-label">
        <p>Weeks --{">"}</p>
    </div>

      <div className="weeks-nums grid
        grid-cols-[repeat(52,1fr)] w-full max-w-[620px]">
            {
                Array.from({ length: WEEKS_PER_YEAR }).map((_, i) => {
                    const weekNumber = i + 1;

                    return(
                        <div key={i} className="text-center">
                            {weekNumber % 4 === 0 ? weekNumber : ""}
                        </div>
                    )
                })
            }
        </div>


    <div
    //   ref={containerRef}
      className="w-full max-w-[620px] h-[80vh] overflow-y-auto mx-auto no-scrollbar life-scroll"
    >
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
            color={color}
            />
        );
      })}
    </div>

    <p className='text-xs text-gray-500 mt-6'>
        Each dot represents one week
      </p>
    </main>
  );
}
