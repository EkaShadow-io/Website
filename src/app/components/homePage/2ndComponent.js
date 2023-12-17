"use client"
import React, { useState } from "react";
import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import awareness from "../../../../assets/awareness.svg";
import growth from "../../../../assets/growth.svg";
import evaluation from "../../../../assets/evaluation.svg";
import execution from "../../../../assets/execution.svg";

import "../../styles/homePage/secondComponent.css";

export default function SecondComponent() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <>
        <h1 className="visionheading">Our Vision</h1>
        <h2 className="visiontext">Bridging the gap between acadamic and practical</h2>
        <h2 className="visiontext-parttwo">Industry</h2>
            <div className="firstbox">
                <div className="left">
                    <div className="firstpara">
                        <Image src={awareness} className="image" width="0" height="0" alt="" />
                        <h1 className="first-heading">Awareness</h1>
                    </div>
                    <h2 className="second-heading">Discover the insights of IT</h2>
                    <h2 className="third-heading">Industry</h2>
                </div>
                <div className="right">
                    <div className="firstpara">
                        <Image src={growth} className="image" width="0" height="0" alt="" />
                        <h1 className="first-second-heading">Growth</h1>
                    </div>
                    <h2 className="second-heading">Develop with Industry Driven </h2>
                    <h2 className="third-heading">Approach</h2>
                </div>
            </div>

            <div className="secondbox">
                <div className="left">
                    <div className="firstpara">
                        <Image src={evaluation} className="image" width="0" height="0" alt="" />
                        <h1 className="first-heading">Evaluation</h1>
                    </div>
                    <h2 className="second-heading">Refine Your Approach at</h2>
                    <h2 className="third-heading">Industry</h2>
                </div>

                <div className="right">
                    <div className="firstpara">
                        <Image src={execution} className="image" width="0" height="0" alt="" />
                        <h1 className="first-heading">Execution</h1>
                    </div>
                    <h2 className="second-heading">Contribute to the Network </h2>
                    <h2 className="third-heading">Globally</h2>
                </div>
            </div >

        </>
    );
}



// export default function SecondComponent() {
//     return (

//         <div clName="Componentsecond">
//             <p clName="visionheading">Our Vision</p>
//             <p clName='visiontext'>BrclNameging the gap between Academics and Practical Industry</p>


/* <div clName="max-w-[900px] gap-2 grclName grclName-cols-12 grclName-rows-2 px-8"> */
/* <Card isFooterBlurred clName="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader clName="absolute z-10 top-1 flex-col items-start">
                    <p clName="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 clName="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    clName="z-0 w-full h-full object-cover"
                    src="assets/relaxing.jpg"
                />
                <CardFooter clName="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div clName="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            clName="rounded-full w-10 h-11 bg-black"
                            src="../../../assets/relaxing.jpg"
                        />
                        <div clName="flex flex-col">
                            <p clName="text-tiny text-white/60">Breathing App</p>
                            <p clName="text-tiny text-white/60">Get a good night's sleep.</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Card isFooterBlurred clName="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader clName="absolute z-10 top-1 flex-col items-start">
                    <p clName="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 clName="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    clName="z-0 w-full h-full object-cover"
                    src="assets/relaxing.jpg"
                />
                <CardFooter clName="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div clName="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            clName="rounded-full w-10 h-11 bg-black"
                            src="../../../assets/relaxing.jpg"
                        />
                        <div clName="flex flex-col">
                            <p clName="text-tiny text-white/60">Breathing App</p>
                            <p clName="text-tiny text-white/60">Get a good night's sleep.</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Card isFooterBlurred clName="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader clName="absolute z-10 top-1 flex-col items-start">
                    <p clName="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 clName="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    clName="z-0 w-full h-full object-cover"
                    src="assets/relaxing.jpg"
                />
                <CardFooter clName="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div clName="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            clName="rounded-full w-10 h-11 bg-black"
                            src="../../../assets/relaxing.jpg"
                        />
                        <div clName="flex flex-col">
                            <p clName="text-tiny text-white/60">Breathing App</p>
                            <p clName="text-tiny text-white/60">Get a good night's sleep.</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
            <Card isFooterBlurred clName="w-full h-[300px] col-span-12 sm:col-span-7">
                <CardHeader clName="absolute z-10 top-1 flex-col items-start">
                    <p clName="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                    <h4 clName="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Relaxing app background"
                    clName="z-0 w-full h-full object-cover"
                    src="assets/relaxing.jpg"
                />
                <CardFooter clName="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div clName="flex flex-grow gap-2 items-center">
                        <Image
                            alt="Breathing app icon"
                            clName="rounded-full w-10 h-11 bg-black"
                            src="../../../assets/relaxing.jpg"
                        />
                        <div clName="flex flex-col">
                            <p clName="text-tiny text-white/60">Breathing App</p>
                            <p clName="text-tiny text-white/60">Get a good night's sleep.</p>
                        </div>
                    </div>
                </CardFooter>
            </Card> */
//             </div>
//         </div >
//     );
