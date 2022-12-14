import React, { useId, useState }from "react";
import Question from "./question";
import Question_Radio from "./questions_radio";
import MultipleChoice from "./questions_multiple";
import RadioV2 from "./radio";
import AdbIcon from "@mui/icons-material/Description";
import Typography from "@mui/material/Typography";
import { Link, useParams} from "react-router-dom";
import FadeMenu from "./add_question";



export function Form() {


    const params = useParams();



    
    const form_json = { 
      id_form: params.id,

    };
 

    const json_form = JSON.stringify(form_json);
  
    console.log(json_form);
    

    


  return (
    <div>
      <div
        style={{
          position: "sticky",
          padding: 8,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#AADAB8",
          maxWidth: "xl",
        }}
      >
        <Link to="/home">
          <AdbIcon
            style={{
              display: "flex",
              marginLeft: 10,
              fontSize: "3rem",
              color: "#f4f4f9",
            }}
          />
        </Link>

        <input
          
          type="text"
          className="form_name"
          style={{
            color: "#f4f4f9",
            boxSizing: "border-box",
            marginLeft: "10px",
            fontSize: "32px",
            fontWeight: "400",
            lineHeight: "40px",
            lineHeigth: "135%",
            width: "30%",
            border: "none",
            outline: "none",
            height: "35px",
            backgroundColor: "#AADAB8",
          }}
          placeholder="Formular Name"
          defaultValue={"Formular Name"}
          
        ></input>
        
      </div>
      <div
        className="question_box"
        style={{
          backgroundColor: "#f4f4f9",
          height: "100%",
          paddingBottom: "30px",
        }}
      >
        <Question />
      </div>
    </div>
  );
}

export default Form;



