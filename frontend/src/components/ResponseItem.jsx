import React from "react";
import uuid from "react-uuid";
import MultiLineResponse from "./MultiLineResponse";
import RadioButtonResponse from "./RadioButtonResponse";
import SingleLineResponse from "./SingleLineResponse";
// This component will be used to display the response depending on the question type (multiline, singleline, radiobutton) and to add the answer to the state
class ResponseItem extends React.Component {
    // This is the constructor of the component that will be used to initialize the state
    constructor(props) {
        super(props);

        this.state = {
            answer: {
                _id: uuid(),
                form_id: this.props.question.form,
                question_id: this.props.question._id,
                type: this.props.question.fieldType,
                answer: '',
                answer_id: ''
            }
        }

        this.props.addAnswer(this.state.answer)
    }
    // This function will be used to render the component depending on the question type
    render() {
        // This switch statement will be used to display the response depending on the question type
        switch(this.props.question.fieldType) {
            case "multiline":
                return <MultiLineResponse
                    question={this.props.question}
                    answer={this.state.answer}
                    onChange={this.props.onChange}/>
            case "singleline":
                return <SingleLineResponse
                    question={this.props.question}
                    answer={this.state.answer}
                    onChange={this.props.onChange}/>
            case "radiobutton":
                return <RadioButtonResponse
                    question={this.props.question}
                    answer={this.state.answer}
                    onChange={this.props.onChange}/>
            default:
                return <h1>Type not found</h1>
        }
    }
}

export default ResponseItem;