/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useState } from "react";
import DhoniImage from "../public/bole-jo-koyal.gif";
import TryAgainImage from "../public/giphy.gif";
import Game from "../public/game1.png";
import Ufo from "../public/ufo.png";
import Controller from "../public/controller.png";

const Thala = () => {
  const [thalaString, setThalaString] = useState("");
  const [name, setName] = useState("");
  const [word, setWord] = useState("");
  const [showDhoniGif, setShowDhoniGif] = useState(false);
  const [showTryGif, setShowTryGif] = useState(false);
  const [ans, setAns] = useState("");
  function thalaForAReason(input: any) {
    if (!isNaN(input)) {
      const numword = input.toString();
      const num = parseInt(input, 10);
      const sum = num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
      if (sum === 7) {
        setAns(`${numword.split("").join("+")} = 7 thala for a reason`);
        setShowDhoniGif(true);
        setShowTryGif(false);
        return `${input} = 7 thala for a reason`;
      } else {
        setShowTryGif(true);
        setShowDhoniGif(false);
        setAns(`${input} is not 7 thala-worthy`);
        return `${input} is not 7 thala-worthy`;
      }
    } else if (typeof input === "string" && input.length === 7) {
      const formattedString = input.toUpperCase().split("").join("+");
      setAns(`${formattedString} = 7 thala for a reason`);
      setShowDhoniGif(true);
      setShowTryGif(false);
      return `${formattedString} = 7 thala for a reason`;
    } else {
      setShowTryGif(true);
      setShowDhoniGif(false);
      setAns(`${input} is not 7 thala-worthy`);
      return `${input} is not 7 thala-worthy`;
    }
  }

  return (
    <div
      className={`relative [background:linear-gradient(228.76deg,_#fff202_13.54%,_#fe8201)] w-full text-center t-10 text-13xl text-white font-luckiest-guy ${
        showDhoniGif || showTryGif ? "pt-[120px]" : ""
      }`}
    >
      <div className="absolute top-[30px] left-[400px]">
        <Image src={Game} width={100} alt="game" />
      </div>
      <div className="absolute top-[220px] left-[400px]">
        <Image src={Ufo} width={100} alt="game" />
      </div>
      <div className="absolute top-[30px] right-[100px]">
        <Image src={Controller} width={100} alt="game" />
      </div>
      <div className="absolute top-[200px] right-[150px]">
        <Image src={Game} width={100} alt="game" />
      </div>
      <div className="absolute top-[220px] left-[100px]">
        <Image src={Controller} width={100} alt="game" />
      </div>
      <div className="flex justify-center items-center  w-[100vw] min-h-[100vh]">
        <div className="flex flex-col ">
          <div className="text-45xl text-darkslateblue ">Thala-Meter</div>
          <div className=" font-salsa text-darkslateblue w-[849px]">
            The Website That Determines If a Word Is Worthy of the Title "Thala
            for a Reason"
          </div>
          <div className="mt-20">
            <input
              value={thalaString}
              onChange={(e) => {
                setThalaString(e.currentTarget.value);
              }}
              type="text"
              placeholder="Enter the word"
              className=" rounded-lg border-[5px] border-solid border-blue-900 bg-transparent  w-[85%] h-[6rem] flex-shrink-0 text-[32px] focus:outline-none text-white font-luckiest-guy placeholder:text-white "
            />
            <div>
              <button
                onClick={() => {
                  thalaForAReason(thalaString);
                }}
                className="cursor-pointer rounded-lg bg-darkslateblue w-[85%] h-[6rem] text-white text-[32px] font-luckiest-guy mt-6 "
              >
                Submit
              </button>
            </div>
            <div className="mt-10 text-blue-900">{ans}</div>
          </div>
          <div className="w-[100%] flex justify-center mt-[20px]   ">
            {showDhoniGif && !showTryGif ? (
              <div style={{ marginBottom: "100px" }}>
                <Image width={276} src={DhoniImage} alt="Dhoni Dance" />
              </div>
            ) : null}
          </div>
          <div className="w-[100%] flex justify-center mt-5 mb-[20px] ">
            {showTryGif ? (
              <div style={{ marginBottom: "100px" }}>
                <Image width={480} src={TryAgainImage} alt="Try Again" />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className=" flex justify-center  min-h-[100vh]  ">
        <div className="w-[80%]">
          <div className="text-left text-[64px]">Thala Hall of Fame</div>
          <div className="text-[32px] text-left mt-3 font-salsa text-darkslateblue">
            Write the best 7-letter word so you will be forever enshrined in the
            hallowed halls of Thala greatness.
          </div>
          <div>
            <form action="">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                type="text"
                placeholder="Enter your name"
                className=" rounded-lg border-[5px] mt-[64px] border-solid border-blue-900 bg-transparent  w-[60%] h-[6rem] flex-shrink-0 text-[32px] focus:outline-none text-white font-luckiest-guy placeholder:text-white "
              />
              <input
                value={word}
                onChange={(e) => {
                  setWord(e.currentTarget.value);
                }}
                type="text"
                placeholder="Enter the word"
                className=" rounded-lg border-[5px] mt-10 border-solid border-blue-900 bg-transparent  w-[60%] h-[6rem] flex-shrink-0 text-[32px] focus:outline-none text-white font-luckiest-guy placeholder:text-white "
              />
              <button
                onClick={() => {
                  thalaForAReason(thalaString);
                }}
                className="cursor-pointer rounded-lg bg-darkslateblue w-[60%] h-[6rem] text-white text-[32px] font-luckiest-guy mt-6 "
              >
                Be a part of Thala history
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thala;
