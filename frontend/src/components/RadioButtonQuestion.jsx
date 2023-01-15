import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import RadioButtonQuestionItem from "./RadioButtonQuestionItem";
import uuid from "react-uuid";

class RadioButtonQuestion extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            question: this.props.question
        }

        this.checkAnswers();

        this.addAnswer = this.addAnswer.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.answerChanged = this.answerChanged.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
    }

    //This function check if there is any answer option in the question, if not it will add a default option
    checkAnswers() {
        if (this.state.question.answer_variants.length === 0) {
            this.state.question.answer_variants.push({
                _id: uuid(),
                answer: ''
            })
        }

        this.props.onChange(this.state.question)
    }

    //This function is used to add a new answer option to the question
    addAnswer() {
        let question = this.state.question;

        question.answer_variants.push({ 
            _id: uuid(),
            answer: ''
        })

        this.setState({ question: question })

        this.props.onChange(question)
    };

    //This function is used to delete an answer option from the question
    deleteAnswer(answer) {
        let question = this.state.question;
        question.answer_variants = question.answer_variants.filter((a) => a._id !== answer._id)
        this.setState({question: question})
        this.props.onChange(question)
    }

     //This function is used when an answer option is changed
    answerChanged(answer) {
        let question = this.state.question;

        let index = question.answer_variants.indexOf(
            question.answer_variants.filter(a => a._id === answer._id)[0]
        )

        question.answer_variants[index] = answer

        this.setState({question: question})
        this.props.onChange(question)
    }

    //This function is used when the question text is changed
    handleQuestionChange(event) {
        let question = this.props.question
        question.question = event.target.value
        this.setState({question: question})
        this.props.onChange(question)
    }

    render() {
        return (
            <div className="w-full bg-white border-t-8 border-indigo-700 rounded-xl flex flex-col">
                <div className="my-8 mx-12">
                    <input
                        value={this.props.question.question}
                        type="text"
                        className="question-field text-lg mb-2"
                        onChange={this.handleQuestionChange}
                        placeholder="Frage"></input>
    
                    <FormControl className="w-full">
                        {
                            this.props.question.answer_variants.map((answer) => {
                                return (
                                    <RadioButtonQuestionItem
                                        key={answer._id}
                                        answer={answer}
                                        onAnswerChange={(answer) => this.answerChanged(answer)}
                                        onDelete={() => this.deleteAnswer(answer)}/>
                                );
                            })
                        }
                        <Button onClick={this.addAnswer}>Auswahl hinzufügen</Button>
                    </FormControl>
                </div>
    
                <div className="flex items-center justify-end">
                    <Button onClick={() => this.props.onDelete(this.props.question)} className="text-red-700 m-2">
                        Löschen
                    </Button>
                </div>
            </div>
        );
    }
}

export default RadioButtonQuestion;