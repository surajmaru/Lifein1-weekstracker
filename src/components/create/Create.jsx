import { use, useState } from "react"
import Dots from "./Dots.jsx"

export default function Create(){

    const THEME_COLORS = {
        colored:{
            decades: [
                "bg-10","bg-20","bg-30","bg-40",
                "bg-50","bg-60","bg-70","bg-80"
            ],
            future: "bg-gray-700",
            current: "bg-red-500",
            bg:"bg-neutral-950"
        },
        light:{
            decades: Array(8).fill("bg-neutral-900"),
            future: "bg-neutral-300",
            current: "bg-red-500",
            bg:"bg-neutral-50"
        },
        dark:{
            decades: Array(8).fill("bg-neutral-100"),
            future: "bg-neutral-700",
            current: "bg-red-400",
            bg:"bg-neutral-950"
        }
    }

    const [theme,setTheme] = useState("colored");


    return(
        <div className="main-create">
            <div className="div-create">
                <Dots dob="2001-09-18" theme={THEME_COLORS[theme] ?? THEME_COLORS.colored} themeName={theme}/>



                <div className="div-create-inner">
                    <p className="create-p1">Customize it Yourself</p>

                    <button className="create-button" type="button"> 
                        19th Aug, 2005 <span>&#8609;</span>
                    </button>

                    <div className="theme-div">
                        <p className="theme-p">Select theme</p>

                        <div className="themes-div">
                            <button className={`theme ${theme === "colored" ? "active" : ""}`} onClick={() => setTheme("colored")}>Colored</button>
                            <button className={`theme ${theme === "dark" ? "active" : ""}`} onClick={() => setTheme("dark")}>Dark</button>
                            <button className={`theme ${theme === "light" ? "active" : ""}`} onClick={() => setTheme("light")}>Light</button>
                        </div>
                    </div>

                    <div className="shape-div">
                        <p className="shape-p">Dot shape</p>

                        <div className="shape-div-inner">
                            <button className="shape">Circle</button>
                            <button className="shape">Square</button>
                        </div>
                    </div>

                    <div>
                        <p className="dot-color-p">Dot color</p>

                        <div className="dot-color-div">
                            <button className="color">Default</button>
                            <button className="color">Red</button>
                            <button className="color">Green</button>
                        </div>
                    </div>

                    <div>
                        <p className="res-p">Choose resolution</p>

                        <div className="res-div">
                            <button className="res">Recommended</button>
                            <button className="res">Android</button>
                            <button className="res">IOS</button>
                        </div>
                    </div>

                    <div className="spacer"></div>

                    <div className="create-div">
                        <button className="create-btn">Create!</button>
                    </div>
                </div>

            </div>
        </div>
    )
}