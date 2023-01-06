import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

function Question_ra(props) {
  
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
  } = props.radioState;
  
  
  
  const [anchorEl, setAnchorEl] = React.useState(null); //useState um die Variable zu ändern
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [radioList, setInputList] = useState([
    { id: 0, name: "Frage definieren" },
    { id: 1, name: "Frage definieren" },
  ]);

  const AddRadio = (event) => {
    setInputList(
      radioList.concat([{ id: radioList.length + 1, text: "Frage definieren" }])
    );
  };

  const deleteRadio = (id) => {
    setInputList(radioList.filter((radio) => radio.id !== id));
  };

  const [value, setValue] = React.useState("male");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
          onChange={e => setQuestion_radio_q(e.target.value)}
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
          onChange={e => setQuestion_radio_des(e.target.value)}
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

        <FormControl
          style={{
            paddingTop: "20px",
          }}
        >
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {radioList.length > 0 &&
              radioList.map((question) => {
                return (
                  <div>
                    <FormControlLabel
                      value={question.id}
                      control={<Radio />}
                      label={
                        <input
                          type="text"
                          /*onChange={e => setQuestion_radio_click(e.target.value)} Lösen*/
                          style={{
                            border: "none",
                            outline: "none",
                          }}
                          placeholder="Frage Beschreibung"
                          onChange={handleChange}
                        ></input>
                      }
                    />
                    <Button
                      style={{
                        marginLeft: "5px",
                      }}
                      onClick={() =>
                        setInputList(
                          radioList.filter((q) => q.id !== question.id)
                        )
                      }
                    >
                      Löschen
                    </Button>
                  </div>
                );
              })}
          </RadioGroup>
          <Button onClick={AddRadio}>Auswahl hinzufügen</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default Question_ra;
