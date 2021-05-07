import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDeafault();
    alert(`Searching for ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  https: return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onCHange={handleKeywordChange} />
      </form>
    </div>
  );
}
