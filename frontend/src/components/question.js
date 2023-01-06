import { Accordion, AccordionSummary } from "@mui/material";
import React, { useState, useEffect } from "react";
import Question_line from "./question_line";
import Question_textbox from "./question_textbox";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Question_ra from "./quest-r";

function Question(props) {
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
  } = props.formState;

  //Object TextData für Textbox, um auf die Klasse question_textbox zuzugreifen
  let TextData = {
    setQuestion_multi_q,
    setQuestion_multi_des,
  };

  //Object SingleData für QuestionLine, um auf die Klasse question_line zuzugreifen
  let singleData = {
    setQuestion_single_q,
    setQuestion_single_des,
  };

  //Object SingleData für QuestionLine, um auf die Klasse question_line zuzugreifen
  let radioData = {
    setQuestion_radio_q,
    setQuestion_radio_des,
    setQuestion_radio_click,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if(props.question.type === "multiline") {
    return (
      <>
                <Question_textbox
                textState={TextData}
                />
                <Button
                  style={{
                    marginLeft: "75%",
                  }}
        onClick={() => {props.deleteQuestion(props.question)}}
                >
                  Löschen
                </Button>
              </>
    )
  }else if(props.question.type === "singleline") {
    return (
<>
                <Question_line lineState={singleData} />
                <Button
                  style={{
                    marginLeft: "75%",
                  }}
        onClick={() => {props.deleteQuestion(props.question)}}

                >
                  Löschen
                </Button>
              </>
    )
  }else {
    return (
      <>
      <Question_ra radioState={radioData} />
      <Button
        style={{
          marginLeft: "75%",
        }}
        onClick={() => {props.deleteQuestion(props.question)}}
      >
        Löschen
      </Button>
    </>
    )
  }
}

export default Question;
