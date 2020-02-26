import React, { useState } from "react";

import "./frequency-styles.css";
// get options as props as json object get keys, callback prop for option values

const Frequency = props => {
  console.log(props.options);
  return (
    <div className="frequency">
      <ul>
        {Object.keys(props.options).map((element, index) => {
          return (
            <li key={index}>
              <FrequencyItem
                currentSelectedAnswerOption={props.options[element].selectedValue}
                optionName={element}
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

  return (
    <div className="frequency-item">
      {props.optionName}
      {props.answerOptions.map((element, index) => {
        return (
          <div
            className={`frequency-item__option${
              props.currentSelectedAnswerOption === element
                ? "frequency-item__option--selected"
                : "frequency-item__option--not-selected"
            }`}
            onClick={() => props.setSpecificCallback(element)}
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default Frequency;
