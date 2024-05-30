import React from "react";
import "../Topsellar/Topseller.css";
import Topsellarcart from "./Topsellarcart";
export default function Topseller() {
  return (
    <div>
      <div className="flex justify-between mx-3">
        <div className="">
          <h5
            className='relative  before:content-[""] before:  before:absolute  before:bg-gray-300 before:w-48   before:top-8 before:h-0.5 before:down-0 

after:content-[""] after:absolute mb-4  after:bg-green-600 after:w-20 after:h-0.5 after:left-3 after:top-8 

'
          >
            Top Selling{" "}
          </h5>
          <Topsellarcart />
          <Topsellarcart />
          <Topsellarcart />
         
        </div>
        <div>
          <h5
            className='relative  before:content-[""] before:  before:absolute  before:bg-gray-300 before:w-48   before:top-8 before:h-0.5 before:down-0 

after:content-[""] after:absolute mb-4 after:bg-green-600 after:w-20 after:h-0.5 after:left-3 after:top-8 

'
          >
            Trending Products
          </h5>
          <Topsellarcart />
          <Topsellarcart />
          <Topsellarcart />
         
        </div>
        <div>
          <h5
            className='relative  before:content-[""] before:  before:absolute  before:bg-gray-300 before:w-48   before:top-8 before:h-0.5 before:down-0 

after:content-[""] after:absolute mb-4 after:bg-green-600 after:w-20 after:h-0.5 after:left-3 after:top-8 

'
          >
            Recently Added
          </h5>
          <Topsellarcart />
          <Topsellarcart />
          <Topsellarcart />

        </div>
        <div>
          <h5
            className='relative  before:content-[""] before:  before:absolute  before:bg-gray-300 before:w-48   before:top-8 before:h-0.5 before:down-0 

after:content-[""] after:absolute mb-4 after:bg-green-600 after:w-20 after:h-0.5 after:left-3 after:top-8 

'
          >
            Top Rated
          </h5>
          <Topsellarcart />
          <Topsellarcart />
          <Topsellarcart />
        
        </div>
      </div>
    </div>
  );
}
