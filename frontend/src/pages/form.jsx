import React, {useState} from "react";
import Question from "../components/question";
import {useNavigate} from "react-router-dom";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import {Button, Fade, Menu, MenuItem} from "@mui/material";

export function Form() {
    //Für Unique ID
    const unique_id = uuid();

    //Für Navigation
    const navigate = useNavigate();

    //Für Tabs
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [form_name, setForm_name] = useState("");
    const [form_des, setForm_des] = useState("");
    const [question_multi_q, setQuestion_multi_q] = useState("");
    const [question_multi_des, setQuestion_multi_des] = useState("");
    const [question_single_q, setQuestion_single_q] = useState("");
    const [question_single_des, setQuestion_single_des] = useState("");
    const [question_radio_q, setQuestion_radio_q] = useState("");
    const [question_radio_des, setQuestion_radio_des] = useState("");
    const [question_radio_click, setQuestion_radio_click] = useState("");

    //on form submit click handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const newForm = {
            form_id: unique_id,
            form_name,
            form_des,
            question_multi_q,
            question_multi_des,
            question_single_q,
            question_single_des,
            question_radio_q,
            question_radio_des,
            question_radio_click
        };

        axios.post('http://localhost:5000/form/form_site', newForm)
        /*.then(res => console.log(res.data));

    setForm_name('');
    setForm_des('');
    setQuestion_multi_q('');
    setQuestion_multi_des('');
    setQuestion_single_q('');
    setQuestion_single_des('');
    setQuestion_radio_q('');
    setQuestion_radio_des('');
    setQuestion_radio_click('');

    /* this.setState({form_id: '', form_name: '', form_des: '', question_multi_q: '', question_multi_des: '', question_single_q: '', question_single_des: '', question_radio_q: '', question_radio_des: '', question_radio_click: ''})*/
        console.log(newForm);
        this
            .props
            .history
            .push('./home');

        //redirect to /home
        navigate('home')

    };

    let formData = {
        handleSubmit,
        setForm_name,
        setForm_des,
        setQuestion_multi_q,
        setQuestion_multi_des,
        setQuestion_single_q,
        setQuestion_single_des,
        setQuestion_radio_q,
        setQuestion_radio_des,
        setQuestion_radio_click
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [inputList, setInputList] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const addSingleline = (event) => {
        setInputList((prevState) => {
            const id = prevState.length > 0
                ? prevState[prevState.length - 1].id
                : 0;
            console.log([
                ...prevState, {
                    id: id + 1,
                    type: "singleline"
                }
            ]);

            return [
                ...prevState, {
                    id: id + 1,
                    type: "singleline"
                }
            ];
        });
    };

    const addMultileline = (event) => {
        setInputList((prevState) => {
            const id = prevState.length > 0
                ? prevState[prevState.length - 1].id
                : 0;

            console.log([
                ...prevState, {
                    id: id + 1,
                    type: "multiline"
                }
            ]);

            return [
                ...prevState, {
                    id: id + 1,
                    type: "multiline"
                }
            ];
        });
    };

    const addRadio = (event) => {
        setInputList((prevState) => {
            const id = prevState.length > 0
                ? prevState[prevState.length - 1].id
                : 0;

            //Kann man löschen
            console.log([
                ...prevState, {
                    id: id + 1,
                    type: "radio"
                }
            ]);

            return [
                ...prevState, {
                    id: id + 1,
                    type: "radio"
                }
            ];
        });
    };

    const deleteQuestion = (question) => {
        setInputList(inputList.filter((q) => q.id !== question.id))
    }

    const onChangeTitle = (question) => {
        // Herausfiniden der Question in inputList Ändern der Question
    }

    return (<div>
        <div
            style={{
                position: "sticky",
                padding: 8,
                display: "flex",
                alignItems: "center",
                backgroundColor: "#AADAB8",
                maxWidth: "xl"
            }}>
            {/*}
            <Link to="/home">
                <AdbIcon
                    style={{
                        display: "flex",
                        marginLeft: 10,
                        fontSize: "3rem",
                        color: "#f4f4f9"
                    }}/>
            </Link>
            */}
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
                    backgroundColor: "#AADAB8"
                }}
                defaultValue={"Formular Name"}
                value={form_name}></input>
        </div>
        <div
            className="question_box"
            style={{
                backgroundColor: "#f4f4f9",
                height: "100%",
                paddingBottom: "30px"
            }}>
            <div>
                <Box
                    sx={{
                        width: '100%',
                        typography: 'body1'
                    }}>
                    <TabContext value={value}>
                        <Box
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider'
                            }}>
                            <TabList
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                                centered="centered">
                                <Tab label="Fragen" value="1"/>
                                <Tab label="Antworten" value="2"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" centered="centered">
                            <div
                                className="question_part"
                                style={{
                                    margin: "auto",
                                    width: "50%"
                                }}>
                                <div className="question_title">
                                    <div
                                        className="question_top"
                                        style={{
                                            backgroundColor: "white",

                                            borderTopWidth: "8px",
                                            borderRadius: "8px",
                                            paddingTop: "30px",
                                            paddingLeft: "25px",
                                            paddingBottom: "30px"
                                        }}>
                                        <input
                                            type="text"
                                            className="question_name"
                                            onChange={(e) => setForm_name(e.target.value)}
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
                                                height: "35px"
                                            }}
                                            placeholder="Formular Name"></input>
                                        <input
                                            type="text"
                                            className="question_desc"
                                            onChange={(e) => setForm_des(e.target.value)}
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
                                                height: "35px"
                                            }}
                                            placeholder="Beschreibung"></input>
                                    </div>
                                </div>

                                {/*questionsUI()*/}
                            </div>
                            {
                                inputList.length > 0 && inputList.map((question) => (
                                    <Question
                                        formState={formData}
                                        onChangeTitle={onChangeTitle}
                                        question={question}
                                        deleteQuestion={deleteQuestion}/>
                                ))
                            }
                            <Button
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                                id="fade-button"
                                aria-controls={open
                                    ? "fade-menu"
                                    : undefined}
                                aria-haspopup="true"
                                aria-expanded={open
                                    ? "true"
                                    : undefined}
                                onClick={handleClick}>
                                Frage hizufügen
                            </Button>
                            <Button
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                                id="submit"
                                aria-controls={open
                                    ? "fade-menu"
                                    : undefined}
                                aria-haspopup="true"
                                aria-expanded={open
                                    ? "true"
                                    : undefined}
                                method="POST"
                                onClick={handleSubmit}>
                                Speichern
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    "aria-labelledby" : "fade-button"
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}>
                                <MenuItem
                                    onClick={addMultileline}
                                    onChange={(e) => setQuestion_multi_q(e.target.value)}>
                                    Multiline
                                </MenuItem>
                                <MenuItem
                                    onClick={addSingleline}
                                    onChange={(e) => setQuestion_single_q(e.target.value)}>
                                    Singleline
                                </MenuItem>
                                <MenuItem
                                    onClick={addRadio}
                                    onChange={(e) => setQuestion_radio_q(e.target.value)}>
                                    Radiobutton
                                </MenuItem>
                            </Menu>
                        </TabPanel>
                        <TabPanel value="2" centered="centered"><Question formState={formData}/></TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    </div>
    );
}