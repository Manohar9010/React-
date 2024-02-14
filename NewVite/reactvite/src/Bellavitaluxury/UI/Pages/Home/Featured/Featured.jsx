import React from "react";
import "./Featured.css";
import featuredimg1 from "../../../Images/Featuredimg1.avif";
import featuredimg2 from "../../../Images/Featuredimg2.avif";
import featuredimg3 from "../../../Images/Featuredimg3.webp";
import featuredimg4 from "../../../Images/Featuredimg4.avif";
import featuredimg5 from "../../../Images/Featuredimg5.avif";
import Featuredcard from "./Featuredcard";

let faturedata = [
  {
    featuredimg: featuredimg1,
    feauretext:
      "Self-care is for everyone, and inspires people across age and gender. BVO as a brand understands this and has taken a progressive approach to address the self-care needs of the modern-day consumer.",
  },
  {
    featuredimg: featuredimg2,
    feauretext:
      "Bella Vita Organic has brought high quality yet affordable skincare, natural wellness and beauty products under the umbrella of Indian Ayurveda.",
  },
  {
    featuredimg: featuredimg3,
    feauretext:
      "Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.",
  },
  {
    featuredimg: featuredimg4,
    feauretext:
      "Tied to the niche concerns of its customers in the beauty and skincare segments, Bella Vita's progress has changed the skincare game.",
  },
  {
    featuredimg: featuredimg5,
    feauretext:
      "This pore-cleansing face wash with green tea extract helps in controlling sebum production making your skin  wash with green tea extract acne-free!",
  },
];
export default function Featured() {
  return (
    <div>
      <div className="faturetitle">
        <h3>As Featured In</h3>
      </div>
      <div className="featuredflex">
        {faturedata.map((feauredata, i) => {
          return (
            <div key={i}>
              <Featuredcard
                featuredimg={feauredata.featuredimg}
                feauretext={feauredata.feauretext}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
