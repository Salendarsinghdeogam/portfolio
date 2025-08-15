import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.id + "image"} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* <p className="work__desc">{item.description}</p> */}
      <p className="work__desc">
        {item.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <div className="work__button-group">
        <a href={item.gitLink} target="_blank" className="work__button">
          github <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.preview} target="_blank" className="work__button">
          preview <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;
