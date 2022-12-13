import Image from "next/image";
import React from "react";

export default function Custom404() {
  return <div className='container'>
    <h1>404 - Page Not Found!!!</h1>
    <Image classname='logo' src='/snowman.svg' width={90} height={90}/>
    <h2>Perhaps this day of the Advent of Code has not been attempted as of yet!</h2>
  </div>
}