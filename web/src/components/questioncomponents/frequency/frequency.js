import React, { useState } from "react";

import "./frequency-styles.css";
// get options as props as json object get keys, callback prop for option values

const Frequency = props => {
  // console.log(props.options);
  return (
    <div className="frequency">
      <ul className="frequency__list">
        {Object.keys(props.options).map((element, index) => {
          return (
            <li className="frequency__list-item" key={index}>
              <FrequencyItem
                currentSelectedAnswerOption={props.options[element].selectedValue}
                optionName={element}
                optionImage={props.options[element].image}
                answerOptions={props.answerOptions}
                setSpecificCallback={value => props.setSpecificCallback(element, value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const FrequencyItem = props => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(props.currentSelectedAnswerOption);

  const handleOptionClick = element => {
    props.setSpecificCallback(element);
    setIsOpen(false);
  };

  return (
    <div
      className={`frequency-item ${
        isOpen ? "frequency-item--is-open" : "frequency-item--is-closed"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="frequency-item__label-container">
        <img className={"frequency-item__image"} src={props.optionImage} />
        <div className={`frequency-item__title`}>
          {props.optionName}{" "}
          {props.currentSelectedAnswerOption ? null : (
            <div className="frequency-item__notification" />
          )}
        </div>
        <div
          className="frequency-item__label-container__selected-option"
          style={{
            backgroundColor: props.currentSelectedAnswerOption ? "#2e2e2e" : "white"
          }}
        >
          {props.currentSelectedAnswerOption}
        </div>
      </div>

      <div className="frequency-item__options">
        {props.answerOptions.map((element, index) => {
          return (
            <div
              key={index}
              className={`frequency-item__option 
            ${
              props.currentSelectedAnswerOption === element
                ? "frequency-item__option--selected"
                : "frequency-item__option--not-selected"
            }`}
              onClick={() => handleOptionClick(element)}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Frequency;
