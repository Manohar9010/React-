import React from "react";
import about from "../../public/about.jpg";
import { BadgePoundSterling, FerrisWheel } from "lucide-react";
export default function SecondPage() {
  return (
    <div className="py-24 mx-20">
      <div className="flex space-x-14">
        <div className="">
          <img src={about} alt="" className="rounded-2xl " />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">
            The Largest Business Expert!
          </h2>
          <p className="text-gray-600 py-3">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="flex items-start space-x-4">
            <div>
              <BadgePoundSterling color="red" size={50} />
            </div>
            <div>
              <h1 className="text-2xl font-medium">
                Extra benefit through Invest
              </h1>
              <p className="py-3">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit accusantium
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 ">
            <div>
              <FerrisWheel size={50} color="#d42121" />
            </div>
            <div>
              <h1 className="text-2xl font-medium">
                Expand profit and reduce Tax
              </h1>
              <p className="py-3">
                Sed ut perspiciatis unde omnis iste natus error sit accusantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
