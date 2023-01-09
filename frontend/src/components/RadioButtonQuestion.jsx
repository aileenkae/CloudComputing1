import React from "react";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import RadioButtonQuestionItem from "./RadioButtonQuestionItem";

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

    checkAnswers() {
        if (this.state.question.answers.length === 0) {
            this.state.question.answers.push({
                id: 0,
                answer: ''
            })
        }

        this.props.onChange(this.state.question)
    }

    addAnswer() {
        let question = this.state.question;

        question.answers.push({
            id: question.answers.length + 1,
            answer: ''
        })

        this.setState({ question: question })

        this.props.onChange(question)
    };

    deleteAnswer(answer) {
        let question = this.state.question;
        question.answers = question.answers.filter((a) => a.id !== answer.id)
        this.setState({question: question})
        this.props.onChange(question)
    }

    answerChanged(answer) {
        let question = this.state.question;

        let index = question.answers.indexOf(
            question.answers.filter(a => a.id === answer.id)[0]
        )

        question.answers[index] = answer

        this.setState({question: question})
        this.props.onChange(question)
    }

    handleQuestionChange(event) {
        let question = this.props.question
        question.question = event.target.value
        this.setState({question: question})
        this.props.onChange(question)
    }

    render() {
        return (
            <div className="bg-white border-t-8 border-indigo-700 rounded-xl flex flex-col">
                <div className="my-8 mx-12">
                    <input
                        type="text"
                        className="question-field text-lg mb-2"
                        onChange={this.handleQuestionChange}
                        placeholder="Frage"></input>
    
                    <FormControl className="w-full">
                        {
                            this.props.question.answers.map((answer) => {
                                return (
                                    <RadioButtonQuestionItem
                                        answer={answer}
                                        onAnswerChange={(answer) => this.answerChanged(answer)}
                                        onDelete={() => this.deleteAnswer(answer)}/>
                                );
                            })
                        }
                        <Button onClick={this.addAnswer}>Auswahl hinzufügen</Button>
                    </FormControl>
                </div>
    
            </div>
        );
    }
}

export default RadioButtonQuestion;