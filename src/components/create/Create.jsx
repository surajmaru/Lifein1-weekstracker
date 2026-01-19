import { useState } from "react"
import Dots from "./Dots.jsx"

export default function Create(){
    const [color,setColor] = useState("");

    // theme change
    function handleTheme(e){
        setColor("white");
    }



    return(
        <div className="main-create">
            <div className="div-create">
                <div className="dots-div">
                <Dots dob="2001-09-18" color={color}/>
                </div>



                <div className="div-create-inner">
                    <p className="create-p1">Customize it Yourself</p>

                    <button className="create-button" type="button"> 
                        19th Aug, 2005 <span>&#8609;</span>
                    </button>

                    <div className="theme-div">
                        <p className="theme-p">Select theme</p>

                        <div className="themes-div">
                            <button className="theme active" onClick={handleTheme}>Colored</button>
                            <button className="theme" onClick={handleTheme}>Normal</button>
                            <button className="theme" onClick={handleTheme}>Dark</button>
                            <button className="theme" onClick={handleTheme}>Neon</button>
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