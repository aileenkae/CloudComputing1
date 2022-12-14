import { Accordion, AccordionSummary } from "@mui/material";
import React, { useState, useEffect } from "react";
import Question_line from "./question_line";
import Question_textbox from "./question_textbox";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Question_ra from "./quest-r";
import uuid from 'react-uuid'


function Question() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [inputList, setInputList] = useState([]);

  const addSingleline = (event) => {
    setInputList((prevState) => {
      const id = prevState.length > 0 ? prevState[prevState.length - 1].id : 0;
      console.log([...prevState, { id: id + 1, type: "singleline" }]);

      return [...prevState, { id: id + 1, type: "singleline" }];
    });
  };

  const addMultileline = (event) => {
    setInputList((prevState) => {
      const id = prevState.length > 0 ? prevState[prevState.length - 1].id : 0;

      console.log([...prevState, { id: id + 1, type: "multiline" }]);

      return [...prevState, { id: id + 1, type: "multiline" }];
    });
  };

  const addRadio = (event) => {
    setInputList((prevState) => {
      const id = prevState.length > 0 ? prevState[prevState.length - 1].id : 0;

      //Kann man löschen
      console.log([...prevState, { id: id + 1, type: "radio" }]);

      return [...prevState, { id: id + 1, type: "radio" }];
    });
  };

  const [formNameValue, setInputValue] = useState('');
  // handle the onChange event
  const changeName = (event) => {
    // update the inputValue state variable with the new value
    setInputValue(event.target.value);
  };

  const [formBeschreibungValue, setBeschreibungValue] = useState('');
  const changeBeschreibung = (event) => {
    // update the inputValue state variable with the new value
    setBeschreibungValue(event.target.value);
  };

  const form_json_inhalt = {
    form_name: formNameValue,
    form_beschreibung: formBeschreibungValue
  };
  console.log(form_json_inhalt)

  /*function questionsUI() {
        return questions.map((ques,i) => (
            <Accordion expanded={ques.open} className={ques[i].open ? 'add border' : ''}>
                <AccordionSummary 
                    aria-controls='panel1a-content'
                    id="panel1a-header"
                    elevation={1} style={{width:'100%'}}>

                </AccordionSummary>
            </Accordion>
        ))
    }*/
  return (
    <div>
      <br />
      <div
        className="question_part"
        style={{
          margin: "auto",
          width: "50%",
        }}
      >
        <div className="question_title">
          <div
            className="question_top"
            style={{
              backgroundColor: "white",

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
              style={{
                color: "black",
                boxSizing: "border-box",
                fontSize: "32px",
                fontWeight: "400",
                lineHeight: "40px",
                lineHeigth: "135%",
                width: "100%",
                border: "none",
                outline: "none",
                height: "35px",
              }}
              placeholder="Formular Name"
              onChange={changeName}
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
              placeholder="Beschreibung"
              onChange={changeBeschreibung}
            ></input>
          </div>
        </div>

        {/*questionsUI()*/}
      </div>

      {inputList.length > 0 &&
        inputList.map((question) => {
          if (question.type === "multiline") {
            return (
              <>
                <Question_textbox key={inputList.length} />
                <Button style={{
                                 marginLeft: "75%",
                            }}
                  onClick={() =>
                    setInputList(inputList.filter((q) => q.id !== question.id))
                  }
                >
                  Löschen
                </Button>
              </>
            );
          } else if (question.type === "singleline") {
            return (
              <>
                <Question_line key={inputList.length} />
                <Button style={{
                                 marginLeft: "75%",
                            }}
                  onClick={() =>
                    setInputList(inputList.filter((q) => q.id !== question.id))
                  }
                >
                  Löschen
                </Button>
              </>
            );
          } else {
            return (
              <>
                <Question_ra key={inputList.length} />
                <Button style={{
                                 marginLeft: "75%",
                            }}
                  onClick={() =>
                    setInputList(inputList.filter((q) => q.id !== question.id))
                  }
                >
                  Löschen
                </Button>
              </>
            );
          }
        })}
      <Button
         style={{
            marginLeft: "auto",
            marginRight: "auto"
        }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Frage hizufügen
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={addMultileline}>Multiline</MenuItem>
        <MenuItem onClick={addSingleline}>Singleline</MenuItem>
        <MenuItem onClick={addRadio}>Radiobutton</MenuItem>
      </Menu>
    </div>
  );
}

export default Question;
