import React from "react";
import "./Markdown.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Model from "../Model/Model";

export default function Markdown() {
  const dispatch = useDispatch();

  const [markdown, setmarkdown] = useState("welcome to markdown");
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const doubleCLick = async (e) => {
    // e.preventDefault();
    const phrase = window.getSelection().toString();

    dispatch({ type: "LOADING_TRUE" });

    await fetch(
      `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&exintro=1&titles=${phrase}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data);
        dispatch({ type: "SEARCH", payload: data });
        dispatch({ type: "LOADING_FALSE" });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <h1>Markdown Editor</h1>

      <div className="center-div">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setmarkdown(e.target.value)}
        ></textarea>

        <div
          className="right-side"
          onDoubleClick={() => {
            doubleCLick();
            toggle();
          }}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
          <Model toggle={toggle} modal={modal} />
        </div>
      </div>
    </>
  );
}
