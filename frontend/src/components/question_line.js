import React from "react";

export function Question_line(props) {
  let {
    handleSubmit,
    setForm_name,
    setForm_des,
    setQuestion_multi_q,
    setQuestion_multi_des,
    setQuestion_single_q,
    setQuestion_single_des,
    setQuestion_radio_q,
    setQuestion_radio_des,
    setQuestion_radio_click,
  } = props.lineState;

  return (
    <div
      className="question_title"
      style={{
        width: "50%",
        margin: "auto",
      }}
    >
      <div
        className="question_top"
        style={{
          backgroundColor: "white",
          marginTop: "30px",
          borderTopWidth: "8px",
          borderRadius: "8px",
          paddingTop: "30px",
          paddingLeft: "25px",
          paddingBottom: "30px",
        }}
      >
        <input
          type="text"
          className="question_name"
          onChange={e => setQuestion_single_q(e.target.value)}
          style={{
            color: "black",
            boxSizing: "border-box",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "40px",
            lineHeigth: "135%",
            width: "100%",
            border: "none",
            outline: "none",
            height: "35px",
          }}
          placeholder="Frage"
        ></input>
        <input
          type="text"
          className="question_desc"
          onChange={e => setQuestion_single_des(e.target.value)}
          style={{
            color: "black",
            boxSizing: "border-box",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "40px",
            marginTop: "10px",
            width: "100%",
            border: "none",
            outline: "none",
            height: "35px",
          }}
          placeholder="Frage Beschreibung"
        ></input>
        <input
          type="text"
          className="question_desc"
          style={{
            color: "black",
            boxSizing: "border-box",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "40px",
            marginTop: "10px",
            width: "100%",
            border: "none",
            outline: "none",
            height: "35px",
          }}
          placeholder="Antwort"
        ></input>
      </div>
    </div>
  );
}

export default Question_line;
