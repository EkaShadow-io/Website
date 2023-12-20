"use client"
import React, { useState } from "react";
import Image from 'next/image';
import graduation from "../../../../assets/graduation_2997321.svg";
import research from "../../../../assets/research_2081912.svg";
import computer from "../../../../assets/computer_2104926.svg";
import ability from "../../../../assets/ability_6430102.svg";
import ekashadowDesign from "../../../../assets/Frame.svg"

import "../../styles/homePage/thirdComponent.css"

export default function ThirdComponent() {
    return (
        <>
        <h1 className="misionheading">Our Mission</h1>
        <h2 className="misiontext">Our Mission is to aware the masses about the academical and industrial gap</h2>
        <h2 className="misiontext-parttwo">by providing industrial approach and making them industry ready.</h2>
        <Image src={ekashadowDesign} className="imagetwo" width="0" height="0" alt="" />
            <div className="firstrow">
                <div className="thirdComponentleft-box">
                    <div className="thirdComponentfirstpara">
                        <Image src={graduation} className="imagee" width="0" height="0" alt="" />
                        <h1 className="thirdComponentfirst-second-heading">Academics</h1>
                    </div>
                    <p className="thirdComponentsecond-heading"> Students who excel in acadamics, lay the groundwork for future opportunities and develop critical thinking, problem-solving, and communication skilld, which are the keys to opening any door.</p>

                </div>
                <div className="thirdComponentright-box">
                    <div className="thirdComponentfirstpara">
                        <Image src={research} className="imagee" width="0" height="0" alt="" />
                        <h1 className="thirdComponentfirst-second-heading">R and D</h1>
                    </div>
                    <p className="thirdComponentsecond-heading"> By instilling a spirit of inquiry, research and development &#40;R and D&#41; turns technical students into innovators who push limits and influence technology moving forward. </p>
                   
                </div>
            </div>

            <div className="secondrow">
                <div className="thirdComponentleft-box">
                    <div className="thirdComponentfirstpara">
                        <Image src={computer} className="imagee" width="0" height="0" alt="" />
                        <h1 className="thirdComponentfirst-second-heading">Industry</h1>
                    </div>
                    <p className="thirdComponentsecond-heading"> Industrial exposure helps to bridge the gap between theory and reality by transforming concepts into real-world effects, from roaring engines to textbook representation. </p>

                </div>

                <div className="thirdComponentright-box">
                    <div className="thirdComponentfirstpara">
                        <Image src={ability} className="imagee" width="0" height="0" alt="" />
                        <h1 className="thirdComponentfirst-second-heading">Entrepreneurship</h1>
                    </div>
                    <p className="thirdComponentsecond-heading"> Forging a student path not just to build a grade but to create empires, kingdom by kingdom. </p>

                </div>
            </div >


        </>
    );
}
