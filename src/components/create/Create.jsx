import { use, useState } from "react"
import Dots from "./Dots.jsx"
import { useNavigate } from "react-router-dom";

import { toPng } from "html-to-image";
import { useRef } from "react";

import { motion } from "framer-motion";


export default function Create(){

    const RESOLUTIONS = {
    android: {
        width: 1080,
        height: 1920,
        label: "android",
    },
    ios: {
        width: 1170,
        height: 2532,
        label: "iOS",
    },
    };

    const THEME_COLORS = {
        colored:{
            decades: [
                "bg-10","bg-20","bg-30","bg-40",
                "bg-50","bg-60","bg-70","bg-80"
            ],
            future: "bg-gray-700",
            // current: "bg-red-500",
            current: "bg-current",
            current2: "bg-red-500",
            bg:"bg-neutral-950"
        },
        light:{
            decades: Array(8).fill("bg-neutral-900"),
            future: "bg-neutral-300",
            current: "bg-neutral-950",
            current2: "bg-red-500",
            bg:"bg-neutral-50"
        },
        dark:{
            decades: Array(8).fill("bg-neutral-100"),
            future: "bg-neutral-700",
            current: "bg-current",
            current2: "bg-red-500",
            bg:"bg-neutral-950"
        }
    }

    const [theme,setTheme] = useState("colored");
    const [shape,setShape] = useState("circle");
    const [dotColor,setDotColor] = useState("default");
    const [resolution, setResoultion] = useState("android");
    const [birth, setBirth] = useState("2005-08-19");
    const [showPicker, setShowPicker] = useState(false);
    const [exporting, setExporting] = useState(false);

    const exportRef = useRef(null);

    // // export function.
    // async function handleCreate() {
    // if(exporting) return;
    // setExporting(true);
    
    // const res = RESOLUTIONS[resolution] ?? RESOLUTIONS.recommended;

    // const dataUrl = await toPng(exportRef.current, {
    //     // width: res.width,
    //     // height: res.height,
    //     pixelRatio: 2, // 🔥 sharp AF
    //     backgroundColor: null,
    // });

    // const link = document.createElement("a");
    // link.download = `lifein1-${birth}.png`;
    // link.href = dataUrl;
    // link.click();

    // setExporting(false);
    // }
    // //

    // export function.
    // const [exportMode, setExport] = useState(false);

    async function handleCreate() {
    if (exporting) return;
    // setExport(true);
    setExporting(true);

    await new Promise((r) => setTimeout(r, 100));

    const dataUrl = await toPng(exportRef.current, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor:
        theme === "light" ? "#fafafa" : "#0a0a0a",
    });

    const link = document.createElement("a");
    link.download = `lifein1-${birth}.png`;
    link.href = dataUrl;
    link.click();

    setExporting(false);
    }
    //

    const navigate = useNavigate();


    return(
        <div className="main-create">
            <div className="div-create">

                <div className='home-div'>
                <div className='home-div-2'>

                <div className='home-top'>
                <a href='https://suraj-dev.vercel.app/' target='_blank'><img src='/self.png' className='portfolioImg' /></a>
                <div className='lifein1-p'>Lifein1</div>
                </div>

                <button className='top-btn' onClick={() => navigate("/")}>Home</button>
                </div>      
                </div>

                {/* <div ref={exportRef}> */}
                <motion.div
                ref={exportRef}
                key={`${theme}-${shape}-${dotColor}-${birth}`}
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                >


                <Dots theme={THEME_COLORS[theme] ?? THEME_COLORS.colored} themeName={theme} shape={shape} dotColor={dotColor} birth={birth}/>
                
                </motion.div>

                <div className="div-create-inner">
                    <p data-aos="fade-down" data-aos-duration="1000" className="create-p1">Customize it Yourself</p>

                    <div data-aos="fade-down" data-aos-duration="1300">
                    <button  className="create-button rows-dots" type="button" onClick={() => setShowPicker(!showPicker)}> 
                        {new Date(birth).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                        <span>&#8609;</span>
                    </button>
                    </div>

                    {showPicker && (
                        <input
                        data-aos="fade-down" data-aos-duration="1000"
                            type="date"
                            value={birth}
                            max={new Date().toISOString().split("T")[0]}
                            onChange={(e) => {
                            setBirth(e.target.value);
                            setShowPicker(false);
                            }}
                            className="input-date mt-3 px-3 py-2 rounded-lg  rows-dots"
                        />
                        )}


                    <div className="theme-div">
                        <div data-aos="fade-down" data-aos-duration="1600">
                        <p className="theme-p">Select theme</p>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1900" className="themes-div">
                            <button className={`theme ${theme === "colored" ? "active" : ""}`} onClick={() => setTheme("colored")}>Colored</button>
                            <button className={`theme ${theme === "dark" ? "active" : ""}`} onClick={() => setTheme("dark")}>Dark</button>
                            <button className={`theme ${theme === "light" ? "active" : ""}`} onClick={() => setTheme("light")}>Light</button>
                        </div>
                    </div>

                    <div className="shape-div">
                        <div data-aos="fade-down" data-aos-duration="2200">
                        <p className="shape-p">Dot shape</p>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="2500" className="shape-div-inner">
                            <button className={`shape ${shape === "circle" ? "active" : ""}`} onClick={() => setShape("circle")}>Circle</button>
                            <button className={`shape ${shape === "square" ? "active" : ""}`} onClick={() => setShape("square")}>Square</button>
                        </div>
                    </div>

                    <div>
                        <div data-aos="fade-down" data-aos-duration="2800">
                        <p className="dot-color-p">Dot color</p>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="3000" className="dot-color-div">
                            <button className={`color ${dotColor === "default" ? "active" : ""}`} onClick={() => setDotColor("default")}>Default</button>
                            <button className={`color ${dotColor === "red" ? "active" : ""}`} onClick={() => setDotColor("red")}>Red</button>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div data-aos="fade-down" data-aos-duration="3000">
                        <button disabled={exporting} className="create-btn" onClick={handleCreate}>{exporting ? "Creating..." : "Create"}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}