import React from "react";
import bgimage from "../../public/woman-1245817_640.jpg";
export default function HomePage() {
  return (
    <div className="bg-blue-200 h-auto flex pb-20">
      <div className="ps-20 pt-15">
        <h1 className="text-5xl font-bold text-yellow-500">
          We Execute Our Ideas{" "}
        </h1>

        <h1 className="text-5xl font-bold text-yellow-500">
          {" "}
          From Start to Finish
        </h1>

        <p className="pt-10 w-3/6 text-justify text-gray-500 text-1xl font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          delectus unde quam dolore placeat adipisci odio? Veniam voluptas
          nostrum esse qui, labore, porro officia sit aut animi dolore corrupti
          earum, amet vel dolor id? Similique sint ea ratione sapiente
          voluptatum neque, odio rem deserunt quisquam et explicabo,
          exercitationem iusto ipsa aperiam perferendis sunt! Possimus, fugiat!
        </p>

        <button className="bg-green-400 px-5   py-3 rounded-2xl mt-16  hover:bg-slate-400  text-white font-medium">
          Click Here
        </button>
      </div>

      <div className="my-10 mx-10">
        <img src={bgimage} alt="" className="h-screen max-w-screen-sm" />
      </div>
    </div>
  );
}
