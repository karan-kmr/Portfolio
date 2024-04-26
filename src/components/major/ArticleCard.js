import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import ArticleCardBig from "../minor/ArticleCardBig";
import ArticleCardSmall from "../minor/ArticleCardSmall";
import profilePhoto from "../../assets/media/bg.png";
import ArticleData from "../../data/articles.json";
import Buttons from "../../data/buttons.json";

import * as BsReactIcons from "react-icons/bi";

function ArticleCard({ toggle }) {
  return (
    <section id="articles" className="section-container article bg-highlight">
      {ArticleData.data.map((data) => (
        <div className="section-header w-full flex flex-row justify-center items-center lg:justify-between">
          <div className="section-title heading  text-dark-bg">
            {data.heading}
          </div>
          {Buttons.data.map((data) =>
            data.items
              .filter((button) => button.name.toLowerCase() === "more-articles")
              .map((buttonItem) => (
                <button
                  onClick={() => toggle(data, buttonItem)}
                  className="title hidden lg:flex bg-dark-bg text-body"
                >
                  {buttonItem.label}&emsp;
                  <span>
                    {React.createElement(BsReactIcons[buttonItem.icon], {
                      className: "heading",
                    })}
                  </span>
                </button>
              ))
          )}
        </div>
      ))}
      <div className=" section-body flex flex-col gap-y-8 md:grid gap-8 grid-cols-2 grid-rows-2">
        {ArticleData.data.map((data) => (
          <ArticleCardBig
            subToggle={() => toggle(data, data.items[0])}
            imgname={data.items[0].image}
            title={data.items[0].name}
            desc={data.items[0].desc}
          ></ArticleCardBig>
        ))}
        {ArticleData.data.map((data) =>
          data.items
            .slice(1, 3)
            .map((dataItem) => (
              <ArticleCardSmall
                subToggle={() => toggle(data, dataItem)}
                imgname={dataItem.image}
                title={dataItem.name}
                desc={dataItem.desc}
              ></ArticleCardSmall>
            ))
        )}
      </div>
      <div className="w-full py-4 flex justify-center items-center lg:hidden bg-dark-bg text-body">
        {Buttons.data.map((data) =>
          data.items
            .filter((button) => button.name.toLowerCase() === "more-articles")
            .map((buttonItem) => (
              <button
                onClick={() => toggle(data, buttonItem)}
                className="title hidden lg:flex bg-dark-bg text-body"
              >
                {buttonItem.label}&emsp;
                <span>
                  {React.createElement(BsReactIcons[buttonItem.icon], {
                    className: "heading",
                  })}
                </span>
              </button>
            ))
        )}
      </div>
    </section>
  );
}

export default ArticleCard;
