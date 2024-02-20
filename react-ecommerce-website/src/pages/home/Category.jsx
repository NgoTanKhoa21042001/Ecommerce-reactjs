import React from "react";
import { Link } from "react-router-dom";
const companyLogo = [
  { id: 1, img: "../../../images/categories/brand-1.png" },
  { id: 2, img: "../../../images/categories/01.png" },
  { id: 3, img: "../../../images/categories/02.png" },
  { id: 4, img: "../../../images/categories/brand-1.png" },
  { id: 5, img: "../../../images/categories/04.png" },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      {/* cateogry grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div className="">
          <Link to="/">
            <img
              src="../../../images/categories/card.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img src="../../../images/categories/card (1).png" alt="" />
            </Link>
            <Link to="/">
              <img src="../../../images/categories/03.png" alt="" />
            </Link>
            <Link to="/">
              <img src="../../../images/categories/card (2).png" alt="" />
            </Link>
            <Link to="/">
              <img src="../../../images/categories/20.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
