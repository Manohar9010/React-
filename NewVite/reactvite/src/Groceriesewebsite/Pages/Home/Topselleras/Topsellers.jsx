import React from "react";
import Topsellercart from "./Topsellercart";

export default function Topsellers() {
  return (
    <div>
      <div className="flex justify-between mx-5">
        <div>
          <h3
            className='relative before:absolute before:content-[""] before:h-0.5 before:w-48
                         before:bottom-0  before:rounded pb-2 before:bg-slate-300  after:absolute after:content-[""] after:h-0.5 after:w-20 after:bg-green-600 after:left-1  after:bottom-0'
          >
            Top Selling
          </h3>

          <Topsellercart />
        </div>
        <div>
          <h3
            className='relative before:absolute before:content-[""] before:h-0.5 before:w-48
                         before:bottom-0  before:rounded pb-2 before:bg-slate-300  after:absolute after:content-[""] after:h-0.5 after:w-20 after:bg-green-600 after:left-1  after:bottom-0'
          >
            Trending product
          </h3>
          <Topsellercart />
        </div>
        <div>
          <h3
            className='relative before:absolute before:content-[""] before:h-0.5 before:w-48
                         before:bottom-0  before:rounded pb-2 before:bg-slate-300  after:absolute after:content-[""] after:h-0.5 after:w-20 after:bg-green-600 after:left-1  after:bottom-0'
          >
            Recently Added
          </h3>
          <Topsellercart />
        </div>
        <div>
          <h3
            className='relative before:absolute before:content-[""] before:h-0.5 before:w-48
                         before:bottom-0  before:rounded pb-2 before:bg-slate-300  after:absolute after:content-[""] after:h-0.5 after:w-20 after:bg-green-600 after:left-1  after:bottom-0'
          >
            Top Rated
          </h3>
          <Topsellercart />
        </div>
      </div>
    </div>
  );
}
