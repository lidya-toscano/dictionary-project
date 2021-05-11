import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partsOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <p>
                <strong>Definition:</strong>
              </p>
              {definition.definition}
              <br />
              <br />
              <p>
                <strong>Example:</strong>
              </p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
