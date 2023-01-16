import React from "react";
import uuid from "react-uuid";
import MultiLineResponse from "./MultiLineResponse";
import RadioButtonResponse from "./RadioButtonResponse";
import SingleLineResponse from "./SingleLineResponse";

class ResponseItem extends React.Component {
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

    render() {
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