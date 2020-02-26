import React, { useState } from "react";

import "./frequency-styles.css";
// get options as props as json object get keys, callback prop for option values

const Frequency = props => {
  console.log(props.options);
  return (
    <div>
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
    <div>
      {props.optionName}
      {props.answerOptions.map((element, index) => {
        return (
          <div
            className={`frequency-item ${
              props.currentSelectedAnswerOption === element
                ? "frequency-item--selected"
                : "frequency-item--not-selected"
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
